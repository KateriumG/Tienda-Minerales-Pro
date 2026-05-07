import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

function Login() {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const login = async () => {

    const res = await fetch(
      "http://localhost:3001/auth/login",
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

    if (data.token) {

      localStorage.setItem("token", data.token)
      localStorage.setItem("role", data.role)

      window.location.href = "/admin"

    } else {
      alert(data.error)
    }
  }

  return (
    <div className="max-w-sm mx-auto py-20 space-y-4">

      <h1 className="text-3xl font-bold">
        Login
      </h1>

      <input
        className="w-full border p-2"
        placeholder="Usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        className="w-full border p-2"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={login}
        className="bg-purple-600 text-white px-4 py-2 rounded w-full"
      >
        Entrar
      </button>
      <p className="
        text-center
        text-sm
        text-gray-500
      ">

        ¿No tienes cuenta?

        <Link
          to="/register"
          className="
            text-purple-600
            ml-1
            hover:underline
          "
        >
          Regístrate
        </Link>

      </p>

    </div>
  )
}

export default Login