import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { Router } from 'express';
import db from '../db.js'; 

const router = Router();

// Ruta para registro de usuario
router.post('/register', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Por favor ingresa un nombre de usuario y contraseña.' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  db.query('INSERT INTO usuarios (username, password) VALUES (?, ?)', [username, hashedPassword], (error, results) => {
    if (error) {
      return res.status(500).json({ message: 'Error al registrar el usuario.', error });
    }
    res.status(201).json({ message: 'Usuario registrado con éxito.' });
  });
});

// Ruta para inicio de sesión
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Por favor ingresa un nombre de usuario y contraseña.' });
  }

  db.query('SELECT * FROM usuarios WHERE username = ?', [username], async (error, results) => {
    if (error || results.length === 0) {
      return res.status(401).json({ message: 'Credenciales inválidas.' });
    }

    const user = results[0];
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Credenciales inválidas.' });
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ token });
  });
});

// Exportar el enrutador
export default router;
