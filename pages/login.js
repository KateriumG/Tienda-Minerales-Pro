export function Login() {
  return `
    <section class="auth">

      <h2>Iniciar sesión</h2>

      <form id="loginForm">
        <input type="text" name="name" placeholder="Nombre" required />
        <input type="email" name="email" placeholder="Correo" required />

        <button type="submit">Entrar</button>
      </form>

    </section>
  `;
}