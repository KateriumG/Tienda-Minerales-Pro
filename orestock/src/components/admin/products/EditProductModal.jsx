function EditProductModal({ form, setForm, types, editing, onSave, onClose }) {

  const typesByCategory = {
    mineral: ["oro", "platino", "cobre"],
    cristal: ["cuarzo", "diamante", "amatista"],
    gema: ["perla", "malaquita", "turquesa", "ambar"]
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">

      <div className="bg-white p-6 rounded-xl w-112.5 space-y-4">

        <h3 className="text-xl font-bold">
          {editing ? "Editar producto" : "Nuevo producto"}
        </h3>

        {/* NOMBRE */}
        <div>
          <label className="text-sm text-gray-600">Nombre</label>
          <input
            className="w-full p-2 border rounded"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />
        </div>

        {/* PRECIO */}
        <div>
          <label className="text-sm text-gray-600">Precio</label>
          <input
            type="number"
            className="w-full p-2 border rounded"
            value={form.price}
            onChange={(e) =>
              setForm({ ...form, price: e.target.value })
            }
          />
        </div>
        {/* DESCRIPCIÓN */}
        <div>

          <label className="
            text-sm text-gray-600
          ">
            Descripción
          </label>

          <textarea
            rows={4}
            className="
              w-full
              p-2
              border
              rounded
            "
            value={form.description || ""}
            onChange={(e) =>
              setForm({
                ...form,
                description: e.target.value
              })
            }
          />

        </div>

        {/* CATEGORÍA */}
        <div>
          <label className="text-sm text-gray-600">Categoría</label>
          <select
            value={form.category_id}
            onChange={(e) =>
              setForm({
                ...form,
                category_id: Number(e.target.value),
                type_id: "" // reset
              })
            }
          >
            <option value={1}>Mineral</option>
            <option value={2}>Cristal</option>
            <option value={3}>Gema</option>
          </select>
        </div>

        {/* TIPO (DINÁMICO) */}
        <div>
          <label className="text-sm text-gray-600">Tipo</label>
          <select
            value={form.type_id}
            onChange={(e) =>
              setForm({ ...form, type_id: Number(e.target.value) })
            }
          >
            <option value="">Selecciona tipo</option>

              {types
                .filter((t) => t.category_id === form.category_id)
                .map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.name}
                  </option>
              ))}
          </select>
        </div>

        {/* IMAGEN */}
        <div>
          <label className="text-sm text-gray-600">URL de imagen</label>
          <input
            className="w-full p-2 border rounded"
            placeholder="https://..."
            value={form.image}
            onChange={(e) =>
              setForm({ ...form, image: e.target.value })
            }
          />
        </div>

        {/* BOTONES */}
        <div className="flex gap-2 pt-2">

          <button
            onClick={onSave}
            className="bg-green-600 text-white px-4 py-2 rounded w-full"
          >
            Guardar
          </button>

          <button
            onClick={onClose}
            className="bg-gray-300 px-4 py-2 rounded w-full"
          >
            Cancelar
          </button>

        </div>

      </div>
    </div>
  )
}

export default EditProductModal