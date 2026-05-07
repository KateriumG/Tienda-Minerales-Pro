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

module.exports = db