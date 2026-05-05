const state = {
  cart: JSON.parse(localStorage.getItem("cart")) || []
};

const listeners = [];

export function getState() {
  return state;
}

export function subscribe(fn) {
  listeners.push(fn);
}

function notify() {
  listeners.forEach(fn => fn());
}

// 🛒 acciones
export function addToCart(product) {
  const existing = state.cart.find(p => p.name === product.name);

  if (existing) {
    existing.qty++;
  } else {
    state.cart.push({ ...product, qty: 1 });
  }

  save();
}

export function removeFromCart(name) {
  state.cart = state.cart.filter(p => p.name !== name);
  save();
}

function save() {
  localStorage.setItem("cart", JSON.stringify(state.cart));
  notify(); // magia: actualiza toda la app
}