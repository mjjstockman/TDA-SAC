const mongoose = require("mongoose");

const holidaySchema = mongoose.Schema({
  title: String,
  username: String,
  startDate: String,
  endDate: String,
  totalDays: Number,
  colour: String,
  note: String,
  remaining: Number,
  approved: Boolean,
});

module.exports.Holiday = mongoose.model("Holiday", holidaySchema);