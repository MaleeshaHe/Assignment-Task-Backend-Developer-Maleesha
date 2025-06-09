// Product controller
const Product = require("../models/Product");

// Get all products
exports.getAll = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: "Server error." });
  }
};

// Create a new product
exports.create = async (req, res) => {
  const { name, price, quantity } = req.body;
  if (!name || price == null || quantity == null)
    return res.status(400).json({ message: "All fields required." });
  try {
    const product = new Product({ name, price, quantity });
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ message: "Server error." });
  }
};

// Get a product by ID
exports.getById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product)
      return res.status(404).json({ message: "Product not found." });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: "Server error." });
  }
};

// Update a product by ID
exports.update = async (req, res) => {
  const { name, price, quantity } = req.body;
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      { name, price, quantity },
      { new: true, runValidators: true }
    );
    if (!product)
      return res.status(404).json({ message: "Product not found." });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: "Server error." });
  }
};

// Delete a product by ID
exports.remove = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product)
      return res.status(404).json({ message: "Product not found." });
    res.json({ message: "Product deleted." });
  } catch (err) {
    res.status(500).json({ message: "Server error." });
  }
};
