const TablaUsuarios = (props) => 

{
  const {Usuario} = props;
  return (
      <table className="table table-striped table-hover table-bordered">
        <thead>
          <tr className="table-dark">
            <th scope="col">Cedula</th>
            <th scope="col">Nombre</th>
             <th scope="col">Apellidos</th>
            <th scope="col">Celular</th>
            <th scope="col">Usuario</th>
            <th scope="col">Perfil</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody className="table-light">
        {Usuario.map((Usuario) =>{
          return<tr><th>{Usuario.cedula}</th>
          <td>{Usuario.nombre}</td>
           <td>{Usuario.apellidos}</td>
          <td>{Usuario.celular}</td>
          <td>{Usuario.usuario}</td>
          <td>{Usuario.rol}</td>
          
             <td><button type="button" className="btn btn-primary">Modificar</button>
                        <button type="button" className="btn btn-danger">Eliminar</button>
                    </td> 
          </tr>
                          })}
        </tbody>
      </table>
  );
}



export default TablaUsuarios;