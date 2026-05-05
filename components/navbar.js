export function Navbar() {
  return `
    <nav class="navbar">
      <h1>Orestock</h1>
      <ul>
        <li><a href="/" data-link>Inicio</a></li>
        <li><a href="/cart" data-link>Carrito 🛒</a></li>
        <li>Contacto</li>
      </ul>
    </nav>
  `;
}

setTimeout(() => {
  document.getElementById("homeLink")?.addEventListener("click", () => navigate("/"));
  document.getElementById("cartLink")?.addEventListener("click", () => navigate("/cart"));
}, 0);