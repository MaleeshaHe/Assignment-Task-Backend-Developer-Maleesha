// User controller
const User = require("../models/User");

// Register a new user
exports.register = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res.status(400).json({ message: "Username and password required." });
  try {
    const existing = await User.findOne({ username });
    if (existing)
      return res.status(409).json({ message: "Username already exists." });
    const user = new User({ username, password });
    await user.save();
    res.status(201).json({ message: "User registered." });
  } catch (err) {
    res.status(500).json({ message: "Server error." });
  }
};

// Login an existing user
exports.login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res.status(400).json({ message: "Username and password required." });
  try {
    const user = await User.findOne({ username, password });
    if (!user) return res.status(401).json({ message: "Invalid credentials." });
    res.json({ message: "Login successful." });
  } catch (err) {
    res.status(500).json({ message: "Server error." });
  }
};
