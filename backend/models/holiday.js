const mongoose = require("mongoose");

const holidaySchema = mongoose.Schema({
  title: String,
  username: String,
  date: String,
  colour: String,
  description: String,
  remaining: Number,
  approved: Boolean,
});

module.exports.Holiday = mongoose.model("Holiday", holidaySchema);