const db = require("../db/database")

exports.create = (req, res) => {

  const userId = req.user.id

  const {
    items,
    total,
    customer
  } = req.body

  db.run(
    `
    INSERT INTO orders
    (
      user_id,
      customer_name,
      customer_email,
      customer_address,
      total
    )
    VALUES (?, ?, ?, ?, ?)
    `,
    [
      userId,
      customer.name,
      customer.email,
      customer.address,
      total
    ],

    function (err) {

      if (err) {
        return res.status(500).json(err)
      }

      const orderId = this.lastID

      items.forEach((item) => {

        db.run(
          `
          INSERT INTO order_items
          (
            order_id,
            product_id,
            quantity,
            price
          )
          VALUES (?, ?, ?, ?)
          `,
          [
            orderId,
            item.id,
            item.quantity,
            item.price
          ]
        )
      })

      res.json({
        message: "Orden creada",
        orderId
      })
    }
  )
}

exports.getMyOrders = (req, res) => {

  db.all(
    `
    SELECT *
    FROM orders
    WHERE user_id = ?
    ORDER BY created_at DESC
    `,
    [req.user.id],

    (err, rows) => {

      if (err)
        return res.status(500).json(err)

      res.json(rows)
    }
  )
}