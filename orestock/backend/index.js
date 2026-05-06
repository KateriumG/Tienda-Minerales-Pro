const express = require("express")
const cors = require("cors")
const sqlite3 = require("sqlite3").verbose()

const app = express()
app.use(cors())
app.use(express.json())

// 📦 DB en archivo
const db = new sqlite3.Database("./orestock.db")

// 🧱 crear tabla si no existe
db.run(`
  CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    price INTEGER,
    category TEXT,
    type TEXT,
    image TEXT
  )
`)

app.get("/products", (req, res) => {
  db.all("SELECT * FROM products", [], (err, rows) => {
    if (err) return res.status(500).json(err)
    res.json(rows)
  })
})

app.post("/products", (req, res) => {
  const { name, price, category, type, image } = req.body

  db.run(
    `INSERT INTO products (name, price, category, type, image)
     VALUES (?, ?, ?, ?, ?)`,
    [name, price, category, type, image],
    function (err) {
      if (err) return res.status(500).json(err)
      res.json({ id: this.lastID })
    }
  )
})

app.listen(3001, () => {
  console.log("🚀 Backend corriendo en http://localhost:3001")
})