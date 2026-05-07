const express = require("express")
const cors = require("cors")

const app = express()

const db = require("./db/database.js")

app.use(cors())
app.use(express.json())

// routes
app.use("/products", require("./routes/products.js"))
app.use("/types", require("./routes/types.js"))
app.use("/categories", require("./routes/categories.js"))
app.use("/auth", require("./routes/auth"))
app.use("/orders",require("./routes/orders"))

app.get("/debug-products", (req, res) => {
  db.all("SELECT * FROM products", [], (err, rows) => {
    console.log("DB PRODUCTS:", rows)
    res.json(rows)
  })
})

app.listen(3001, () => {
  console.log("🚀 Server running on http://localhost:3001")
})