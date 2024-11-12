import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Sistema de Peaje</h1>
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="/login">Iniciar Sesion </Link>
      <Link to="/contacto">Contacto</Link>
      
    </nav>
  </header>
);

export default Header;
