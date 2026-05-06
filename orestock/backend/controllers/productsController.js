const db = require("../db/database")

exports.getAll = (req, res) => {
  db.all(`
    SELECT products.*, types.name AS type_name, categories.name AS category_name
    FROM products
    LEFT JOIN types ON products.type_id = types.id
    LEFT JOIN categories ON types.category_id = categories.id
  `, [], (err, rows) => {
    if (err) return res.status(500).json(err)
    res.json(rows)
  })
}

exports.create = (req, res) => {
  const { name, price, image, type_id } = req.body

  console.log("CREANDO PRODUCTO:", req.body)

  db.run(
    `INSERT INTO products (name, price, image, type_id)
     VALUES (?, ?, ?, ?)`,
    [name, price, image, type_id],
    function (err) {
      if (err) return res.status(500).json(err)
      res.json({ id: this.lastID })
    }
  )
}

exports.update = (req, res) => {
  const { id } = req.params
  const { name, price, image, type_id } = req.body

  db.run(
    `UPDATE products SET name=?, price=?, image=?, type_id=? WHERE id=?`,
    [name, price, image, type_id, id],
    (err) => {
      if (err) return res.status(500).json(err)
      res.json({ message: "updated" })
    }
  )
}

exports.remove = (req, res) => {
  db.run(`DELETE FROM products WHERE id=?`, [req.params.id], (err) => {
    if (err) return res.status(500).json(err)
    res.json({ message: "deleted" })
  })
}