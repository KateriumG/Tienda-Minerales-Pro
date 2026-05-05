import { getCart, removeFromCart } from "../data/cart.js";

export function Cart() {
  const cart = getCart();

  return `
    <section class="cart">
      <h2>Carrito</h2>

      ${cart.length === 0 
        ? "<p>Tu carrito está vacío</p>" 
        : cart.map(item => `
          <div class="cart-item">
            <h4>${item.name}</h4>
            <p>Cantidad: ${item.qty}</p>
            <p>$${item.price * item.qty}</p>
            <button onclick="remove('${item.name}')">Eliminar</button>
          </div>
        `).join("")
      }
    </section>
  `;
}