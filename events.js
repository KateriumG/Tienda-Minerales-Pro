import { addToCart, removeFromCart } from "./store.js";
import { products } from "./data/products.js";
import { navigate } from "./router.js";
import { getState } from "./store.js";

export function initEvents() {
  document.addEventListener("click", (e) => {

    if (e.target.matches("[data-add]")) {
      const name = e.target.dataset.add;
      const product = products.find(p => p.name === name);
      addToCart(product);
    }

    if (e.target.matches("[data-remove]")) {
      removeFromCart(e.target.dataset.remove);
    }

    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigate(e.target.getAttribute("href"));
    }

    if (e.target.matches("[data-checkout]")) {
      const { cart } = getState();

        if (cart.length === 0) {
            alert("Tu carrito está vacío. Agrega productos antes de finalizar la compra.");
            return;
        }

        alert("Compra finalizada. ¡Gracias por tu compra!");

        // Aquí backend se procesaría el pago y se limpiaría el carrito
    }
  });
}