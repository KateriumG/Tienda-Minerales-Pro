const db = require("../db/database")

exports.getAll = (req, res) => {

  db.all(`
    SELECT
      types.*,
      categories.name AS category_name
    FROM types
    JOIN categories
      ON types.category_id = categories.id
  `,
  [],
  (err, rows) => {

    if (err)
      return res.status(500).json(err)

    res.json(rows)
  })
}

exports.create = (req, res) => {

  const { name, category_id } = req.body

  db.run(
    `
    INSERT INTO types
    (name, category_id)
    VALUES (?, ?)
    `,
    [name, category_id],
    function (err) {

      if (err)
        return res.status(500).json(err)

      res.json({
        id: this.lastID
      })
    }
  )
}

exports.update = (req, res) => {

  const {
    name,
    category_id
  } = req.body

  db.run(
    `
    UPDATE types
    SET
      name=?,
      category_id=?
    WHERE id=?
    `,
    [
      name,
      category_id,
      req.params.id
    ],
    (err) => {

      if (err)
        return res.status(500).json(err)

      res.json({
        message: "updated"
      })
    }
  )
}

exports.remove = (req, res) => {

  db.run(
    `
    DELETE FROM types
    WHERE id=?
    `,
    [req.params.id],
    (err) => {

      if (err)
        return res.status(500).json(err)

      res.json({
        message: "deleted"
      })
    }
  )
}