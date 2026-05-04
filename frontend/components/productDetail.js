export function ProductDetail(product) {
  return `
    <section class="product-detail">
      <img src="${product.image}" alt="${product.name}">
      <div>
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <h3>$${product.price}</h3>
        <button>Agregar al carrito</button>
      </div>
    </section>
  `;
}