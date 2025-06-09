const express = require("express");
const bodyParser = require("body-parser");
const { sequelize } = require("./models");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");

// Initialize express app
const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

app.use("/users", userRoutes);
app.use("/products", productRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  await sequelize.sync();
  console.log(`Server running on port ${PORT}`);
});
