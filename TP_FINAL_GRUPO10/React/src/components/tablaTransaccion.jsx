
const TablaTransacciones = ({ transacciones, transaccion }) => {
    return (
      <div className="container">
        <table className="table table-hover">
          <thead className="table-success">
            <tr>
              {/* administrador */}
              <th>ID transaccion</th>
              <th>Cuenta Origen</th>
              <th>Cuenta Destino</th>
              <th>Monto</th>
              <th>Fecha</th>
              <th>Descripcion</th>
            </tr>
          </thead>
          <tbody>
            {transacciones.map((al) => (
              <tr key={al.id_transaccion} onDoubleClick={() => {transaccion(al)}
              }>
                {/* <td>{al.id_transaccion}</td> */}
                <td>{al.id_cuenta_origen}</td>
                <td>{al.id_cuenta_destino}</td>
                <td>{al.fecha}</td>
                <td>{al.monto}</td>
                <td>{al.descripcion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default TablaTransacciones;