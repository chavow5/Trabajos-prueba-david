import { useState } from "react";
import { Link } from "react-router-dom"

export const NuevaTransaccion = () => {
    const [NuevaTransacciones, setNuevaTransaccion] = useState({
      nombre: undefined ,
      apellido: undefined,
      dni:undefined,
      direccion:undefined,
    })

    const NuevaTransaccion = async () =>{
        const res = await fetch("http://localhost:3000/profesor", {
          method:"POST",
          headers: {"Content-Type" : "application/json"},
          body: JSON.stringify({transaccion: NuevaTransaccion,}),
        });
        if (res.ok) {
          alert("transaccion creada");
        } else{
          alert("Fallo al crear transaccion nuevo")
          console.log("Fallo al crear una transaccion");
        }
      }
    return (
        <>
           <h1>Ingrese una nueva Transferencia</h1>
            <form onSubmit={NuevaTransacciones}>
                <div className="row">
                    <div className="col">
                        <label htmlFor="Cuenta Origen">Cuenta Origen</label>
                        <input type="text"
                        className="form-control"
                        value={NuevaTransaccion.id_cuenta_origen}
                        onChange={(e)=>{setNuevaTransaccion({...NuevaTransaccion, id_cuenta_origen:e.target.value})}}
                        />
                    </div>
                    <div className="col">
                        <label htmlFor="Cuenta Destino">Cuenta Destino</label>
                        <input type="text"
                        className="form-control"
                        value={NuevaTransaccion.id_cuenta_destino}
                        onChange={(e)=>{setNuevaTransaccion({...NuevaTransaccion, id_cuenta_destino:e.target.value})}}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="fecha">fecha </label>
                    <input
                    className="form-control"
                    value={NuevaTransaccion.fecha}
                    onChange={(e)=>{setNuevoProfesor({...NuevaTransaccion, fecha:e.target.value})}}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="direccion">monto</label>
                    <input type="text"
                    className="form-control"
                    value={NuevaTransaccion.monto}
                    onChange={(e)=>{setNuevaTransaccion({...NuevaTransaccion, monto:e.target.value})}}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="direccion">Descripcion</label>
                    <input type="text"
                    className="form-control"
                    value={NuevaTransaccion.direccion}
                    onChange={(e)=>{setNuevaTransaccion({...NuevaTransaccion, descripcion:e.target.value})}}
                    />
                </div>
                <button enabled={!NuevaTransaccion.id_cuenta_origen ||
                    !NuevaTransaccion.id_cuenta_destino  ||
                    !NuevaTransaccion.fecha  ||
                    !NuevaTransaccion.monto ||
                    !NuevaTransaccion.descripcion
                    } type="submit">Agregar</button>
            </form>
        
            
            <Link to='/transacciones'>
                <button className="btn btn-secondary btn-lg">regresar</button>
            </Link>
        </>
    )
}