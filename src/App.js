import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './login/Login';
import ListaFrutas from './frutas/ListaFrutas';

const usuarios = [
  { usuario: 'usuario1', password: 'password1' },
  { usuario: 'usuario2', password: 'password2' },
];

function App() {
  const [usuarioAutenticado, setUsuarioAutenticado] = useState(false);

  const manejarAutenticacion = (usuario, password) => {
    const usuarioValido = usuarios.some(u => u.usuario === usuario && u.password === password);
    if (usuarioValido) {
      setUsuarioAutenticado(true);
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={!usuarioAutenticado ? <Login onLogin={manejarAutenticacion} /> : <Navigate replace to="/frutas" />} />
        <Route path="/frutas" element={usuarioAutenticado ? <ListaFrutas /> : <Navigate replace to="/login" />} />
        <Route path="*" element={<Navigate replace to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
