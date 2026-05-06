const API = "http://localhost:3000/api";

// 🔧 helper reutilizable
async function parseResponse(res) {
  const text = await res.text();

  try {
    const data = JSON.parse(text);

    if (!res.ok) {
      throw new Error(data.message || "Error en la petición");
    }

    return data;
  } catch (err) {
    console.error("Respuesta no válida:", text);
    throw new Error("Error en servidor");
  }
}

// 🔐 LOGIN
export async function loginRequest(data) {
  const res = await fetch(`${API}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  return parseResponse(res);
}

// 📝 REGISTER
export async function registerRequest(data) {
  const res = await fetch(`${API}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  return parseResponse(res);
}

export async function getProducts() {
  const res = await fetch("http://localhost:3000/api/products");
  return res.json();
}