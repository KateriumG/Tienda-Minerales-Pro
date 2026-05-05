import { getState } from "../../store.js";

export function Checkout() {
  const { cart } = getState();

  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return `
    <section class="checkout">

      <h2>Checkout 🧾</h2>

      <div class="checkout-container">

        <!-- 🛒 productos -->
        <div class="checkout-items">
          <h3>Tu pedido</h3>

          ${
            cart.length === 0
              ? "<p>Tu carrito está vacío</p>"
              : cart.map(item => `
                <div class="checkout-item">
                  <span>${item.name} x${item.qty}</span>
                  <span>$${item.price * item.qty}</span>
                </div>
              `).join("")
          }
        </div>

        <!-- 💰 resumen -->
        <div class="checkout-summary">
          <h3>Resumen</h3>

          <p>Subtotal: $${total}</p>
          <p>Envío: $0</p>
          <hr>
          <h4>Total: $${total}</h4>

          <button data-checkout>
            Finalizar compra
          </button>
        </div>

      </div>

    </section>
  `;
}