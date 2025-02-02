import 'dotenv/config';
import express from 'express';
import authRoutes from './routes/auth.js';
import cors from 'cors';

const app = express();
// Middleware para manejar JSON
app.use(express.json());

// uso api/auth como ruta
app.use('/api/auth', authRoutes);

// puerto 
const PORT = process.env.PORT || 5000;

// Ruta
app.get('/', (req, res) => {
  res.send('Servidor funcionando!');
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});



app.use(cors({
  origin: 'http://localhost:5173', // URL del react probar
}));
