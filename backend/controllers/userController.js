const bcrypt = require("bcrypt");
const { User } = require("../models/user");
const createError = require("http-errors");
const saltRounds = 10;

// username : forename + surname,
// forename,
// surname,

exports.register = async (req, res, next) => {
  const { email, password, role, team } = req.body;

  const encryptedPass = await bcrypt.hash(password, saltRounds);
  const today = new Date();

  const user = new User({
    email,
    password: encryptedPass,
    lastPasswordChanged: new Date(),
    role,
    team,
    date: today,
    active: true,
  });

  await user.save();

  res.status(201).send({
    message: "User created",
  });
};

exports.update = async (req, res, next) => {
  const { password, forename, surename } = req.body;

  const user = {
    password,
    forename,
    surename,
    username: forename + " " + surename,
    icon,
  };

  await user.save();

  res.status(201).send({
    message: "User updated",
  });
};

exports.remove = async (req, res, next) => {
  
  User.findAndDeleteById(_id);

};
