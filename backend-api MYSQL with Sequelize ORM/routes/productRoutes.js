const express = require("express");
const productController = require("../controllers/productController");
const router = express.Router();

// Create a new product
router.post("/", productController.createProduct);

// Get all products
router.get("/", productController.getAllProducts);

// Get product by ID
router.get("/:id", productController.getProductById);

// Update product by ID
router.put("/:id", productController.updateProduct);

// Delete product by ID
router.delete("/:id", productController.deleteProduct);

module.exports = router;
