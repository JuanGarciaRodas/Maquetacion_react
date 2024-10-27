import './Registro.css';


const Registro = () => {
  return (
    <div className="registration-container">
      <div className="access-buttons">
        <button className="login-button">Login</button>
        <button className="register-button">Register</button>
      </div>
      <form className="registration-form">
        <input type="text" placeholder="Usuario" />
        <input type="text" placeholder="Nombre" />
        <input type="tel" placeholder="Telefono" />
        <input type="email" placeholder="Correo" />
        <input type="password" placeholder="Contraseña" />
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default Registro;
