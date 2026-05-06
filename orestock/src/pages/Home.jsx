import Welcome from "../components/Welcome"
import ProductCard from "../components/ProductCard"

function Home() {

  const products = [
    {
      name: "Amatista",
      price: "45000",
      image: "https://placehold.org/300x200"
    },
    {
      name: "Cuarzo Rosa",
      price: "35000",
      image: "https://placehold.org/300x200"
    },
    {
      name: "Obsidiana",
      price: "50000",
      image: "https://placehold.org/300x200"
    }
  ]

  return (
    <>
      <Welcome />

      {/* Productos */}
      <section className="px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((p, i) => (
          <ProductCard key={i} {...p} />
        ))}
      </section>
    </>
  )
}

export default Home