const jwt = require("jsonwebtoken")

const SECRET = "orestock_secret"

exports.verifyToken = (req, res, next) => {

  const auth = req.headers.authorization

  if (!auth) {
    return res.status(401).json({
      error: "No token"
    })
  }

  const token = auth.split(" ")[1]

  try {

    const decoded = jwt.verify(token, SECRET)

    req.user = decoded

    next()

  } catch {
    res.status(401).json({
      error: "Token inválido"
    })
  }
}

exports.isAdmin = (req, res, next) => {

  if (req.user.role !== "admin") {
    return res.status(403).json({
      error: "No autorizado"
    })
  }

  next()
}