import { Home } from "./pages/home.js";
import { CartPage } from "./pages/cartPage.js";
import { Checkout } from "./pages/checkout.js";
import { Login } from "./pages/login.js";

const routes = {
  "/": Home,
  "/cart": CartPage,
  "/checkout": Checkout,
  "/login": Login
};

export function navigate(path) {
  history.pushState({}, "", path);
  renderRoute(path);
}

export function renderRoute(path) {
  const app = document.getElementById("content");

  const page = routes[path];

  if (page) {
    app.innerHTML = page();
  } else {
    app.innerHTML = "<h2>404 - Página no encontrada</h2>";
  }
}

// Detectar botones atrás/adelante del navegador
window.onpopstate = () => {
  renderRoute(location.pathname);
};