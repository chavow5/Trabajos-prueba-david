import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import TablaClientes  from '../../components/tablaCliente';

export const Clientes = () => {
  const [clientes, setClientes] = useState([]);
  const [cliente,setCliente] = useState()

// mostrar lista de clientes
  const obtenerClientes = async () => {
    const response = await fetch("http://localhost:3000/clientes");
    const data = await response.json();
    setClientes(data);
  };

  const handleCliente = (cliente) => {
    setCliente(cliente)
    console.log(cliente)
  }
  useEffect(() => {
    obtenerClientes();
  }, []);

  // borrar clientes
   const borrarClientes = async () => {
    if (window.confirm("¿Desea eliminar al Cliente?")) {
      const res = await fetch(`http://localhost:3000/clientes/${clientes.id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        obtenerClientes()
      } else {
        console.log("Fallo al eliminar el Cliente");
      }
    }
  };

  
  return (
    <>   
      <TablaClientes clientes={clientes} cliente={handleCliente}></TablaClientes>
      <Link to={'/clientes/agregar'}>
        <button className="btn btn-dark">Agregar Cliente</button>
      </Link>
      
      <Link to={`/clientes/editarclientes`}>
        <button className="btn btn-dark">Editar Cliente</button>
      </Link>


      <button className="btn btn-dark" onClick={ borrarClientes}>Eliminar Cliente</button>
      {cliente &&<div className="text-center">      
        <h2>{cliente.id} {cliente.apellido} {cliente.nombre} </h2>
      </div>}


    </>
  )
};