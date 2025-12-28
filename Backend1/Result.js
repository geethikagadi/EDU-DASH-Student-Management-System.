const mongoose = require("mongoose");

const ResultSchema = new mongoose.Schema({
  studentId: String,
  subject: String,
  marks: Number
});

module.exports = mongoose.model("Result", ResultSchema);
