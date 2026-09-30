const expresss = require("express");
const router = expresss.Router();

const { authenticateToken } = require("../middleware/authenticateToken");
const admin = require("../middleware/adminMiddleware");
const {
  createOrder,
  getMyOrder,
  getAllOrders,
  updateOrderStatus,
} = require("../controllers/orderController");

router.post("/", authenticateToken, createOrder);
router.get("/", authenticateToken, admin, getAllOrders);
router.get("/myorders", authenticateToken, getMyOrder);
router.put("/:id/status", authenticateToken, admin, updateOrderStatus);

module.exports = router;
