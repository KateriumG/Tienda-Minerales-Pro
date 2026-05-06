import ProductCard from "../components/ProductCard"

function Products() {

  const products = [
    { id: 1 ,name: "Amatista", price: 4000, image: "https://placehold.org/300x200" },
    { id: 2, name: "Cuarzo Rosa", price: 35000, image: "https://placehold.org/300x200" },
    { id: 3, name: "Obsidiana", price: 50000, image: "https://placehold.org/300x200" },
    { id: 4, name: "Turmalina", price: 60000, image: "https://placehold.org/300x200" }
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