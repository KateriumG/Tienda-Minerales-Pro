import { Header } from "./components/header.js";
import { Footer } from "./components/footer.js";
import { ProductList } from "./pages/home.js";

const products = [
  { id: 1, name: "Camisa", price: 50000, image: "img1.jpg" },
  { id: 2, name: "Zapatos", price: 120000, image: "img2.jpg" }
];

document.body.innerHTML =
  Header() +
  ProductList(products) +
  Footer();