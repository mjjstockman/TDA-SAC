const mongoose = require("mongoose");

const sickSchema = mongoose.Schema({
  title: String,
  username: String,
  date: String,
  colour: String,
  description: String,
});

module.exports.Sick = mongoose.model("Sick", sickSchema);