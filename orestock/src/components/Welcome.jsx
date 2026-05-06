function Welcome() {
  return (
    <section className="text-center py-20 bg-linear-to-r from-purple-100 to-indigo-100">
      
      <h2 className="text-4xl font-bold text-gray-800 mb-4">
        Bienvenido a Orestock
      </h2>

      <p className="text-gray-600 max-w-xl mx-auto mb-6">
        Descubre la energía y belleza de minerales, cristales y gemas únicas.
      </p>

      <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition">
        Ver productos
      </button>

    </section>
  )
}

export default Welcome