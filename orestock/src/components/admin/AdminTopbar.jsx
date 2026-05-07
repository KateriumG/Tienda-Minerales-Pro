import { useNavigate } from "react-router-dom"

function AdminTopbar() {

  const navigate = useNavigate()

  const username =
    localStorage.getItem("username")

  return (
    <header className="bg-white border-b px-6 py-4 flex justify-between items-center">

      <h1 className="text-xl font-semibold">
        Admin Panel
      </h1>

      <div className="flex items-center gap-3">

        <span className="text-gray-600">
          {username}
        </span>

        <button
          onClick={() => {
            localStorage.clear()
            navigate("/login")
          }}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Logout
        </button>

      </div>

    </header>
  )
}

export default AdminTopbar