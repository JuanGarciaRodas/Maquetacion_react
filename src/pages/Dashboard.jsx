import './Dashboard'
import React, { useState } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const [cardData, setCardData] = useState([
    { title: 'Card 1', content: 'Contenido de la tarjeta 1' },
    { title: 'Card 2', content: 'Contenido de la tarjeta 2' },
    { title: 'Card 3', content: 'Contenido de la tarjeta 3' },
    { title: 'Card 4', content: 'Contenido de la tarjeta 4' },
  ]);

  return (
    <div className="dashboard-container">
      <header className="header">
        <button className="cerrar-sesion">Cerrar Sesion</button>
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