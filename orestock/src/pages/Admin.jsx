import { useState } from "react"

function Admin() {

  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "mineral",
    type: "",
    image: ""
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    await fetch("http://localhost:3001/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ...form,
        price: Number(form.price)
      })
    })

    alert("Producto agregado ✔")

    setForm({
      name: "",
      price: "",
      category: "mineral",
      type: "",
      image: ""
    })
  }

  return (
    <section className="max-w-xl mx-auto py-10 px-6">

      <h2 className="text-3xl font-bold mb-6">Admin - Agregar producto</h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          name="name"
          placeholder="Nombre"
          value={form.name}
          onChange={handleChange}
          className="w-full p-3 border rounded"
        />

        <input
          name="price"
          placeholder="Precio"
          type="number"
          value={form.price}
          onChange={handleChange}
          className="w-full p-3 border rounded"
        />

        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          className="w-full p-3 border rounded"
        >
          <option value="mineral">Mineral</option>
          <option value="cristal">Cristal</option>
          <option value="gema">Gema</option>
        </select>

        <input
          name="type"
          placeholder="Tipo (ej: amatista, oro...)"
          value={form.type}
          onChange={handleChange}
          className="w-full p-3 border rounded"
        />

        <input
          name="image"
          placeholder="URL imagen"
          value={form.image}
          onChange={handleChange}
          className="w-full p-3 border rounded"
        />

        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-3 rounded hover:bg-purple-700"
        >
          Guardar producto
        </button>

      </form>
    </section>
  )
}

export default Admin