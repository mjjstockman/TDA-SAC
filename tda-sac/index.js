const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
require("dotenv").config();
const createError = require("http-errors");
const { User } = require("./models/user");
const { v4: uuidv4 } = require("uuid");

const port = 3001;

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use(morgan);
app.use(helmet());

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
