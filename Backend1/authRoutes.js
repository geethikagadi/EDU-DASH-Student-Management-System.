const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

// Register
router.post("/register", async (req, res) => {
  try {
    const { email,name, password , role} = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
    name,
      email,
      password: hashedPassword,
      role
    });

    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Login

 router.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Username validation
  if (!username || username.length < 6) {
    return res.status(400).json({ msg: "Username must be atleast 6 characters" });
  }

  // Password validation
  if (!password || password.length < 8) {
    return res.status(400).json({ msg: "Password must be atleast 8 characters" });
  }

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

  if (!passwordRegex.test(password)) {
    return res.status(400).json({
      msg: "Password must contain uppercase, lowercase, number & special character"
    });
  }

  res.json({ msg: "Login validation passed" });
});

module.exports = router;
