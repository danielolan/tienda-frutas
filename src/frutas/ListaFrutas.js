// ListaFrutas.js
import React from 'react';
import Fruta from './Fruta';
import './ListaFrutas.css'; // Asegúrate de crear este archivo para los estilos

const frutas = [
  { id: 1, nombre: 'Manzana', precio: 0.99 },
  { id: 2, nombre: 'Banana', precio: 0.79 },
  { id: 3, nombre: 'Naranja', precio: 0.89 },
  // Agrega más frutas según lo desees
];

function ListaFrutas() {
  return (
    <div className="lista-frutas">
      {frutas.map(fruta => (
        <Fruta key={fruta.id} nombre={fruta.nombre} precio={fruta.precio} />
      ))}
    </div>
  );
}

export default ListaFrutas;
