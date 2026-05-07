import { useCart } from "../context/CartContext"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Checkout() {

  const {
    cart,
    total,
    clearCart
  } = useCart()

  const navigate = useNavigate()

  const token =
    localStorage.getItem("token")

  const [loading, setLoading] =
    useState(false)

  const [form, setForm] = useState({
    name: "",
    email: "",
    address: ""
  })

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {

    e.preventDefault()

    if (
      !form.name ||
      !form.email ||
      !form.address
    ) {
      alert(
        "Por favor completa todos los campos"
      )
      return
    }

    setLoading(true)

    try {

      const res = await fetch(
        "http://localhost:3001/orders",
        {

          method: "POST",

          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          },

          body: JSON.stringify({

            items: cart,

            total,

            customer: {
              name: form.name,
              email: form.email,
              address: form.address
            }
          })
        }
      )

      const data = await res.json()

      if (!res.ok) {

        alert(
          data.error ||
          "Error al crear orden"
        )

        return
      }

      clearCart()

      localStorage.removeItem("cart")

      navigate("/success")

    } catch {

      alert("Error del servidor")

    } finally {

      setLoading(false)
    }
  }

  if (cart.length === 0) {

    return (
      <p className="p-8">
        No hay productos en el carrito
      </p>
    )
  }

  return (
    <section className="
      px-8 py-10
      max-w-5xl
      mx-auto
    ">

      <h2 className="
        text-4xl
        font-bold
        mb-8
      ">
        Checkout
      </h2>

      <div className="
        grid md:grid-cols-2
        gap-10
      ">

        {/* RESUMEN */}
        <div className="
          bg-white
          rounded-2xl
          shadow
          p-6
          h-fit
        ">

          <h3 className="
            text-2xl
            font-semibold
            mb-6
          ">
            Resumen
          </h3>

          <div className="space-y-4">

            {cart.map((item) => (

              <div
                key={item.id}
                className="
                  flex justify-between
                  items-center
                "
              >

                <div>

                  <p className="font-medium">
                    {item.name}
                  </p>

                  <p className="
                    text-sm text-gray-500
                  ">
                    Cantidad:
                    {" "}
                    {item.quantity}
                  </p>

                </div>

                <p className="font-semibold">

                  $
                  {item.price * item.quantity}

                </p>

              </div>
            ))}

          </div>

          <hr className="my-6" />

          <div className="
            flex justify-between
            text-2xl
            font-bold
          ">

            <span>Total</span>

            <span>${total}</span>

          </div>

        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="
            bg-white
            rounded-2xl
            shadow
            p-6
            space-y-5
          "
        >

          <div>

            <label className="
              text-sm text-gray-600
            ">
              Nombre completo
            </label>

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="
                w-full
                p-3
                border
                rounded-lg
                mt-1
              "
              required
            />

          </div>

          <div>

            <label className="
              text-sm text-gray-600
            ">
              Correo electrónico
            </label>

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="
                w-full
                p-3
                border
                rounded-lg
                mt-1
              "
              required
            />

          </div>

          <div>

            <label className="
              text-sm text-gray-600
            ">
              Dirección
            </label>

            <input
              type="text"
              name="address"
              value={form.address}
              onChange={handleChange}
              className="
                w-full
                p-3
                border
                rounded-lg
                mt-1
              "
              required
            />

          </div>

          <button
            type="submit"
            disabled={loading}
            className="
              w-full
              bg-purple-600
              hover:bg-purple-700
              disabled:opacity-50
              text-white
              py-3
              rounded-lg
              transition
            "
          >

            {loading
              ? "Procesando..."
              : "Finalizar compra"}

          </button>

        </form>

      </div>

    </section>
  )
}

export default Checkout