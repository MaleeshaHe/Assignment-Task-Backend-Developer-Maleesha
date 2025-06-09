const { Product } = require("../models");

// Create a new product
exports.createProduct = async (req, res) => {
  const { name, price, quantity } = req.body;
  try {
    if (!name || price == null || quantity == null) {
      return res.status(400).json({ error: "All fields are required" });
    }
    // Validate price and quantity
    if (typeof price !== "number" || typeof quantity !== "number") {
      return res
        .status(400)
        .json({ error: "Price and quantity must be numbers" });
    }
    // Check if product already exists
    const existingProduct = await Product.findOne({ where: { name } });
    if (existingProduct) {
      return res.status(400).json({ error: "Product already exists" });
    }
    // Create new product
    const product = await Product.create({ name, price, quantity });
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all products
exports.getAllProducts = async (req, res) => {
  // Fetch all products from the database
  const products = await Product.findAll();
  res.json(products);
};

// Get product by ID
exports.getProductById = async (req, res) => {
  const product = await Product.findByPk(req.params.id);
  if (!product) return res.status(404).json({ error: "Product not found" });
  res.json(product);
};

// Update product by ID
exports.updateProduct = async (req, res) => {
  // Validate request body
  if (!req.body.name || req.body.price == null || req.body.quantity == null) {
    return res.status(400).json({ error: "All fields are required" });
  }
  // Validate price and quantity
  if (
    typeof req.body.price !== "number" ||
    typeof req.body.quantity !== "number"
  ) {
    return res
      .status(400)
      .json({ error: "Price and quantity must be numbers" });
  }
  // Check if product exists
  if (req.body.price < 0 || req.body.quantity < 0) {
    return res
      .status(400)
      .json({ error: "Price and quantity must be non-negative" });
  }
  // Check if product exists
  const existingProduct = await Product.findOne({
    where: { name: req.body.name, id: { [Op.ne]: req.params.id } },
  });
  if (existingProduct) {
    return res
      .status(400)
      .json({ error: "Product with this name already exists" });
  }
  // Update product
  const { name, price, quantity } = req.body;
  const product = await Product.findByPk(req.params.id);
  if (!product) return res.status(404).json({ error: "Product not found" });
  try {
    await product.update({ name, price, quantity });
    res.json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete product by ID
exports.deleteProduct = async (req, res) => {
  const product = await Product.findByPk(req.params.id);
  if (!product) return res.status(404).json({ error: "Product not found" });
  await product.destroy();
  res.json({ message: "Product deleted" });
};
