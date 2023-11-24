const createError = require("http-errors");
const dayjs = require("dayjs");
const { Course } = require("../models/course");

exports.register = async (req, res, next) => {
  const { title, userid, email, startDate, endDate, colour, description } =
    req.body;

  const date1 = dayjs(startDate);
  const date2 = dayjs(endDate);

  const daysDifference = date2.diff(date1, "day");

  // Function to check if a given date is a weekend (Saturday or Sunday)
  const isWeekend = (date) => {
    const dayOfWeek = date.day();
    return dayOfWeek === 0 || dayOfWeek === 6;
  };

  // Filter out weekends between startDate and endDate
  const filteredDates = [];
  for (let i = 0; i <= daysDifference; i++) {
    const currentDate = date1.add(i, "day");

    if (!isWeekend(currentDate)) {
      filteredDates.push(currentDate.format("YYYY-MM-DD"));
    }
  }

  const totalDays = filteredDates.length;

  const course = new Course({
    title,
    userid,
    email,
    startDate,
    endDate,
    totalDays,
    colour,
    description,
  });

  await course.save();

  res.status(201).send({
    message: "Created Course",
  });
};
