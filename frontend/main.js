import { Navbar } from "./components/navbar.js";
import { Footer } from "./components/footer.js";

import { renderRoute } from "./router.js";
import { subscribe } from "./store.js";

import { initEvents } from "./events.js";

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

// 🔥 reactividad
subscribe(renderApp);

// render inicial
renderApp();

// 👉 eventos centralizados
initEvents();