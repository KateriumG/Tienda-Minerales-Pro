const sqlite3 =
  require("sqlite3").verbose()

const db = new sqlite3.Database(
  "../orestock.db"
)

console.log("🚀 Running alters...")

// helper
function run(query, success) {

  db.run(query, (err) => {

    if (err) {

      console.log("⚠️", err.message)

    } else {

      console.log("✅", success)
    }
  })
}

//
// PRODUCTS
//

run(
  `
  ALTER TABLE products
  ADD COLUMN description TEXT
  `,
  "products.description added"
)

//
// ORDERS
//

run(
  `
  CREATE TABLE IF NOT EXISTS orders (
    id INTEGER PRIMARY KEY AUTOINCREMENT,

    user_id INTEGER,

    customer_name TEXT,
    customer_email TEXT,
    customer_address TEXT,

    total REAL,

    created_at DATETIME
    DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY(user_id)
    REFERENCES users(id)
  )
  `,
  "orders table ready"
)

//
// ORDER ITEMS
//

run(
  `
  CREATE TABLE IF NOT EXISTS order_items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,

    order_id INTEGER,
    product_id INTEGER,

    quantity INTEGER,
    price REAL,

    FOREIGN KEY(order_id)
    REFERENCES orders(id),

    FOREIGN KEY(product_id)
    REFERENCES products(id)
  )
  `,
  "order_items table ready"
)

console.log("🎉 Alters completed")