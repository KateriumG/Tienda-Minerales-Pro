function AdminProductsTable({ products, onEdit, onDelete }) {
  return (
    <div className="bg-white shadow rounded-xl overflow-hidden">

      <table className="w-full text-left">

        <thead className="bg-gray-100 text-sm">
          <tr>
            <th className="p-3">Nombre</th>
            <th className="p-3">Precio</th>
            <th className="p-3">Categoría</th>
            <th className="p-3">Tipo</th>
            <th className="p-3 text-right">Acciones</th>
          </tr>
        </thead>

        <tbody>
          {products.map((p) => (
            <tr key={p.id} className="border-t">

              <td className="p-3 font-medium">{p.name}</td>

              <td className="p-3">${p.price}</td>

              {/* 🟢 CATEGORÍA REAL */}
              <td className="p-3">
                <span className="px-2 py-1 text-xs rounded bg-gray-100">
                  {p.category_name}
                </span>
              </td>

              {/* 🔵 TIPO REAL */}
              <td className="p-3">
                <span className="px-2 py-1 text-xs rounded bg-purple-100 text-purple-700">
                  {p.type_name}
                </span>
              </td>

              <td className="p-3 text-right space-x-2">

                <button
                  onClick={() => onEdit(p)}
                  className="text-blue-600 hover:underline"
                >
                  Editar
                </button>

                <button
                  onClick={() => onDelete(p.id)}
                  className="text-red-600 hover:underline"
                >
                  Eliminar
                </button>

              </td>

            </tr>
          ))}
        </tbody>

      </table>

    </div>
  )
}

export default AdminProductsTable