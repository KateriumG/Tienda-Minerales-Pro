export function ProductCard(product) {
  return `
    <div class="product-card">
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>$${product.price}</p>
      <a href="product.html?id=${product.id}">Ver más</a>
    </div>
  `;
}