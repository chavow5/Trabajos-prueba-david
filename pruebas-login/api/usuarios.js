import express from "express";
import { db } from "./db.js";
import { body, validationResult } from "express-validator";
import bcrypt from "bcrypt";

const router = express.Router();
// API CRUD 

// GET /usuarios
// Consultar por todos los usuarios
router.get("/", async (req, res) => {
  const [usuarios] = await db.execute("select * from usuarios");
  res.send({ usuarios });
});

// POST /usuarios
// Crear nuevo usuario
router.post(
  "/",
  body("username").isAlphanumeric().notEmpty().isLength({ max: 25 }),
  body("password").isStrongPassword({
    minLength: 8, // Minino de 8 caracteres (letras y numeros)
    minLowercase: 1, // Al menos una letra minuscula
    minUppercase: 1, // Al menos una letra mayusculas
    minNumbers: 1, // Al menos un numero
    minSymbols: 0, // Sin simbolos
  }),
  async (req, res) => {
    // Enviar errores de validacion en caso de ocurrir alguno.
    const validacion = validationResult(req);
    if (!validacion.isEmpty()) {
      res.status(400).send({ errores: validacion.array() });
      return;
    }

    const { username, password } = req.body;

    // Crear hash de la contraseña
    const passwordHashed = await bcrypt.hash(password, 10);

    // Inserta en la base de datos 
    const [result] = await db.execute(
      "insert into usuarios (username, password) values (?,?)",
      [username, passwordHashed]
    );
    res.status(201).send({ usuario: { id: result.insertId, username } });
  }
);

export default router;
