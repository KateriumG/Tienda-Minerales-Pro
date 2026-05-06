const db = require("./db/database")

function runQuery(query, params = []) {
  return new Promise((resolve, reject) => {
    db.run(query, params, function (err) {
      if (err) reject(err)
      else resolve(this)
    })
  })
}

async function seed() {
  try {
    console.log("🌱 Iniciando seed...")

    // 🧱 CATEGORIES
    await runQuery(`INSERT OR IGNORE INTO categories (name) VALUES (?)`, ["mineral"])
    await runQuery(`INSERT OR IGNORE INTO categories (name) VALUES (?)`, ["cristal"])
    await runQuery(`INSERT OR IGNORE INTO categories (name) VALUES (?)`, ["gema"])

    // 🔎 obtener ids de categorías
    const getCategories = () =>
      new Promise((resolve, reject) => {
        db.all(`SELECT * FROM categories`, [], (err, rows) => {
          if (err) reject(err)
          else resolve(rows)
        })
      })

    const categories = await getCategories()

    const getId = (name) =>
      categories.find((c) => c.name === name)?.id

    const mineralId = getId("mineral")
    const cristalId = getId("cristal")
    const gemaId = getId("gema")

    // 🧱 TYPES - MINERALES
    await runQuery(`INSERT OR IGNORE INTO types (name, category_id) VALUES (?, ?)`, ["oro", mineralId])
    await runQuery(`INSERT OR IGNORE INTO types (name, category_id) VALUES (?, ?)`, ["platino", mineralId])
    await runQuery(`INSERT OR IGNORE INTO types (name, category_id) VALUES (?, ?)`, ["cobre", mineralId])

    // 🧱 TYPES - CRISTALES
    await runQuery(`INSERT OR IGNORE INTO types (name, category_id) VALUES (?, ?)`, ["cuarzo", cristalId])
    await runQuery(`INSERT OR IGNORE INTO types (name, category_id) VALUES (?, ?)`, ["diamante", cristalId])
    await runQuery(`INSERT OR IGNORE INTO types (name, category_id) VALUES (?, ?)`, ["amatista", cristalId])

    // 🧱 TYPES - GEMAS
    await runQuery(`INSERT OR IGNORE INTO types (name, category_id) VALUES (?, ?)`, ["perla", gemaId])
    await runQuery(`INSERT OR IGNORE INTO types (name, category_id) VALUES (?, ?)`, ["malaquita", gemaId])
    await runQuery(`INSERT OR IGNORE INTO types (name, category_id) VALUES (?, ?)`, ["turquesa", gemaId])
    await runQuery(`INSERT OR IGNORE INTO types (name, category_id) VALUES (?, ?)`, ["ambar", gemaId])

    console.log("✅ Seed completado correctamente")
    process.exit()

  } catch (err) {
    console.error("❌ Error en seed:", err)
    process.exit(1)
  }
}

seed()