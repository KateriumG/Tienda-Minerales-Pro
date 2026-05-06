import { getState } from "../store.js";
import { ProductCard } from "../components/productCard.js";

export function Home() {
  const { products } = getState();

  return `
    <section>
      <h2>Productos</h2>

      <div class="grid">
        ${
          products.length === 0
            ? "<p>Cargando...</p>"
            : products.map(p => ProductCard(p)).join("")
        }
      </div>
    </section>
  `;
}