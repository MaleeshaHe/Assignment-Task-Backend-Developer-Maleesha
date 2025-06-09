const { User } = require("../models");

// Register new user
exports.register = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res.status(400).json({ error: "Username and password required" });
  try {
    // Check if user already exists
    const existingUser = await User.findOne({ where: { username } });
    if (existingUser) {
      return res.status(400).json({ error: "Username already exists" });
    }
    // Create new user
    const user = await User.create({ username, password });
    res.status(201).json({ id: user.id, username: user.username });
  } catch (err) {
    res.status(400).json({ error: "Username already exists" });
  }
};

// Login user
exports.login = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ where: { username, password } });
  if (!user) return res.status(401).json({ error: "Invalid credentials" });
  res.json({
    message: "Login successful",
    id: user.id,
    username: user.username,
  });
};
