// Fruta.js
import React from 'react';
import './Fruta.css'; // Asegúrate de crear este archivo para los estilos

function Fruta({ nombre, precio }) {
  return (
    <div className="fruta">
      <h3>{nombre}</h3>
      <p>${precio}</p>
    </div>
  );
}

export default Fruta;
