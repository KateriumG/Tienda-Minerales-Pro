function EditCategoryModal({
  form,
  setForm,
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
        w-100
        space-y-4
      ">

        <h3 className="text-xl font-bold">

          {editing
            ? "Editar categoría"
            : "Nueva categoría"}

        </h3>

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

        <div className="flex gap-2 pt-2">

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

export default EditCategoryModal