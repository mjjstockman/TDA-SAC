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
  notifications : Array,
  active: Boolean,
});


userSchema.statics.findByEmail = function (email) {
  return this.findOne({ email });
};

module.exports.User = mongoose.model("User", userSchema);
