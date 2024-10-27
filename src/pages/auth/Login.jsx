
import './Login'
import './Login.css'; // Asegúrate de tener un archivo CSS con los estilos

const Login = () => {
  return (
    <div className="login-container">
      <div className="access-buttons">
        <button className="login-button">Iniciar sesión</button>
        <button className="register-button">Registrarse</button>
      </div>
      <form className="login-form">
        <input type="text" placeholder="Usuario" />
        <input type="email" placeholder="Correo" />
        <input type="password" placeholder="Contraseña" />
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
};

export default Login;
