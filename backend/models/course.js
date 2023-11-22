const mongoose = require("mongoose");

const courseSchema = mongoose.Schema({
  title: String,
  userid: String,
  email: String,
  startDate: String,
  endDate: String,
  totalDays: Number,
  colour: String,
  description: String,
});

module.exports.Course = mongoose.model("Course", courseSchema);