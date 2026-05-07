const bcrypt = require("bcryptjs")
const db = require("./db/database")

async function seedAdmin() {

  const hashed = await bcrypt.hash("admin123", 10)

  db.run(
    `
    INSERT OR IGNORE INTO users
    (id, username, password, role)
    VALUES (?, ?, ?, ?)
    `,
    [1, "admin", hashed, "admin"]
  )

  console.log("👑 Admin creado")
}

seedAdmin()