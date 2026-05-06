import { useState,useEffect } from "react"

import Welcome from "../components/Welcome"
import ProductCard from "../components/ProductCard"

function Home() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("http://localhost:3001/products")
      const data = await response.json()
      setProducts(data)
    }

    fetchProducts()
  }, [])

  const visibleProducts = products.slice(
    0,
    Math.ceil(products.length / 2)
  );

  return (
    <>
      <Welcome />

      {/* Productos */}
      <section className="px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {visibleProducts.map((p, i) => (
          <ProductCard key={i} {...p} />
        ))}
      </section>
    </>
  )
}

export default Home