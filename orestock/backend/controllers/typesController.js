const db = require("../db/database")

exports.getAll = (req, res) => {
  db.all(`
    SELECT types.*, categories.name AS category_name
    FROM types
    JOIN categories ON types.category_id = categories.id
  `, [], (err, rows) => {
    if (err) return res.status(500).json(err)
    res.json(rows)
  })
}