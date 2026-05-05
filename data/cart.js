let cart = JSON.parse(localStorage.getItem("cart")) || [];

export function getCart() {
  return cart;
}

export function addToCart(product) {
  const existing = cart.find(p => p.name === product.name);

  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  saveCart();
}

export function removeFromCart(name) {
  cart = cart.filter(p => p.name !== name);
  saveCart();
}

export function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}