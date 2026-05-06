export function Register() {
  return `
    <section class="auth">
      <h2>Crear cuenta</h2>

      <form id="registerForm">
        <input type="text" name="name" placeholder="Nombre" required />
        <input type="email" name="email" placeholder="Correo" required />
        <input type="password" name="password" placeholder="Contraseña" required />

        <button type="submit">Registrarse</button>
      </form>
    </section>
  `;
}