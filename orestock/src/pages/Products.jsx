import { useState,useEffect } from "react"
import ProductCard from "../components/ProductCard"

const typesByCategory = {
  mineral: ["oro", "platino", "cobre"],
  cristal: ["cuarzo", "diamante", "amatista"],
  gema: ["perla", "malaquita", "turquesa", "ambar"]
}

function Products() {

  const [products, setProducts] = useState([])

  useEffect(() => {
      fetch("http://localhost:3001/products")
        .then(res => res.json())
        .then(data => {
          setProducts(data)
        })
  }, [])

  const [category, setCategory] = useState("all")
  const [type, setType] = useState("all")
  const [maxPrice, setMaxPrice] = useState(2000000)

  const filteredProducts = products.filter((p) => {
    return (
      (category === "all" || p.category === category) &&
      (type === "all" || p.type === type) &&
      p.price <= maxPrice
    )
  })

  return (
    <section className="px-6 py-10">

      <h2 className="text-3xl font-bold mb-6">Productos</h2>

      <div className="grid md:grid-cols-4 gap-8">

        {/* SIDEBAR */}
        <aside className="md:col-span-1 bg-white p-6 rounded-xl shadow-md h-fit sticky top-6">

          <h3 className="text-xl font-semibold mb-4">Filtros</h3>

          {/* CATEGORÍA */}
          <div className="mb-6">
            <p className="font-medium mb-2">Categoría</p>

            {["all", "mineral", "cristal", "gema"].map((c) => (
              <button
                key={c}
                onClick={() => {
                  setCategory(c)
                  setType("all")
                }}
                className={`block w-full text-left px-3 py-2 rounded-lg mb-1 transition
                  ${category === c ? "bg-purple-600 text-white" : "hover:bg-gray-100"}
                `}
              >
                {c}
              </button>
            ))}
          </div>

          {/* TIPO */}
          <div className="mb-6">
            <p className="font-medium mb-2">Tipo</p>

            {(category === "all"
              ? Object.values(typesByCategory).flat()
              : typesByCategory[category]
            )?.map((t) => (
              <button
                key={t}
                onClick={() => setType(t)}
                className={`block w-full text-left px-3 py-2 rounded-lg mb-1 transition
                  ${type === t ? "bg-purple-500 text-white" : "hover:bg-gray-100"}
                `}
              >
                {t}
              </button>
            ))}

            <button
              onClick={() => setType("all")}
              className="mt-2 text-sm text-gray-500 hover:underline"
            >
              Limpiar tipo
            </button>
          </div>

          {/* PRECIO */}
          <div className="mb-6">
            <p className="font-medium mb-2">Precio máximo</p>

            <input
              type="range"
              min="0"
              max="2000000"
              step="10000"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full"
            />

            <p className="text-sm mt-2">${maxPrice}</p>
          </div>

          {/* RESET */}
          <button
            onClick={() => {
              setCategory("all")
              setType("all")
              setMaxPrice(200000)
            }}
            className="w-full bg-gray-200 py-2 rounded-lg hover:bg-gray-300"
          >
            Limpiar filtros
          </button>

        </aside>

        {/* PRODUCTOS */}
        <div className="md:col-span-3">

          <p className="mb-4 text-gray-600">
            {filteredProducts.length} resultados
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredProducts.map((p) => (
              <ProductCard key={p.id} {...p} />
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}

export default Products