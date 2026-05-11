import {
  useEffect,
  useState
} from "react"

import {
  useParams
} from "react-router-dom"

import ProductCard
from "../components/ProductCard"

import { useCart }
from "../context/CartContext"

function ProductDetails() {

  const { id } = useParams()

  const {
    addToCart
  } = useCart()

  const [product, setProduct] =
    useState(null)

  const [recommended, setRecommended] =
    useState([])

  useEffect(() => {

    fetch(
      `http://localhost:3001/products/${id}`
    )
      .then((res) => res.json())
      .then((data) => {

        setProduct(data)

        // cargar recomendados
        fetch(
          `http://localhost:3001/products`
        )
          .then((res) => res.json())
          .then((products) => {

            const filtered =
              products.filter(
                (p) =>
                  p.category === data.category &&
                  p.id !== data.id
              )

            setRecommended(
              filtered.slice(0, 4)
            )
          })
      })

  }, [id])

  if (!product) {

    return (
      <p className="p-8">
        Cargando...
      </p>
    )
  }

  return (
    <section className="
      max-w-7xl
      mx-auto
      px-8 py-12
    ">

      {/* PRODUCT */}
      <div className="
        grid
        md:grid-cols-2
        gap-12
      ">

        {/* IMAGE */}
        <div className="
          bg-white
          rounded-2xl
          shadow
          p-8
        ">

          <img
            src={product.image}
            alt={product.name}
            className="
              w-full
              h-[500px]
              object-cover
              rounded-xl
            "
          />

        </div>

        {/* INFO */}
        <div className="
          flex flex-col
          justify-center
        ">

          <p className="
            text-purple-600
            font-semibold
            uppercase
          ">
            {product.category}
          </p>

          <h1 className="
            text-5xl
            font-bold
            mt-2
          ">
            {product.name}
          </h1>

          <p className="
            text-gray-500
            mt-2
          ">
            Tipo:
            {" "}
            {product.type}
          </p>

          <p className="
            text-4xl
            font-bold
            mt-6
          ">
            ${product.price}
          </p>

          <p className="
            text-gray-700
            leading-relaxed
            mt-6
          ">
            {product.description ||
              "Mineral premium de Orestock."}
          </p>

          <button
            onClick={() =>
              addToCart(product)
            }
            className="
              mt-8
              bg-purple-600
              hover:bg-purple-700
              text-white
              py-4
              rounded-xl
              text-lg
              transition
            "
          >
            Agregar al carrito
          </button>

        </div>

      </div>

      {/* RECOMMENDED */}
      <div className="mt-20">

        <h2 className="
          text-3xl
          font-bold
          mb-8
        ">
          Recomendados
        </h2>

        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-6
        ">

          {recommended.map((p) => (

            <ProductCard
              key={p.id}
              product={p}
            />
          ))}

        </div>

      </div>

    </section>
  )
}

export default ProductDetails