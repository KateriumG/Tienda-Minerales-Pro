import { useState } from "react"

import { useNavigate } from "react-router-dom"

function Settings() {

    const navigate = useNavigate()

  const [username, setUsername] =
    useState(
      localStorage.getItem("username") || ""
    )

  const [password, setPassword] =
    useState("")

  const token =
    localStorage.getItem("token")

  const save = async () => {

    const res = await fetch(
      "http://localhost:3001/auth/settings",
      {

        method: "PUT",

        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },

        body: JSON.stringify({
          username,
          password
        })
      }
    )

    const data = await res.json()

    if (res.ok) {

      localStorage.setItem(
        "username",
        username
      )

      alert("Configuración actualizada")

    } else {

      alert(data.error || "Error")
    }
  }

  return (
    <section className="
      max-w-xl
      mx-auto
      space-y-6
    ">

      <div>

        <h1 className="
          text-3xl font-bold
        ">
          Configuración
        </h1>

        <p className="text-gray-500">
          Cambia tu usuario y contraseña.
        </p>

      </div>

      {/* USERNAME */}
      <div>

        <label className="
          text-sm text-gray-600
        ">
          Nombre de usuario
        </label>

        <input
          className="
            w-full
            border
            rounded
            p-3
          "
          value={username}
          onChange={(e) =>
            setUsername(e.target.value)
          }
        />

      </div>

      {/* PASSWORD */}
      <div>

        <label className="
          text-sm text-gray-600
        ">
          Nueva contraseña
        </label>

        <input
          type="password"
          className="
            w-full
            border
            rounded
            p-3
          "
          placeholder="
            Dejar vacío para no cambiar
          "
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

      </div>

      {/* BUTTON */}
      <div className="flex gap-3">

        <button
            onClick={save}
            className="
            flex-1
            bg-purple-600
            hover:bg-purple-700
            text-white
            px-6 py-3
            rounded-lg
            "
        >
            Guardar cambios
        </button>

        <button
            onClick={() => {

            localStorage.removeItem("token")
            localStorage.removeItem("role")
            localStorage.removeItem("username")

            navigate("/login")
            }}
            className="
            bg-red-500
            hover:bg-red-600
            text-white
            px-6 py-3
            rounded-lg
            "
        >
            Logout
        </button>

        </div>

    </section>
  )
}

export default Settings