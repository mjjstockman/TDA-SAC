const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
require('dotenv').config();
const createError = require('http-errors');
const { User } = require('./models/user');
const { v4: uuidv4 } = require('uuid');
const cookieParser = require('cookie-parser');

const port = 3001;

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch((err) => {
    console.log(err);
  });

app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(morgan);
app.use(helmet());

app.get('/', async (_, res, next) => {
  try {
    const users = await User.find();
    const userEmails = users.map((user) => user.email);

    // Render an HTML page with the user emails
    const html = `
        <html>
          <head>
            <title>User Emails</title>
          </head>
          <body>
            <h1>User Emails</h1>
            <ul>
              ${userEmails.map((email) => `<li>${email}</li>`).join('')}
            </ul>
          </body>
        </html>
      `;

    res.send(html);
  } catch (err) {
    return next(createError(500, 'Internal Server Error'));
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
