
const TablaClientes = ({ clientes, cliente }) => {
    return (
      <div className="container">
        <table className="table table-hover">
          <thead className="table-success">
            <tr>
              <th>ID</th>
              <th>Nombres</th>
              <th>Apellidos</th>
              <th>Email</th>
              <th>Telefono</th>
              <th>saldo</th>
              <th>Fecha Nacimiento</th>
              <th>Domicilio</th>
              <th>Sexo</th>
              {/* falta acomodar */}
            </tr>
          </thead>
          <tbody>
            {clientes.map((al) => (
              <tr key={al.id_cliente} onDoubleClick={() => {cliente(al)}
              }>
                <td>{al.id_cliente}</td>
                <td>{al.nombre}</td>
                <td>{al.apellido}</td>
                <td>{al.email}</td>
                <td>{al.telefono}</td>
                <td>{al.saldo}</td>
                <td>{al.fecha_nacimiento}</td>
                <td>{al.domicilio}</td>
                <td>{al.sexo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default TablaClientes;
  