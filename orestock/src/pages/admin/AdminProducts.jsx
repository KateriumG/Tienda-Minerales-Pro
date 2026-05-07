import { useEffect, useState } from "react"

import AdminProductsTable
from "../../components/admin/products/AdminProductsTable"

import EditProductModal
from "../../components/admin/products/EditProductModal"

function AdminProducts() {

  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [types, setTypes] = useState([])

  const [editing, setEditing] = useState(null)
  const [isCreating, setIsCreating] = useState(false)

  const [form, setForm] = useState({})

  const token =
    localStorage.getItem("token")

  // LOAD DATA
  const load = async () => {

    const productsRes =
      await fetch("http://localhost:3001/products")

    const categoriesRes =
      await fetch("http://localhost:3001/categories")

    const typesRes =
      await fetch("http://localhost:3001/types")

    setProducts(await productsRes.json())

    setCategories(await categoriesRes.json())

    setTypes(await typesRes.json())
  }

  useEffect(() => {
    load()
  }, [])

  // DELETE
  const deleteProduct = async (id) => {

    await fetch(
      `http://localhost:3001/products/${id}`,
      {
        method: "DELETE",

        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )

    load()
  }

  // SAVE
  const save = async () => {

    const url = editing
      ? `http://localhost:3001/products/${editing.id}`
      : "http://localhost:3001/products"

    const method =
      editing ? "PUT" : "POST"

    await fetch(url, {

      method,

      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },

      body: JSON.stringify(form)
    })

    setEditing(null)
    setIsCreating(false)

    load()
  }

  return (
    <section className="space-y-6">

      {/* HEADER */}
      <div className="flex justify-between items-center">

        <div>
          <h2 className="text-3xl font-bold">
            Productos
          </h2>

          <p className="text-gray-500">
            Gestiona el catálogo.
          </p>
        </div>

        <button
          onClick={() => {

            setEditing(null)

            setIsCreating(true)

            setForm({
              name: "",
              price: "",
              image: "",
              category_id: "",
              type_id: ""
            })
          }}
          className="
            bg-purple-600
            hover:bg-purple-700
            text-white
            px-4 py-2
            rounded-lg
          "
        >
          + Nuevo producto
        </button>

      </div>

      {/* TABLE */}
      <AdminProductsTable
        products={products}
        onEdit={(p) => {

          setEditing(p)

          setForm({
            ...p
          })
        }}
        onDelete={deleteProduct}
      />

      {/* MODAL */}
      {(editing || isCreating) && (
        <EditProductModal
          form={form}
          setForm={setForm}
          editing={editing}
          categories={categories}
          types={types}
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

export default AdminProducts