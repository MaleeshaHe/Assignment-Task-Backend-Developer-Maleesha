const express = require("express");
const productController = require("../controllers/productController");
const router = express.Router();

// Get all products
router.get("/", productController.getAll);

// Create a product
router.post("/", productController.create);

// Get product by ID
router.get("/:id", productController.getById);

// Update product
router.put("/:id", productController.update);

// Delete product
router.delete("/:id", productController.remove);

module.exports = router;
