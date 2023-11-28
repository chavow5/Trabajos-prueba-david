import express from "express";
import cors from "cors";
import mysql from "mysql2/promise";


// Conectar a base de datos
const db = await mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "", // en laptop cambiar por admin
  database: "banco2", // nombre de base de datos
  namedPlaceholders: true,
});
console.log("Conectado a base de datos...");

// Crear aplicacion express
const app = express();
app.use(express.json());
app.use(cors());

// Registrar metodo GET en ruta raiz ('/')
app.get("/", (req, res) => {
  res.send("Api en funcionamiento desde Thunder Client");
});

// METODO CRUD 
// CLIENTES 
// CUENTAS
// TRANSACCION

//######### POST AGREGAR #########
app.post("/prueba",   //Se crea un post para agregar personas a la tabla empleados
body("usuario").isAlphanumeric().isLength({ min: 1, max: 25 }),
body("password").isStrongPassword({   //Se le indican las restricciones de la contraseña
  minLength: 8,   //Minimo 8 caracteres
  minLowercase: 1,  //Minimo una minuscula
  minUppercase: 1,  //Minimo una mayuscula
  minNumbers: 1,    //Minimo un numero
  minSymbols: 0,
}),

async (req, res) => {
  const validacion = validationResult(req);
  if (!validacion.isEmpty()) {
    res.status(400).send({ errors: validacion.array() });
    return;
    } console.log(req.body);
    const { nombre, apellido, email,usuario, password ,saldo, telefono,sexo, fecha_nacimiento,domicilio } = req.body;  //Se crean las constantes para indicar los valores en el body
    const passwordHashed = await bcrypt.hash(password, 8);  //Se encripta la contraseña
    const [rows] = await db.execute(
      //Se le indican los valores ingresados a las constantes del body anteriormente creadas
      "INSERT INTO clientes ( nombre, apellido, email,usuario, password ,saldo, telefono,sexo, fecha_nacimiento,domicilio) VALUES (:nombre, :apellido, :email,:usuario, :password ,:saldo, :telefono,:sexo, :fecha_nacimiento,:domicilio)",
      { nombre:nombre, apellido:apellido, email:email, usuario:usuario, password:passwordHashed, saldo:saldo,telefono:telefono ,sexo:sexo, fecha_nacimiento:fecha_nacimiento }
    );
    res.status(201).send({ id: rows.insertId, nombre, apellido, email,saldo, telefono,sexo, fecha_nacimiento,domicilio }); //Si todo esta correcto se envia a la base de datos y devuelve un mensaje positivo
  }
)


// POST Agregar/crear Clientes
app.post("/clientes", async (req, res) => {
  const clientes = req.body.clientes; // body JSON en txt sale escrito post
  const [rows] = await db.execute(
    "INSERT INTO `banco2`.`clientes` (`nombre`, `apellido`, `email`, `saldo`, `telefono`, `sexo`, `fecha_nacimiento`,`domicilio`) VALUES (:nombre, :apellido, :email, :saldo , :telefono, :sexo, :fecha_nacimiento, :domicilio);",
    {
      nombre: clientes.nombre,  
      apellido: clientes.apellido,
      email: clientes.email,
      saldo: clientes.saldo,
      telefono: clientes.telefono,
      sexo: clientes.sexo,
      fecha_nacimiento: clientes.fecha_nacimiento,
      domicilio: clientes.domicilio
    }
  );

  res.status(201).send({ ...clientes, id: rows.insertId });
});

// POST agregar/crear cuentas
app.put("/cuentas/:id", async (req, res) => {
  const id = req.params.id;
  const cuentas = req.body.clientes;
  await db.execute(
    "UPDATE cuentas SET id_cuenta=:id_cuenta, id_cliente=:id_cliente, saldo=:saldo WHERE id_cuenta=:id",
    { id, id_cuenta: cuentas.id_cuenta, id_cliente: cuentas.id_cliente, saldo: cuentas.saldo }
  );
  res.send("ok, cuenta editado");
});

// POST agregar/crear Transacciones
app.post("/transacciones", async (req, res) => {
  const transacciones = req.body.transacciones;
  
  const [rows] = await db.execute(
    "INSERT INTO `banco2`.`transacciones` (`id_cuenta_origen`, `id_cuenta_destino`,`monto`,`descripcion` ) VALUES (:id_cuenta_origen, :id_cuenta_destino, :monto, :descripcion);",
    {
      id_cuenta_origen: transacciones.id_cuenta_origen,
      id_cuenta_destino: transacciones.id_cuenta_destino,
      monto: transacciones.monto,
      descripcion: transacciones.descripcion,
    }
  );

  res.status(201).send({ ...transacciones, id: rows.insertId });
});

// ######### GET LEER #########

// GET Obtener Todos los Clientes
app.get("/clientes", async (req, res) => {
  const [rows, fields] = await db.execute("SELECT * FROM clientes");
  res.send(rows);
});
// GET Obtener todas las Cuentas
app.get("/cuentas", async (req, res) => {
  const [rows, fields] = await db.execute("SELECT * FROM cuentas");
  res.send(rows);
});
// GET obtener todas las Transacciones
app.get("/transacciones", async (req, res) => {
  try {
    const [rows, fields] = await db.execute("SELECT * FROM transacciones");
    res.send(rows);
  } catch (error) {
    console.error("Error al obtener transacciones:", error);
    res.status(500).send("Error interno del servidor");
  }
});

//[GET] Obtener clientes Por ID
app.get("/clientes/:id", async (req, res) => {
  const id = req.params.id;
  const [rows, fields] = await db.execute("SELECT * FROM clientes WHERE id_cliente=:id", {
    id,
  }); //metodo if 
  if (rows.length > 0) {
    res.send(rows[0]);
  } else {
    res.status(404).send({ mensaje: "clientes no encontrado" });
  }
});

//######### PUT MODIFICAR/EDITAR #########

// PUT Modificar Cuenta por Id

// PUT Modificar Clientes por Id
app.put("/clientes/:id", async (req, res) => {
  const id = req.params.id;
  const clientes = req.body.clientes;
  await db.execute(
    "UPDATE clientes SET nombre=:nombre, apellido=:apellido, email=:email WHERE id_cliente=:id",
    { id, nombre: clientes.nombre,
      apellido: clientes.apellido, 
      email: clientes.email,
      contraseña: clientes.contraseña,
      saldo: clientes.saldo,
      telefono: clientes.telefono,
      sexo: clientes.sexo,
      fecha_nacimiento: clientes.fecha_nacimiento
    }
  );
  res.send("ok, cliente editado");
});
//PUT modificar Transacciones por Id
app.put("/transaccion/:id", async (req, res) => {
  const id = req.params.id;
  const transacciones = req.body;
  await db.execute( //solo el monto, fecha y descripcion
    "UPDATE transacciones SET fecha=:fecha ,monto=:monto, descripcion=:descripcion WHERE id_transaccion=:id",
    { id, fecha:transacciones.fecha ,monto: transacciones.monto, descripcion: transacciones.descripcion}
  );
  res.send("ok, transaccion editada");
});

//######### DELETE ELIMINAR #########

// DELETE Eliminar Cuentas
app.delete("/cuentas/:id", async (req, res) => {
  const id = req.params.id;
  await db.execute("DELETE FROM cuentas WHERE id=:id", { id });
  res.send("se ha eliminado la cuenta con exito X_X");
});                                             
// DELETE Eliminar Clientes
app.delete("/clientes/:id", async (req, res) => {
  const id = req.params.id;
  await db.execute("DELETE FROM clientes WHERE id=:id_cliente", { id_cliente });
  res.send("se ha eliminado el cliente con exito X_X");
});  
// DELETE Eliminar transacciones
app.delete("/transacciones/:id", async (req, res) => {
  const id = req.params.id;
  await db.execute("DELETE FROM transacciones WHERE id=:id", { id });
  res.send("se ha eliminado la transaccion con exito X_X");
});  



// Pongo en funcionamiento la API en puerto 3000
app.listen(3000, () => {
  console.log("Base De Datos conectada ");
  console.log("API en Funcionamiento :D");
});
