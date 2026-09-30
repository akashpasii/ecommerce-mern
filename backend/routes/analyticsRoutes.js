const express = require("express")
const {authenticateToken} = require("../middleware/authenticateToken")
const admin = require("../middleware/adminMiddleware")
const {getAdminStats} = require("../controllers/analyticsController")

const router = express.Router()

router.get("/", authenticateToken,admin,getAdminStats)

module.exports = router