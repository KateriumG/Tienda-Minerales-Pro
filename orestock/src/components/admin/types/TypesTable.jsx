function TypesTable({
  types,
  onEdit,
  onDelete
}) {

  return (
    <div className="
      bg-white
      rounded-xl
      shadow
      overflow-hidden
    ">

      <table className="w-full text-left">

        <thead className="
          bg-gray-100
          text-sm
        ">

          <tr>
            <th className="p-3">Nombre</th>
            <th className="p-3">
              Categoría
            </th>
            <th className="p-3 text-right">
              Acciones
            </th>
          </tr>

        </thead>

        <tbody>

          {types.map((t) => (

            <tr
              key={t.id}
              className="border-t"
            >

              <td className="p-3">
                {t.name}
              </td>

              <td className="p-3">

                <span className="
                  px-2 py-1
                  rounded
                  text-xs
                  bg-gray-100
                ">
                  {t.category_name}
                </span>

              </td>

              <td className="
                p-3
                text-right
                space-x-2
              ">

                <button
                  onClick={() => onEdit(t)}
                  className="
                    text-blue-600
                    hover:underline
                  "
                >
                  Editar
                </button>

                <button
                  onClick={() => onDelete(t.id)}
                  className="
                    text-red-600
                    hover:underline
                  "
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

export default TypesTable