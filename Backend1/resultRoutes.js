const express = require("express");
const Result = require("../models/Result");
const router = express.Router();

router.post("/", async (req, res) => {
  const result = new Result(req.body);
  await result.save();
  res.json(result);
});

router.get("/:studentId", async (req, res) => {
  res.json(await Result.find({ studentId: req.params.studentId }));
});

module.exports = router;
