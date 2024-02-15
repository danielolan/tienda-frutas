import React from 'react';
import './ListaFrutas.css'; // No olvides crear este archivo para tus estilos

const frutas = [
  { id: 1, nombre: 'Manzana', precio: 0.99 },
  { id: 2, nombre: 'Banana', precio: 0.79 },
  { id: 3, nombre: 'Naranja', precio: 0.89 },
  // Agrega más frutas según lo desees
];

function ListaFrutas() {
  return (
    <div className="lista-frutas">
      <h2>Frutas Disponibles</h2>
      <ul>
        {frutas.map(fruta => (
          <li key={fruta.id}>{fruta.nombre} - ${fruta.precio}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListaFrutas;
