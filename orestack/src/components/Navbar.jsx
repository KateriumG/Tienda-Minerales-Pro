import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-mining-dark text-white px-6 py-4 flex justify-between items-center shadow-lg">
      
      <h1 className="text-2xl font-bold text-mining-accent">
        ⛏️ OreStack
      </h1>

      <div className="flex gap-6">
        <Link className="hover:text-mining-accent" to="/">Inicio</Link>
        <Link className="hover:text-mining-accent" to="/catalog">Minerales</Link>
        <Link className="hover:text-mining-accent" to="/login">Login</Link>
      </div>

    </nav>
  );
}

export default Navbar;