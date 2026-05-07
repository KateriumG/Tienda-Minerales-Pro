import { Outlet } from "react-router-dom"

import AdminSidebar from "../components/admin/AdminSidebar"
import AdminTopbar from "../components/admin/AdminTopbar"

function AdminLayout() {

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* SIDEBAR */}
      <AdminSidebar />

      {/* MAIN */}
      <div className="flex-1 flex flex-col">

        {/* TOPBAR */}
        <AdminTopbar />

        {/* CONTENT */}
        <main className="p-6 flex-1 overflow-auto">
          <Outlet />
        </main>

      </div>

    </div>
  )
}

export default AdminLayout