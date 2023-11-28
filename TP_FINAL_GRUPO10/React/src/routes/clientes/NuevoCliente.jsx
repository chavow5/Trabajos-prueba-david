import { useState } from "react";
import { Link } from "react-router-dom"

// agregar nuevos clientes

export const NuevoCliente = () => {
    const [nuevoCliente, setNuevoCliente] = useState({
      nombre: null ,
      apellido: null,
      email: null,
      contraseña: null,
      saldo: null ,
      telefono: null, 
      sexo:null,
      fecha_nacimiento: null
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
                <div className="form-group">
                    <label htmlFor="telefono">Teléfono</label>
                    <input
                type="text"
                className="form-control"
                value={nuevoCliente.telefono}
                onChange={(e) => {
                    setNuevoCliente({ ...nuevoCliente, telefono: e.target.value })
                }}
                 />
             </div>

            <div className="form-group">
                <label htmlFor="saldo">Saldo</label>
                <input
                    type="text"
                    className="form-control"
                  value={nuevoCliente.saldo}
                  onChange={(e) => {
                      setNuevoCliente({ ...nuevoCliente, saldo: e.target.value })
                  }}
              />
          </div>

          <div className="form-group">
              <label htmlFor="fechaNacimiento">Fecha de Nacimiento</label>
              <input
                  type="date"
                  className="form-control"
                  value={nuevoCliente.fechaNacimiento}
                  onChange={(e) => {
                      setNuevoCliente({ ...nuevoCliente, fechaNacimiento: e.target.value })
                  }}
              />
          </div>

          <div className="form-group">
              <label htmlFor="domicilio">Domicilio</label>
              <input
                  type="text"
                  className="form-control"
                  value={nuevoCliente.domicilio}
                  onChange={(e) => {
                      setNuevoCliente({ ...nuevoCliente, domicilio: e.target.value })
                  }}
              />
          </div>

          <div className="form-group">
              <label htmlFor="sexo">Sexo</label>
              <select
                  className="form-control"
                  value={nuevoCliente.sexo}
                  onChange={(e) => {
                      setNuevoCliente({ ...nuevoCliente, sexo: e.target.value })
                  }}
                  >
                  <option value="M">Masculino</option>
                  <option value="F">Femenino</option>
                  <option value="otro">Otro</option>
              </select>
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