const express = require("express");
const Attendance = require("../models/Attendance");
const Result = require("../models/Result");
const router = express.Router();

// Student-wise report
router.get("/student/:id", async (req, res) => {
  const attendance = await Attendance.find({ studentId: req.params.id });
  const results = await Result.find({ studentId: req.params.id });
  res.json({ attendance, results });
});

module.exports = router;
