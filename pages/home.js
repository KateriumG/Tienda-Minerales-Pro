import { products } from "../data/products.js";
import { ProductCard } from "../components/productCard.js";

export function Home() {
  return `
    <section>
      <h2>Productos Destacados</h2>
      <div class="grid">
        ${products.map(p => ProductCard(p)).join("")}
      </div>
    </section>
  `;
}