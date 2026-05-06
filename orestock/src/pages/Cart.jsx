import { useCart } from "../context/CartContext"

function Cart() {
  const { cart, updateQuantity, removeFromCart, total } = useCart()

  if (cart.length === 0) {
    return (
      <section className="px-8 py-10">
        <h2 className="text-3xl font-bold">Carrito</h2>
        <p className="mt-4 text-gray-600">Tu carrito está vacío 🛒</p>
      </section>
    )
  }

  return (
    <section className="px-8 py-10">
      <h2 className="text-3xl font-bold mb-6">Carrito</h2>

      <div className="space-y-6">
        {cart.map((item, i) => (
          <div key={i} className="flex items-center gap-6 bg-white p-4 rounded-lg shadow">
            
            <img 
              src={item.image} 
              className="w-20 h-20 object-cover rounded"
            />

            <div className="flex-1">
              <h3 className="font-semibold">{item.name}</h3>
              <p>${item.price}</p>
            </div>

            {/* Cantidad */}
            <div className="flex items-center gap-2">
              <button onClick={() => updateQuantity(item.name, -1)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQuantity(item.name, 1)}>+</button>
            </div>

            {/* Eliminar */}
            <button 
              onClick={() => removeFromCart(item.name)}
              className="text-red-500"
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      {/* Total */}
      <div className="mt-10 text-right">
        <h3 className="text-2xl font-bold">
          Total: ${total}
        </h3>
      </div>
    </section>
  )
}

export default Cart