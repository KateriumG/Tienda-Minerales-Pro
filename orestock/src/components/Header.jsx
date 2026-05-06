import { Link } from "react-router-dom"
import { useCart } from '../context/CartContext'

function Header() {
  const { cart } = useCart()

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0)

  return (
    <header className="flex items-center justify-between px-8 py-4 bg-white shadow-md">
      
      <h1 className="text-2xl font-bold text-purple-700">
        Orestock
      </h1>

      <nav className="flex gap-6 text-gray-700 font-medium">
        <Link to="/" className="hover:text-purple-600">Inicio</Link>
        <Link to="/products" className="hover:text-purple-600">Productos</Link>
      </nav>

      <Link 
        to="/cart"
        className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
      >
        Carrito
        {totalItems > 0 && (
          <span className="ml-2 bg-purple-700 text-white text-sm font-bold py-1 px-2 rounded-full">
            {totalItems}
          </span>
          )}
      </Link>
    </header>
  )
}

export default Header 