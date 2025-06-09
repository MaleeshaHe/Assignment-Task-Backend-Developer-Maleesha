const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");

// Import routes
const userRoutes = require("./routes/user");
const productRoutes = require("./routes/product");

// Initialize express app
const app = express();

// Load environment variables
dotenv.config();

// Middleware to parse JSON requests
app.use(express.json());

app.use("/users", userRoutes);
app.use("/products", productRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the Backend API");
});

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
