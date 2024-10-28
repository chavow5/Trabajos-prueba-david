// src/pages/Inicio.jsx
import React from 'react';
import '../styles/Inicio.css';

const Inicio = () => {
  return (
    <div className="inicio">
      <section className="bienvenida">
        <h2>Bienvenido al Sistema de Peajes</h2>
        <p>Tu acceso rápido y seguro a todos los peajes del país.</p>
      </section>

      <section className="servicios">
        <h3>¿Qué Ofrecemos?</h3>
        <ul>
          <li>Control de acceso automatizado</li>
          <li>Facturación y pago en línea</li>
          <li>Reportes y consultas</li>
          <li>Atención al cliente 24/7</li>
        </ul>
      </section>

      <section className="registro">
        <h3>¿No tienes una cuenta?</h3>
        <p>
          <a href="#registro" className="btn-registro">Regístrate aquí</a>
        </p>
      </section>
    </div>
  );
};

export default Inicio;
