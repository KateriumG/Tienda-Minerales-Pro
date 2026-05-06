function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-white shadow-md">
      
      {/* Logo */}
      <h1 className="text-2xl font-bold text-purple-700">
        Orestock
      </h1>

      {/* Navegación */}
      <nav className="flex gap-6 text-gray-700 font-medium">
        <a href="#" className="hover:text-purple-600 transition">Inicio</a>
        <a href="#" className="hover:text-purple-600 transition">Productos</a>
        <a href="#" className="hover:text-purple-600 transition">Contacto</a>
      </nav>

      {/* Botón */}
      <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition">
        Carrito
      </button>
    </header>
  )
}

export default Header