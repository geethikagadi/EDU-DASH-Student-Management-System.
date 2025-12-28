const express = require("express");
const Attendance = require("../models/Attendance");
const router = express.Router();

router.post("/", async (req, res) => {
  const record = new Attendance(req.body);
  await record.save();
  res.json(record);
});

router.get("/:studentId", async (req, res) => {
  res.json(await Attendance.find({ studentId: req.params.studentId }));
});

module.exports = router;
