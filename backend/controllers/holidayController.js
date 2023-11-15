const { Sick } = require("../models/sick");
const createError = require("http-errors");
const dayjs = require("dayjs");
const { Holiday } = require("../models/holiday");

exports.register = async (req, res, next) => {
  const { title, userid, email, startDate, endDate, colour, note } = req.body;

  const date2 = new Date(startDate);
  const date1 = new Date(endDate);

  const timeDifference = date1 - date2;
  const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
  const totalLeave = 28;
  console.log(date1);
  console.log(date2);
  console.log(timeDifference);
  console.log(daysDifference);

  const totalDays = daysDifference;
  const remaining = totalLeave - daysDifference;

  const holiday = new Holiday({
    title,
    userid,
    email,
    startDate,
    endDate,
    totalDays,
    colour,
    note,
    remaining,
    approved: false,
  });

  await holiday.save();

  res.status(201).send({
    message: "Created Holiday Request",
  });
};
