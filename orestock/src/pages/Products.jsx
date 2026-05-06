import ProductCard from "../components/ProductCard"

function Products() {

  const products = [
    { name: "Amatista", price: "45.000", image: "https://placehold.org/300x200" },
    { name: "Cuarzo Rosa", price: "35.000", image: "https://placehold.org/300x200" },
    { name: "Obsidiana", price: "50.000", image: "https://placehold.org/300x200" },
    { name: "Turmalina", price: "60.000", image: "https://placehold.org/300x200" }
  ]

  return (
    <section className="px-8 py-10">
      <h2 className="text-3xl font-bold mb-6">Productos</h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {products.map((p, i) => (
          <ProductCard key={i} {...p} />
        ))}
      </div>
    </section>
  )
}

export default Products