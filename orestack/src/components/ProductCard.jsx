function ProductCard({ product }) {
  return (
    <div className="bg-mining-stone rounded-2xl overflow-hidden shadow-md hover:scale-105 transition">
      
      <img src={product.image} className="w-full h-40 object-cover" />

      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        
        <p className="text-mining-gold font-bold mt-2">
          ${product.price}
        </p>

        <button className="mt-3 w-full bg-mining-accent text-black py-2 rounded-lg hover:bg-green-400">
          Comprar
        </button>
      </div>
    </div>
  );
}

export default ProductCard;