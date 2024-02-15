import React, { useState } from 'react';
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
    <div>
      {!usuarioAutenticado ? (
        <Login onLogin={manejarAutenticacion} />
      ) : (
        <ListaFrutas />
      )}
    </div>
  );
}

export default App;