import { createContext, useContext, useEffect, useState } from "react"

const CartContext = createContext()

export function CartProvider({ children }) {

  // Cargar desde localStorage
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart")
    return savedCart ? JSON.parse(savedCart) : []
  })

  // Guardar en localStorage cada vez que cambie
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  // Limpiar carrito
  const clearCart = () => setCart([])

  // Agregar producto
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

  // Eliminar producto
  const removeFromCart = (name) => {
    setCart(prev => prev.filter(p => p.name !== name))
  }

  // Cambiar cantidad
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

  // Total
  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )

  const formatCOP = (value) =>
  new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP"
  }).format(value)

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        total: formatCOP(total),
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}