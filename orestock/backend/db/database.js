const sqlite3 = require("sqlite3").verbose()

const db = new sqlite3.Database("./../orestock.db")

// 🧱 CATEGORIES
db.run(`
CREATE TABLE IF NOT EXISTS categories (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT UNIQUE
)
`)

// 🧱 TYPES
db.run(`
CREATE TABLE IF NOT EXISTS types (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  category_id INTEGER,
  FOREIGN KEY (category_id) REFERENCES categories(id)
)
`)

// 🧱 PRODUCTS
db.run(`
CREATE TABLE IF NOT EXISTS products (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  price INTEGER,
  image TEXT,
  type_id INTEGER,
  FOREIGN KEY (type_id) REFERENCES types(id)
)
`)

// 🧱 USERS
db.run(`
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT UNIQUE,
  password TEXT,
  role TEXT DEFAULT 'user'
)
`)

db.run(`
CREATE TABLE IF NOT EXISTS orders (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER,
  total REAL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,

  FOREIGN KEY(user_id)
  REFERENCES users(id)
)
`)

db.run(`
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
`)

module.exports = db