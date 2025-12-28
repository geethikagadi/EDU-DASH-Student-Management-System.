const express = require("express");
const Course = require("../models/Course");
const router = express.Router();

router.post("/", async (req, res) => {
  const course = new Course(req.body);
  await course.save();
  res.json(course);
});

router.get("/", async (req, res) => {
  res.json(await Course.find());
});

module.exports = router;
