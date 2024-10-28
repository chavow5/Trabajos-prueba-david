import React from 'react';
import '../styles/Header.css';

const Encabezado = () => {
  return (
    <header className="encabezado">
      <h1> ViaPass</h1>
      <nav>
        <a href="#inicio">Inicio</a>
        <a href="#about">Sobre Nosotros</a>
        <a href="#contacto">Contacto</a>
        <a href="#login">Ingresar</a> {/* Enlace del login */}
      </nav>
    </header>
  );
};

export default Encabezado;
