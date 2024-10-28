const express = require('express');
const router = express.Router();

// Ruta registro de usuario
router.post('/register', (req, res) => {
  // Lógica de registro (la agregaremos luego)
  res.send('Ruta de registro');
});

// Ruta inicio de sesión
router.post('/login', (req, res) => {
  // Lógica de inicio de sesión (la agregaremos luego)
  res.send('Ruta de inicio de sesión');
});

module.exports = router;
