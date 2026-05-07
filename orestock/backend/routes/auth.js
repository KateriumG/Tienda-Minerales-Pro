const express = require("express")
const router = express.Router()

const { verifyToken } = require("../middleware/auth")

const controller = require("../controllers/authController")

router.post("/register", controller.register)
router.post("/login", controller.login)
router.put(
  "/settings",
  verifyToken,
  controller.updateSettings
)

module.exports = router