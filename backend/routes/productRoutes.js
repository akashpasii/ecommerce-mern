const express = require("express");
const { authenticateToken } = require("../middleware/authenticateToken");
const admin = require("../middleware/adminMiddleware");
const {
  getProduct,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController.js");

const router = express.Router();

// all products
router.get("/", getProduct);
router.post("/", authenticateToken, admin, createProduct);
// specific product
router.get("/:id", getProductById);
router.put("/:id", authenticateToken, admin, updateProduct);
router.delete("/:id", authenticateToken, admin, deleteProduct);

module.exports = router;
