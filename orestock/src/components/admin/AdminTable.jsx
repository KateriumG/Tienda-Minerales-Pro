function AdminTable({ products, onEdit, onDelete }) {
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

              <td className="p-3">{p.name}</td>
              <td className="p-3">${p.price}</td>
              <td className="p-3">{p.category}</td>
              <td className="p-3">{p.type}</td>

              <td className="p-3 text-right space-x-2">

                <button
                  onClick={() => onEdit(p)}
                  className="text-blue-600"
                >
                  Editar
                </button>

                <button
                  onClick={() => onDelete(p.id)}
                  className="text-red-600"
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

export default AdminTable