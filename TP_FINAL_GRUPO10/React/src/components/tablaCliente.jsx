
const TablaClientes = ({ clientes, cliente }) => {
    return (
      <div className="container">
        <table className="table table-hover">
          <thead className="table-success">
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Email</th>
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default TablaClientes;
  