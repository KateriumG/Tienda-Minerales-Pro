import { Navbar } from "./components/navbar.js";
import { Footer } from "./components/footer.js";

import { navigate, renderRoute } from "./router.js";

import { addToCart, removeFromCart } from "./data/cart.js";
import { products } from "./data/products.js";

// acciones globales (temporal, luego las mejoramos)
window.add = function(name) {
  const product = products.find(p => p.name === name);
  addToCart(product);
  alert("Producto añadido 🛒");
};

window.remove = function(name) {
  removeFromCart(name);

  // 🔥 clave: re-renderizar la ruta actual
  renderRoute(location.pathname);
};

// render base (layout)
const app = document.getElementById("app");

app.innerHTML = `
  ${Navbar()}
  <main id="content"></main>
  ${Footer()}
`;

// cargar la ruta actual
renderRoute(location.pathname);

//navegación SPA
document.addEventListener("click", (e) => {
  if (e.target.matches("[data-link]")) {
    e.preventDefault();
    navigate(e.target.getAttribute("href"));
  }
});