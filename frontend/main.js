import { Navbar } from "./components/navbar.js";
import { Footer } from "./components/footer.js";

import { renderRoute } from "./router.js";
import { subscribe } from "./store.js";

import { getProducts } from "./api.js";
import { setProducts } from "./store.js";

import { initEvents } from "./events.js";

import { setUserFromToken } from "./store.js";

// Verificar si hay un token en localStorage al cargar la aplicación
const token = localStorage.getItem("token");

if (token) {
  setUserFromToken(token);
}

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

async function init() {
  const products = await getProducts();
  setProducts(products);
}

init();

// 🔥 reactividad
subscribe(renderApp);

// render inicial
renderApp();

// 👉 eventos centralizados
initEvents();