import express from "express";
import cors from "cors";
import { conectarDB, db } from "./db.js";
// import { db } from "./db.js";
import usuariosRouter from "./usuarios.js";
import authRouter from "./auth.js";

// Conectar a DB
conectarDB();
console.log("Conectado a base de datos");

const app = express();
const port = 3000;

// interpretar JSON en body y habilitar cors
app.use(express.json());
app.use(cors());

// rutas
// app.get("/", (_, res) => {
//   res.send("Hola mundo");
// });
app.get("/", async (_, res) => {
    const [usuarios] = await db.execute("select id,username,rol from usuarios");
    res.send({ usuarios });
  });

// rutas usuarios y autenticacaion
app.use("/usuarios", usuariosRouter);
app.use("/auth", authRouter);

app.listen(port, () => {
  console.log(`La aplicacion esta funcionando en:  http://localhost:${port}`);
});

