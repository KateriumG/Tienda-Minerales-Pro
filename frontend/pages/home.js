import { ProductCard } from "../components/productCard.js";

export function ProductList(products) {
  return `
    <section class="product-list">
      ${products.map(p => ProductCard(p)).join("")}
    </section>
  `;
}