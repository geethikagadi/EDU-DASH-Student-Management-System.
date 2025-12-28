const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
  courseName: String,
  subjects: [String]
});

module.exports = mongoose.model("Course", CourseSchema);
