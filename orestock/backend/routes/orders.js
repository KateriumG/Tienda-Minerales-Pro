const express = require("express")
const router = express.Router()

const controller =
  require("../controllers/ordersController")

const {
  verifyToken
} = require("../middleware/auth")

router.post(
  "/",
  verifyToken,
  controller.create
)

router.get(
  "/my-orders",
  verifyToken,
  controller.getMyOrders
)

module.exports = router