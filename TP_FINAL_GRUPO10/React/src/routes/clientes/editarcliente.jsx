import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export const Editarcliente = () => {
  const { id } = useParams();
  const [Editarcliente, setEditarcliente] = useState({
    nombre: "",
    apellido: "",
    email: "",
    contraseña: "",
    saldo: "",
    telefono: "",
    sexo: "",
    fecha_nacimiento:"",
  });

  useEffect(() => {
    const obtenerClienteExistente = async () => {
      if (id) {
        const res = await fetch(`http://localhost:3000/clientes/${id}`);
        if (res.ok) {
          const clienteExistente = await res.json();
          setEditarcliente(clienteExistente);
        } else {
          console.log("Error al obtener datos del cliente existente");
        }
      }
    };

    obtenerClienteExistente();
  }, [id]);

  const subirCliente = async () => {
    const url = `http://localhost:3000/clientes/${id}`;
    const res = await fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cliente: Editarcliente }),
    });

    if (res.ok) {
      alert("Cliente actualizado con éxito");
      console.log("Cliente actualizado");
    } else {
      alert("Fallo al actualizar cliente, prueba de nuevo");
      console.log("Fallo al actualizar cliente");
    }
  };

 // ...

return (
    <>
      <h1>Editar Cliente</h1>
      <form onSubmit={subirCliente}>
        <label>
          Nombre:
          <input
            type="text"
            name="nombre"
            value={Editarcliente.nombre} 
            onChange={(e) => setEditarcliente({ ...Editarcliente, nombre: e.target.value })} 
          />
        </label>
        <label>
          Apellido:
          <input
            type="text"
            name="apellido"
            value={Editarcliente.apellido} 
            onChange={(e) => setEditarcliente({ ...Editarcliente, apellido: e.target.value })} 
          />
        </label>
        <br />
        <label>
          Correo Electrónico:
          <input
            type="email"
            name="email"
            value={Editarcliente.email} 
            onChange={(e) => setEditarcliente({ ...Editarcliente, email: e.target.value })} 
          />
        </label>
        <br />
        <label>
          Contraseña:
          <input
            type="text"
            name="contraseña"
            value={Editarcliente.contraseña} 
            onChange={(e) => setEditarcliente({ ...Editarcliente, contraseña: e.target.value })} 
          />
        </label>
        <label>
          Saldo:
          <input
            type="number"
            name="saldo"
            value={Editarcliente.saldo} 
            onChange={(e) => setEditarcliente({ ...Editarcliente, saldo: e.target.value })} 
          />
        </label>
        <label>
          Telefono:
          <input
            type="text"
            name="telefono"
            value={Editarcliente.telefono} 
            onChange={(e) => setEditarcliente({ ...Editarcliente, telefono: e.target.value })} 
          />
        </label>
        <label>
          Sexo:
          <input
            type="text"
            name="sexo"// cambiar por opciones
            value={Editarcliente.sexo} 
            onChange={(e) => setEditarcliente({ ...Editarcliente, sexo: e.target.value })} 
          />
        </label>
        <label>
          Fecha de Nacimiento:
          <input
            type="date" // cambiar por fecha
            name="fecha_nacimiento"
            value={Editarcliente.fecha_nacimiento} 
            onChange={(e) => setEditarcliente({ ...Editarcliente, fecha_nacimiento: e.target.value })} 
          />
        </label>
        
  
        <button type="submit">Guardar Cambios</button>
      </form>
  
      <Link to='/clientes'>
        <button className="btn btn-secondary btn-lg">Volver</button>
      </Link>
    </>
  );
  
};
