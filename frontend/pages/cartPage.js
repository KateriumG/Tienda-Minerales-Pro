import { Cart } from "../components/cart.js";

export function CartPage() {
  return `
    <section>
      ${Cart()}
    </section>
  `;
}