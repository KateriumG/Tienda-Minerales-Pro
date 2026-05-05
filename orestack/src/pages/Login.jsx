import Navbar from "../components/Navbar";

function Login() {
  return (
    <>
      <Navbar />
      <h1>Login</h1>

      <input placeholder="Correo" /><br />
      <input placeholder="Contraseña" type="password" /><br />
      <button>Ingresar</button>
    </>
  );
}

export default Login;