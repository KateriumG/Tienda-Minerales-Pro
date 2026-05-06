import Header from "../components/Header"
import Welcome from "../components/Welcome"
import ProductCard from "../components/ProductCard"
import Footer from "../components/Footer"

function Home() {

  const products = [
    {
      name: "Amatista",
      price: "45.000",
      image: "https://placehold.org/300x200"
    },
    {
      name: "Cuarzo Rosa",
      price: "35.000",
      image: "https://placehold.org/300x200"
    },
    {
      name: "Obsidiana",
      price: "50.000",
      image: "https://placehold.org/300x200"
    }
  ]

  return (
    <>
      <Header />
      <Welcome />

      {/* Productos */}
      <section className="px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((p, i) => (
          <ProductCard key={i} {...p} />
        ))}
      </section>

      <Footer />
    </>
  )
}

export default Home