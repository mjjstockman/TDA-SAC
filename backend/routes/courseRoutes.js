const express = require("express");
const router = express.Router();
const CourseRoutes = require("../controllers/courseController");

router.post("/register", CourseRoutes.register);

module.exports = router;
