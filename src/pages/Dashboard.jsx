import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const [cardData, setCardData] = useState([
    { title: 'Card 1', content: 'Contenido de la tarjeta 1' },
    { title: 'Card 2', content: 'Contenido de la tarjeta 2' },
    { title: 'Card 3', content: 'Contenido de la tarjeta 3' },
    { title: 'Card 4', content: 'Contenido de la tarjeta 4' },
  ]);

  const handleLogout = () => {
    navigate('/login'); // Redirige a la página de login
  };

  return (
    <div className="dashboard-container">
      <header className="header">
        <button className="cerrar-sesion" onClick={handleLogout}>Cerrar Sesión</button>
      </header>
      <h1>Esto es el Home</h1>
      <main className="main-content">
        <div className="card-container">
          {cardData.map((card, index) => (
            <div key={index} className="card">
              <h2>{card.title}</h2>
              <p>{card.content}</p>
              <div className="card-buttons">
                <button>One</button>
                <button>Two</button>
                <button>Three</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
