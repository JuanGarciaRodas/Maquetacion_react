import { useNavigate } from 'react-router-dom';
import Dashboard from '../Dashboard';
import Home from '../Home';
import './Login.css'; // Asegúrate de tener un archivo CSS con los estilos

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault(); // Evita que el formulario se envíe
    navigate('/dashboard'); // Redirige a la página de dashboard
  };

  const handleRegister = () => {
    navigate('/registro'); // Redirige a la página de registro
  };

  return (
    <div className="login-container">
      <div className="access-buttons">
        <button className="login-button" onClick={handleLogin}>Iniciar sesión</button>
        <button className="register-button" onClick={handleRegister}>Registrarse</button>
      </div>
      <form className="login-form" onSubmit={handleLogin}>
        <input type="text" placeholder="Usuario" />
        <input type="email" placeholder="Correo" />
        <input type="password" placeholder="Contraseña" />
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
};

export default Login;
