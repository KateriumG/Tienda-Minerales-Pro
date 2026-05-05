import { getState } from "../store.js";

export function Navbar() {
    const { cart, user } = getState();

    const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);

  return `
    <nav class="navbar">
      <h1>Orestock</h1>
      <ul>
        <li><a href="/" data-link>Inicio</a></li>
        <li><a href="/cart" data-link>Carrito (${totalItems})</a></li>
        <li>Contacto</li>
        ${
          user
          ?`
            <li>Hola, ${user.name}</li>
            <li><button data-logout>Cerrar sesión</button></li>
          `
          :`
            <li><a href="/login" data-link>Login</a></li>
          `
        }
      </ul>
    </nav>
  `;
}

setTimeout(() => {
  document.getElementById("homeLink")?.addEventListener("click", () => navigate("/"));
  document.getElementById("cartLink")?.addEventListener("click", () => navigate("/cart"));
}, 0);