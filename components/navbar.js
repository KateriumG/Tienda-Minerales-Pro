import { getState } from "../store.js";

export function Navbar() {
    const { cart } = getState();

    const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);

  return `
    <nav class="navbar">
      <h1>Orestock</h1>
      <ul>
        <li><a href="/" data-link>Inicio</a></li>
        <li><a href="/cart" data-link>Carrito (${totalItems})</a></li>
        <li>Contacto</li>
      </ul>
    </nav>
  `;
}

setTimeout(() => {
  document.getElementById("homeLink")?.addEventListener("click", () => navigate("/"));
  document.getElementById("cartLink")?.addEventListener("click", () => navigate("/cart"));
}, 0);