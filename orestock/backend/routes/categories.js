const express = require("express")
const router = express.Router()

const controller = require("../controllers/categoriesController")

const {
  verifyToken,
  isAdmin
} = require("../middleware/auth")

router.get("/", controller.getAll)

router.post(
  "/",
  verifyToken,
  isAdmin,
  controller.create
)

router.put(
  "/:id",
  verifyToken,
  isAdmin,
  controller.update
)

router.delete(
  "/:id",
  verifyToken,
  isAdmin,
  controller.remove
)

module.exports = router