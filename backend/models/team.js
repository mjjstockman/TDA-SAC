const mongoose = require("mongoose");

const teamSchema = mongoose.Schema({
  title: String,
  manager: String,
  members: Array,
  date: String,
  active: Boolean,
});

module.exports.Team = mongoose.model("Team", teamSchema);