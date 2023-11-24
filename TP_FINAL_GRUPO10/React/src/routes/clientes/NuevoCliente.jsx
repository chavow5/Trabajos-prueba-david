import { useState } from "react";
import { Link } from "react-router-dom"

// agregar nuevos clientes

export const NuevoCliente = () => {
    const [nuevoCliente, setNuevoCliente] = useState({
      nombre: undefined ,
      apellido: undefined,
      email:undefined,
    })

    const subirCliente = async () =>{
        const res = await fetch("http://localhost:3000/clientes", {
          method:"POST",
          headers: {"Content-Type" : "application/json"},
          body: JSON.stringify({clientes: nuevoCliente,}),
        });
        if (res.ok) {
          alert("Cliente creado con exito");
          console.log("Cliente creado");
        } else{
          alert("Fallo al crear cliente nuevo, prueba de vuelta")
          console.log("Fallo al crear cliente nuevo");
        }
      }
    return (
        <>
           <h1>Ingrese un nuevo cliente</h1>
            <form onSubmit={subirCliente}>
                <div className="row">
                    <div className="col">
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text"
                        className="form-control"
                        value={nuevoCliente.nombre}
                        onChange={(e)=>{setNuevoCliente({...nuevoCliente, nombre:e.target.value})}}
                        />
                    </div>
                    <div className="col">
                        <label htmlFor="apellido">Apellido</label>
                        <input type="text"
                        className="form-control"
                        value={nuevoCliente.apellido}
                        onChange={(e)=>{setNuevoCliente({...nuevoCliente, apellido:e.target.value})}}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                    className="form-control"
                    value={nuevoCliente.email}
                    onChange={(e)=>{setNuevoCliente({...nuevoCliente, email:e.target.value})}}
                    />
                </div>
                
                <button disabled={!nuevoCliente.nombre ||
                    !nuevoCliente.apellido  ||
                    !nuevoCliente.email}
                    type="submit">Agregar Cliente </button>
            </form>
            <Link to='/clientes'>
                <button className="btn btn-secondary btn-lg">Volver</button>
            </Link>
        </>
    )
}