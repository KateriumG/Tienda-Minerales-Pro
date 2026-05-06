const db = require("../db/database")

exports.getAll = (req, res) => {
  db.all("SELECT * FROM categories", [], (err, rows) => {
    if (err) return res.status(500).json(err)
    res.json(rows)
  })
}