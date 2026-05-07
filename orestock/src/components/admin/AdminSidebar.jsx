import { NavLink } from "react-router-dom"

function AdminSidebar() {

  const linkClass = ({ isActive }) =>
    `
    block px-4 py-3 rounded-lg transition
    ${isActive
      ? "bg-purple-600 text-white"
      : "text-gray-700 hover:bg-gray-200"}
    `

  return (
    <aside className="w-64 bg-white border-r p-4">

      <h2 className="text-2xl font-bold mb-8">
        Orestock
      </h2>

      <nav className="space-y-2">

        <NavLink
          to="/admin/dashboard"
          className={linkClass}
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/admin/products"
          className={linkClass}
        >
          Productos
        </NavLink>

        <NavLink
          to="/admin/categories"
          className={linkClass}
        >
          Categorías
        </NavLink>

        <NavLink
          to="/admin/types"
          className={linkClass}
        >
          Tipos
        </NavLink>

      </nav>

    </aside>
  )
}

export default AdminSidebar