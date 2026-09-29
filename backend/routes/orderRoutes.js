const expresss = require("express")
const router = expresss.Router()

const {authenticateToken} = require("../middleware/authenticateToken")
const admin = require("../middleware/adminMiddleware")
const {createOrder} = require("../controllers/orderController")

router.post("/",authenticateToken,createOrder)
// router.get("/",authenticateToken,admin,getAllOrders)
// router.get("/myorders",authenticateToken,getOrderById)
// router.put("/:id/status",authenticateToken,admin,updateOrderStatus)

module.exports = router