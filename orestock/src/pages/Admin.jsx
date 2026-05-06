import { useEffect, useState } from "react"
import AdminTable from "../components/admin/AdminTable"
import EditProductModal from "../components/admin/EditProductModal"

function Admin() {

  const [products, setProducts] = useState([])
  const [editing, setEditing] = useState(null)
  const [isCreating, setIsCreating] = useState(false)
  const [form, setForm] = useState({})

  const load = async () => {
    const res = await fetch("http://localhost:3001/products")
    setProducts(await res.json())
  }

  useEffect(() => {
    load()
  }, [])

  const deleteProduct = async (id) => {
    await fetch(`http://localhost:3001/products/${id}`, {
      method: "DELETE"
    })
    load()
  }

const save = async () => {

  const url = editing
    ? `http://localhost:3001/products/${editing.id}`
    : "http://localhost:3001/products"

  const method = editing ? "PUT" : "POST"

  console.log("FORM ENVIADO:", form)

  await fetch(url, {
    method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...form,
      price: Number(form.price)
    })
  })

  setEditing(null)
  setIsCreating(false)
  load()
}

  return (
    <section className="p-8">

      <h2 className="text-2xl font-bold mb-6">Dashboard</h2>

      <button
        onClick={() => {
          setEditing(null)
          setIsCreating(true)
          setForm({
            name: "",
            price: "",
            category: "mineral",
            type: "",
            image: ""
          })
        }}
        className="bg-purple-600 text-white px-4 py-2 rounded"
      >
        + Nuevo producto
      </button>

      <AdminTable
        products={products}
        onEdit={(p) => {
          setEditing(p)
          setForm(p)
        }}
        onDelete={deleteProduct}
      />

      {(editing || isCreating) && (
        <EditProductModal
          form={form}
          setForm={setForm}
          editing={editing}
          onSave={save}
          onClose={() => {
            setEditing(null)
            setIsCreating(false)
          }}
        />
      )}

    </section>
  )
}

export default Admin