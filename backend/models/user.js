const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: {
    type: String,
    unique: true,
  },
  password: String,
  lastPasswordChanged: String,
  username: String,
  forename: String,
  surname: String,
  icon: String,
  role: String,
  team: String,
  date: String,
  active: Boolean,
});

module.exports.User = mongoose.model("User", userSchema);
