import { useEffect, useState }
from "react"

import CategoriesTable
from "../../components/admin/categories/CategoriesTable"

import EditCategoryModal
from "../../components/admin/categories/EditCategoryModal"

function AdminCategories() {

  const [categories, setCategories] =
    useState([])

  const [editing, setEditing] =
    useState(null)

  const [isCreating, setIsCreating] =
    useState(false)

  const [form, setForm] =
    useState({})

  const token =
    localStorage.getItem("token")

  const load = async () => {

    const res =
      await fetch(
        "http://localhost:3001/categories"
      )

    setCategories(await res.json())
  }

  useEffect(() => {
    load()
  }, [])

  const save = async () => {

    const url = editing
      ? `http://localhost:3001/categories/${editing.id}`
      : "http://localhost:3001/categories"

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

  const remove = async (id) => {

    await fetch(
      `http://localhost:3001/categories/${id}`,
      {
        method: "DELETE",

        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )

    load()
  }

  return (
    <section className="space-y-6">

      {/* HEADER */}
      <div className="
        flex justify-between items-center
      ">

        <div>

          <h2 className="
            text-3xl font-bold
          ">
            Categorías
          </h2>

          <p className="text-gray-500">
            Gestiona categorías.
          </p>

        </div>

        <button
          onClick={() => {

            setEditing(null)

            setIsCreating(true)

            setForm({
              name: ""
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
          + Nueva categoría
        </button>

      </div>

      {/* TABLE */}
      <CategoriesTable
        categories={categories}
        onEdit={(c) => {

          setEditing(c)

          setForm(c)
        }}
        onDelete={remove}
      />

      {/* MODAL */}
      {(editing || isCreating) && (
        <EditCategoryModal
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

export default AdminCategories