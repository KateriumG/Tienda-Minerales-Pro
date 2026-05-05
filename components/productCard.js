export function ProductCard(product) {
  return `
    <div class="card">
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>$${product.price}</p>
      <button onclick="add('${product.name}')">Comprar</button>
    </div>
  `;
}