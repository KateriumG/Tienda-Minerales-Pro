function CategoriesTable({
  categories,
  onEdit,
  onDelete
}) {

  return (
    <div className="bg-white rounded-xl shadow overflow-hidden">

      <table className="w-full text-left">

        <thead className="bg-gray-100 text-sm">

          <tr>
            <th className="p-3">Nombre</th>
            <th className="p-3 text-right">
              Acciones
            </th>
          </tr>

        </thead>

        <tbody>

          {categories.map((c) => (

            <tr
              key={c.id}
              className="border-t"
            >

              <td className="p-3 font-medium">
                {c.name}
              </td>

              <td className="p-3 text-right space-x-2">

                <button
                  onClick={() => onEdit(c)}
                  className="text-blue-600 hover:underline"
                >
                  Editar
                </button>

                <button
                  onClick={() => onDelete(c.id)}
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

export default CategoriesTable