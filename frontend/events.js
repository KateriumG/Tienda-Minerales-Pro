import { addToCart, removeFromCart } from "../store.js";
import { products } from "./data/products.js";

import { navigate } from "../router.js";
import { getState } from "../store.js";

import { login, logout } from "../store.js";
import { loginRequest, registerRequest } from "./api.js";

export function initEvents() {
  // Manages the click events
  document.addEventListener("click", (e) => {

    // Product events
    if (e.target.matches("[data-add]")) {
      const name = e.target.dataset.add;
      const product = products.find(p => p.name === name);
      addToCart(product);
    }

    if (e.target.matches("[data-remove]")) {
      removeFromCart(e.target.dataset.remove);
    }

    // Manages changing site section
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigate(e.target.getAttribute("href"));
    }

    // Checkout logic
    if (e.target.matches("[data-checkout]")) {
      const { cart } = getState();

        if (cart.length === 0) {
            alert("Tu carrito está vacío. Agrega productos antes de finalizar la compra.");
            return;
        }

        alert("Compra finalizada. ¡Gracias por tu compra!");

        // Aquí backend se procesaría el pago y se limpiaría el carrito
    }

    if (e.target.matches("[data-logout]")) {
      logout();
      navigate("/");
    }
  });

  // Manages the events that deal with forms
  document.addEventListener("submit", async (e)=> {

    if (e.target.matches("#registerForm")) {
      e.preventDefault();

      const form = new FormData(e.target);

      const data = {
        name: form.get("name"),
        email: form.get("email"),
        password: form.get("password")
      };

      const result = await registerRequest(data);

      if (result.message) {
        alert("Usuario creado ✅");
        navigate("/login");
      } else {
        alert(result.message || "Error");
      }
    }

    if (e.target.matches("#loginForm")) {
      e.preventDefault();

      const form = new FormData(e.target);

      const user = {
        name: form.get("name"),
        email: form.get("email")
      };

      const result = await loginRequest(user);

      if (result.token) {
        // Guarda Token
        localStorage.setItem("token", result.token);

        // Guardar usuario decodificado (simple)
        const payload = JSON.parse(atob(result.token.split(".")[1]));

        login(payload);

        navigate("/");
      }else{
        alert(result.message);
      }

      login(user);

      navigate("/");
    }

  });
}