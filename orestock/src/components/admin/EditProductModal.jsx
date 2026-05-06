function EditProductModal({ form, setForm, editing, onSave, onClose }) {

  const typesByCategory = {
    mineral: ["oro", "platino", "cobre"],
    cristal: ["cuarzo", "diamante", "amatista"],
    gema: ["perla", "malaquita", "turquesa", "ambar"]
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">

      <div className="bg-white p-6 rounded-xl w-[420px] space-y-4">

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

        {/* CATEGORÍA */}
        <div>
          <label className="text-sm text-gray-600">Categoría</label>
          <select
            className="w-full p-2 border rounded"
            value={form.category}
            onChange={(e) =>
              setForm({
                ...form,
                category: e.target.value,
                type: "" // reset type al cambiar categoría
              })
            }
          >
            <option value="mineral">Mineral</option>
            <option value="cristal">Cristal</option>
            <option value="gema">Gema</option>
          </select>
        </div>

        {/* TIPO (DINÁMICO) */}
        <div>
          <label className="text-sm text-gray-600">Tipo</label>
          <select
            className="w-full p-2 border rounded"
            value={form.type}
            onChange={(e) =>
              setForm({ ...form, type: e.target.value })
            }
          >
            <option value="">Seleccionar tipo</option>

            {(typesByCategory[form.category] || []).map((t) => (
              <option key={t} value={t}>
                {t}
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