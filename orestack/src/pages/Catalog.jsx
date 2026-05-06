import Navbar from "../components/Navbar";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

function Catalog() {
  return (
    <>
      <Navbar />
      <h1>Catálogo</h1>

      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </>
  );
}

export default Catalog;