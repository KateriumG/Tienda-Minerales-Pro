import { useEffect, useState } from "react"

import TypesTable
from "../../components/admin/types/TypesTable"

import EditTypeModal
from "../../components/admin/types/EditTypeModal"

function AdminTypes() {

  const [types, setTypes] = useState([])
  const [categories, setCategories] = useState([])

  const [editing, setEditing] = useState(null)
  const [isCreating, setIsCreating] = useState(false)

  const [form, setForm] = useState({})

  const token =
    localStorage.getItem("token")

  // LOAD DATA
  const load = async () => {

    const typesRes =
      await fetch("http://localhost:3001/types")

    const categoriesRes =
      await fetch("http://localhost:3001/categories")

    setTypes(await typesRes.json())

    setCategories(await categoriesRes.json())
  }

  useEffect(() => {
    load()
  }, [])

  // SAVE
  const save = async () => {

    const url = editing
      ? `http://localhost:3001/types/${editing.id}`
      : "http://localhost:3001/types"

    const method =
      editing ? "PUT" : "POST"

    await fetch(url, {

      method,

      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },

      body: JSON.stringify({
        ...form,
        category_id: Number(form.category_id)
      })
    })

    setEditing(null)
    setIsCreating(false)

    load()
  }

  // DELETE
  const remove = async (id) => {

    await fetch(
      `http://localhost:3001/types/${id}`,
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
            Tipos
          </h2>

          <p className="text-gray-500">
            Gestiona los tipos de minerales,
            cristales y gemas.
          </p>

        </div>

        <button
          onClick={() => {

            setEditing(null)

            setIsCreating(true)

            setForm({
              name: "",
              category_id: ""
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
          + Nuevo tipo
        </button>

      </div>

      {/* TABLE */}
      <TypesTable
        types={types}
        onEdit={(t) => {

          setEditing(t)

          setForm({
            ...t
          })
        }}
        onDelete={remove}
      />

      {/* MODAL */}
      {(editing || isCreating) && (
        <EditTypeModal
          form={form}
          setForm={setForm}
          categories={categories}
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

export default AdminTypes