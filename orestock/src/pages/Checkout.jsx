import { useCart } from "../context/CartContext"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Checkout() {
  const { cart, total, clearCart } = useCart()
  const navigate = useNavigate()

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

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!form.name || !form.email || !form.address) {
      alert("Por favor completa todos los campos")
      return
    }

    // 🧪 Simulación de compra
    alert("Compra realizada con éxito 🎉")

    clearCart()
    navigate("/success")
  }

  if (cart.length === 0) {
    return <p className="p-8">No hay productos en el carrito</p>
  }

  return (
    <section className="px-8 py-10 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Checkout</h2>

      <div className="grid md:grid-cols-2 gap-10">

        {/* 🧾 Resumen */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Resumen</h3>

          {cart.map((item, i) => (
            <div key={i} className="flex justify-between mb-2">
              <span>{item.name} x{item.quantity}</span>
              <span>${item.price * item.quantity}</span>
            </div>
          ))}

          <hr className="my-4" />

          <h4 className="text-xl font-bold">
            Total: {total}
          </h4>
        </div>

        {/* 📝 Formulario */}
        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="name"
            placeholder="Nombre completo"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 border rounded"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Correo"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 border rounded"
            required
          />

          <input
            type="text"
            name="address"
            placeholder="Dirección"
            value={form.address}
            onChange={handleChange}
            className="w-full p-3 border rounded"
            required
          />

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700"
          >
            Finalizar compra
          </button>

        </form>
      </div>
    </section>
  )
}

export default Checkout