function EditTypeModal({
  form,
  setForm,
  categories,
  editing,
  onSave,
  onClose
}) {

  return (
    <div className="
      fixed inset-0
      bg-black/40
      flex items-center justify-center
    ">

      <div className="
        bg-white
        p-6
        rounded-xl
        w-[420px]
        space-y-4
      ">

        <h3 className="text-xl font-bold">

          {editing
            ? "Editar tipo"
            : "Nuevo tipo"}

        </h3>

        {/* NAME */}
        <div>

          <label className="
            text-sm text-gray-600
          ">
            Nombre
          </label>

          <input
            className="
              w-full
              p-2
              border
              rounded
            "
            value={form.name}
            onChange={(e) =>
              setForm({
                ...form,
                name: e.target.value
              })
            }
          />

        </div>

        {/* CATEGORY */}
        <div>

          <label className="
            text-sm text-gray-600
          ">
            Categoría
          </label>

          <select
            className="
              w-full
              p-2
              border
              rounded
            "
            value={form.category_id}
            onChange={(e) =>
              setForm({
                ...form,
                category_id:
                  Number(e.target.value)
              })
            }
          >

            <option value="">
              Selecciona categoría
            </option>

            {categories.map((c) => (

              <option
                key={c.id}
                value={c.id}
              >
                {c.name}
              </option>

            ))}

          </select>

        </div>

        {/* BUTTONS */}
        <div className="
          flex gap-2 pt-2
        ">

          <button
            onClick={onSave}
            className="
              bg-purple-600
              text-white
              px-4 py-2
              rounded
              w-full
            "
          >
            Guardar
          </button>

          <button
            onClick={onClose}
            className="
              bg-gray-200
              px-4 py-2
              rounded
              w-full
            "
          >
            Cancelar
          </button>

        </div>

      </div>

    </div>
  )
}

export default EditTypeModal