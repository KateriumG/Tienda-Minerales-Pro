import { createContext, useContext, useState } from "react"

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  // ✅ Agregar producto
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find(p => p.name === product.name)

      if (existing) {
        return prev.map(p =>
          p.name === product.name
            ? { ...p, quantity: p.quantity + 1 }
            : p
        )
      }

      return [...prev, { ...product, quantity: 1 }]
    })
  }

  // ❌ Eliminar producto
  const removeFromCart = (name) => {
    setCart(prev => prev.filter(p => p.name !== name))
  }

  // ➕➖ Cambiar cantidad
  const updateQuantity = (name, amount) => {
    setCart(prev =>
      prev
        .map(p =>
          p.name === name
            ? { ...p, quantity: p.quantity + amount }
            : p
        )
        .filter(p => p.quantity > 0)
    )
  }

  // 💰 Total
  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        total
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

// Hook personalizado
export function useCart() {
  return useContext(CartContext)
}