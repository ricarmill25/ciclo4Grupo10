const TablaConsorcios = (props) => {
    const {Consorcio} = props;
    return (
        <table className="table table-striped table-hover table-bordered">
          <thead>
              <tr className="table-dark align-middle">
                <th scope="col">#</th>
                <th scope="col">Nombre Del Consorcio</th>
                <th scope="col">Creación</th>
                <th scope="col">Administrador</th>
                <th scope="col">Ciudad</th>
                <th scope="col">Descripción</th>
                <th scope="col">Relacionar</th>
              </tr>
          </thead>
          <tbody>
              {Consorcio.map((Consorcio) =>{
                  return<tr><th>{Consorcio.id}</th>
                  <td>{Consorcio.Consorcio}</td>
                  <td>{Consorcio.creacion}</td>
                  <td>{Consorcio.administrador}</td>
                  <td>{Consorcio.ciudad}</td>
                  <td>{Consorcio.descripcion}</td>
                  <td className="align-middle"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="45" height="35" fill="currentColor" className="bi bi-clipboard-check" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#ModalAfterPeaje">
                  <path fill-rule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                  <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
                  <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
                </svg></a></td>                  </tr>
                })}
          </tbody>
        </table>
    );
}


export default TablaConsorcios;