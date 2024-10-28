require('dotenv').config();
const express = require('express');
const app = express();
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

// puerto
const PORT = process.env.PORT || 5000;

// Middleware para manejar JSON
app.use(express.json());

// Ruta
app.get('/', (req, res) => {
  res.send('¡Servidor funcionando!');
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
