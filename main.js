import { Navbar } from "./components/navbar.js";
import { Footer } from "./components/footer.js";

import { navigate, renderRoute } from "./router.js";

import { subscribe, addToCart, removeFromCart } from "./store.js";
import { products } from "./data/products.js";

// 👉 acciones globales (temporal)
window.add = function(name) {
  const product = products.find(p => p.name === name);
  addToCart(product);
};

window.remove = function(name) {
  removeFromCart(name);
};

// 👉 layout base
const app = document.getElementById("app");

function renderApp() {
  app.innerHTML = `
    ${Navbar()}
    <main id="content"></main>
    ${Footer()}
  `;

  renderRoute(location.pathname);
}

// 🔥 se ejecuta cuando cambia el estado
subscribe(renderApp);

// render inicial
renderApp();

// navegación SPA
document.addEventListener("click", (e) => {
  if (e.target.matches("[data-link]")) {
    e.preventDefault();
    navigate(e.target.getAttribute("href"));
  }
});