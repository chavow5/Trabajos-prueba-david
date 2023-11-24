import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import TablaTransacciones  from '../../components/tablaTransaccion';

export const Transacciones = () => {
  const [transacciones, settransacciones] = useState([]);
  const [transaccion,settransaccion] = useState()
 
  const obtenertransacciones = async () => {
    const response = await fetch("http://localhost:3000/transacciones");
    const data = await response.json();
    settransacciones(data);
  };
 
  const handletransaccion = (transaccion) => {
    settransaccion(transaccion)
    console.log(transaccion)
  }
 const borrartransaccion = async () => {
    if (window.confirm("Â¿Desea eliminar a esta transaccion?")) {
      const res = await fetch(`http://localhost:3000/transacciones/${transaccion.id_transaccion}`, {
        method: "DELETE",
      });

      if (res.ok) {
        obtenertransacciones()
      } else {
        console.log("Fallo al eliminar la transaccion");
      }
    }
  };

  useEffect(() => {
    obtenertransacciones();
  }, []);
  return (
    <>
      <TablaTransacciones transacciones={transacciones} transaccion={handletransaccion}></TablaTransacciones>
      <Link to={'/transacciones/agregar'}>
        <button className="btn btn-dark">Agregar transaccion</button>
      </Link>
      
      {transacciones &&< div className="text-center">      
        <h2>{transacciones.id_transaccion} {transacciones.id_Cuenta_Origen} {transacciones.id_cuenta_destino}{transacciones.fecha}{transacciones.monto}{transacciones.descripcion}</h2>
        <div >
          <button className="btn btn-dark" onClick={
            borrartransaccion
          }>Eliminar Trasferencia</button>
        </div>
      </div>}


    </>
  )
};