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

app.listen(3001, () => {
  console.log("🚀 Backend corriendo en http://localhost:3001")
})