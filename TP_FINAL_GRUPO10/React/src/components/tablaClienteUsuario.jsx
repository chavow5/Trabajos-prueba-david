
const TablaClientes = ({ clientesUsuarios, clienteUsuario }) => {
    return (
      <div className="container">
        <table className="table table-hover">
          <thead className="table-success">
            <tr>
              {/* TABLA USUARIOS */}
              {/* <th>ID</th> */}
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Email</th>
              {/* <th>Telefono</th> */}
              <th>saldo</th>
              {/* <th>Fecha Nacimiento</th> */}
              {/* <th>Domicilio</th> */}
              {/* <th>Sexo</th> */}
              {/* falta acomodar */}
            </tr>
          </thead>
          <tbody>
            {clientesUsuarios.map((al) => (
              <tr key={al.id_cliente} onDoubleClick={() => {clienteUsuario(al)}
              }>
                {/* <td>{al.id_cliente}</td> */}
                <td>{al.nombre}</td>
                <td>{al.apellido}</td>
                <td>{al.email}</td>
                {/* <td>{al.telefono}</td> */}
                <td>{al.saldo}</td>
                {/* <td>{al.fecha_nacimiento}</td> */}
                {/* <td>{al.domicilio}</td> */}
                {/* <td>{al.sexo}</td> */}
                <td>
                <button onClick={() => mostrarDetalles(al)}>Mostrar Detalles</button>
              </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default TablaClientes;
  