const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

// routes
app.use("/products", require("./routes/products.js"))
app.use("/types", require("./routes/types.js"))
app.use("/categories", require("./routes/categories.js"))

app.listen(3001, () => {
  console.log("🚀 Server running on http://localhost:3001")
})