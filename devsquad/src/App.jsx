import React from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Inicio from './pages/Inicio.jsx';
import Login from './pages/login.jsx';
import { Routes, Route, Link } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Header />
      <Inicio />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
