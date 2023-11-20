const express = require("express");
const router = express.Router();
const HolidayRoutes = require("../controllers/holidayController");

router.post("/register", HolidayRoutes.register);

module.exports = router;
