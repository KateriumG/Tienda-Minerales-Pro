const db = require("../db/database")

exports.getAll = (req, res) => {
  db.all(
    "SELECT * FROM categories",
    [],
    (err, rows) => {
      if (err) return res.status(500).json(err)
      res.json(rows)
    }
  )
}

exports.create = (req, res) => {

  const { name } = req.body

  db.run(
    `
    INSERT INTO categories (name)
    VALUES (?)
    `,
    [name],
    function (err) {

      if (err) return res.status(500).json(err)

      res.json({
        id: this.lastID
      })
    }
  )
}

exports.update = (req, res) => {

  db.run(
    `
    UPDATE categories
    SET name=?
    WHERE id=?
    `,
    [req.body.name, req.params.id],
    (err) => {

      if (err) return res.status(500).json(err)

      res.json({
        message: "updated"
      })
    }
  )
}

exports.remove = (req, res) => {

  db.run(
    `
    DELETE FROM categories
    WHERE id=?
    `,
    [req.params.id],
    (err) => {

      if (err) return res.status(500).json(err)

      res.json({
        message: "deleted"
      })
    }
  )
}