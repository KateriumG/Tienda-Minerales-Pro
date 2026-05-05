export function Login() {
  return `
    <section class="auth">

      <h2>Iniciar sesión</h2>

      <form id="loginForm">
        <input type="email" name="email" placeholder="Correo" required />
        <input type="password" name="password" placeholder="Contraseña" required />


        <button type="submit">Entrar</button>
      </form>

    </section>
  `;
}