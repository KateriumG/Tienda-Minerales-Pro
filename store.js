const state = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  user: JSON.parse(localStorage.getItem("user")) || null
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
  localStorage.setItem("user", JSON.stringify(state.user));
  notify(); // actualiza toda la app
}

export function login(userData) {
  state.user = userData;
  save();
}

export function logout() {
  state.user = null;
  save();
}