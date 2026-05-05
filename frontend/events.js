import { addToCart, removeFromCart } from "../store.js";
import { products } from "./data/products.js";

import { navigate } from "../router.js";
import { getState } from "../store.js";

import { login, logout } from "../store.js";

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

    if (e.target.matches("#loginForm")) {
      e.preventDefault();

      const form = new FormData(e.target);

      const user = {
        name: form.get("name"),
        email: form.get("email")
      };

      const res = await fetch("http://localhost:3000/api/auth/login",{
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      const result = await res.json();

      if (res.ok){
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