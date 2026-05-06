import { useCart } from '../context/CartContext'

function ProductCard({ name, price, image }) {
  const { addToCart } = useCart()

  return (
    <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-xl transition">
      
      <img 
        src={image} 
        alt={name}
        className="w-full h-40 object-cover rounded-lg mb-4"
      />

      <h3 className="text-lg font-semibold text-gray-800">
        {name}
      </h3>

      <p className="text-purple-600 font-bold">
        ${price}
      </p>

      <button 
        onClick={() => addToCart({ name, price, image })}
        className="mt-3 w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition"
      >
        Comprar
      </button>

    </div>
  )
}

export default ProductCard