const mongoose = require("mongoose");

const AttendanceSchema = new mongoose.Schema({
  studentId: String,
  subject: String,
  date: String,
  status: String
});

module.exports = mongoose.model("Attendance", AttendanceSchema);
