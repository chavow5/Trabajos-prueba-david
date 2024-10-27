import React from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <h2>Bienvenido al Sistema de Peajes</h2>
        {/* Aquí irán las demás secciones de la página */}
      </main>
      <Footer />
    </div>
  );
};

export default App;
