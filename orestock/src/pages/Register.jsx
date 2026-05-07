import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

function Register() {

  const navigate = useNavigate()

  const [username, setUsername] =
    useState("")

  const [password, setPassword] =
    useState("")

  const [loading, setLoading] =
    useState(false)

  const register = async () => {

    if (!username || !password) {
      alert("Completa todos los campos")
      return
    }

    setLoading(true)

    try {

      const res = await fetch(
        "http://localhost:3001/auth/register",
        {

          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify({
            username,
            password
          })
        }
      )

      const data = await res.json()

      if (!res.ok) {

        alert(
          data.error || "Error al registrar"
        )

        return
      }

      alert("Usuario creado correctamente")

      navigate("/login")

    } catch {

      alert("Error del servidor")

    } finally {

      setLoading(false)
    }
  }

  return (
    <div className="
      min-h-screen
      flex items-center justify-center
      bg-gray-100
      p-4
    ">

      <div className="
        bg-white
        w-full
        max-w-md
        rounded-2xl
        shadow-lg
        p-8
        space-y-6
      ">

        {/* TITLE */}
        <div className="text-center">

          <h1 className="
            text-3xl
            font-bold
          ">
            Crear cuenta
          </h1>

          <p className="
            text-gray-500
            mt-2
          ">
            Únete a Orestock
          </p>

        </div>

        {/* USERNAME */}
        <div>

          <label className="
            text-sm text-gray-600
          ">
            Usuario
          </label>

          <input
            className="
              w-full
              border
              rounded-lg
              p-3
              mt-1
            "
            placeholder="tu_usuario"
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
            Contraseña
          </label>

          <input
            type="password"
            className="
              w-full
              border
              rounded-lg
              p-3
              mt-1
            "
            placeholder="••••••••"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

        </div>

        {/* BUTTON */}
        <button
          onClick={register}
          disabled={loading}
          className="
            w-full
            bg-purple-600
            hover:bg-purple-700
            disabled:opacity-50
            text-white
            py-3
            rounded-lg
            transition
          "
        >

          {loading
            ? "Creando cuenta..."
            : "Registrarse"}

        </button>

        {/* LOGIN LINK */}
        <p className="
          text-center
          text-sm
          text-gray-500
        ">

          ¿Ya tienes cuenta?

          <Link
            to="/login"
            className="
              text-purple-600
              ml-1
              hover:underline
            "
          >
            Inicia sesión
          </Link>

        </p>

      </div>

    </div>
  )
}

export default Register