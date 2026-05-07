const db = require("../db/database")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const SECRET = "orestock_secret"

exports.register = async (req, res) => {

  const { username, password } = req.body

  const hashed = await bcrypt.hash(password, 10)

  db.run(
    `
    INSERT INTO users (username, password)
    VALUES (?, ?)
    `,
    [username, hashed],
    function (err) {

      if (err) {
        return res.status(500).json({
          error: "Usuario ya existe"
        })
      }

      res.json({
        message: "Usuario creado"
      })
    }
  )
}

exports.login = (req, res) => {

  const { username, password } = req.body

  db.get(
    `
    SELECT * FROM users WHERE username = ?
    `,
    [username],
    async (err, user) => {

      if (!user) {
        return res.status(401).json({
          error: "Usuario no encontrado"
        })
      }

      const valid = await bcrypt.compare(
        password,
        user.password
      )

      if (!valid) {
        return res.status(401).json({
          error: "Contraseña incorrecta"
        })
      }

      const token = jwt.sign(
        {
          id: user.id,
          role: user.role
        },
        SECRET,
        { expiresIn: "7d" }
      )

      res.json({
        token,
        role: user.role,
        username: user.username
      })
    }
  )
}