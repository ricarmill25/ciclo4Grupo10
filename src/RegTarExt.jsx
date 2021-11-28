

import './css/MenuPrincipalUI.css';
import BtnSesion from './Components/Btn/BtnCerrarSesion';
// import BtnRegresarMenu from './Components/Btn/BtnRegresarMenu';
import MenUsuario from "./Components/Menu/MenUsrExt";


function RegTarExt() {
  
  return (
    
    <div>
    <header>
        <nav
          className="navbar navbar-expand-md navbar-dark fixed-top bg-dark"
          align="up"
        >
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img
                className="logo"
                src="/images/IconoLogo2.png"
                alt="index.html"
                height="50"
              />
              EASY PASS
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarCollapse">
              <MenUsuario />
              {/* <form className="d-flex">
                <button className="btn btn-warning" type="submit" href="/">
                  Cerrar Sesión
                </button>
              </form> */}
              <BtnSesion />
              
            </div>
          </div>
        </nav>
      </header>

      {/* Add New User Modal Start */}

  {/* Add New User Modal End */}

  {/* Edit User Modal Start */}
  <hr className="my-5"/>

  <div className="modal fade" tabindex="-1" id="editUserModal">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">

        <div className="modal-body">
          <form id="edit-user-form" className="p-2" novalidate>
            <input type="hidden" name="id" id="id"/>
            <div className="row mb-3 gx-3">

            <div className="col">
              <input type="number" name="ltarjeta" id="ltarjeta" className="form-control form-control-lg" placeholder="Número de tarjeta" required/>
              <div className="invalid-feedback">Número de tarjeta</div>
              </div>
            </div>

            <div className="col">
                <input type="text" name="lplaca" id="lplaca" className="form-control form-control-lg" placeholder="Placa" required/>
                <div className="invalid-feedback">Placa del vehiculo</div>
                </div>
            

          </form>
        </div>
      </div>
    </div>
  </div>
  {/* Edit User Modal End */}
  <div className="container">
    
    <div className="d-flex justify-content-between align-items-center">
        <h4 className="mb-4 text_principal"> Todos los registros</h4>
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="No.tarjeta o placa" aria-label="Search"/>
          <button className="btn btn-warning" type="submit">Buscar</button>
        </form>
        <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">Registrar nueva tarjeta</button>
    </div>


     <div className="row">
      <div className="col-lg-12">
        <div className="table-responsive">
          <table className="table table-light table-striped table-bordered text-center">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Número de tarjeta</th>
                <th>placa</th>
                <th>Acciones</th>

              </tr>
            </thead>
            <tbody className="table-light">
                <tr>
                    <th scope="row">1</th>
                    <td>123456789</td>
                    <td>HJI896</td>
                    <td>
                        <button type="button" className="btn btn-primary">Modificar</button>
                        <button type="button" className="btn btn-danger">Eliminar</button>
                    </td>

                </tr>

                <tr>
                    <th scope="row">1</th>
                    <td>123456789</td>
                    <td>HJI896</td>
                    <td>
                        
                        <button type="button" className="btn btn-primary">Modificar</button>
                        <button type="button" className="btn btn-danger">Eliminar</button>
                    </td>
   
                </tr>

                <tr>
                    <th scope="row">1</th>
                    <td>123456789</td>
                    <td>HJI896</td>
                    <td>
                        
                        <button type="button" className="btn btn-primary">Modificar</button>
                        <button type="button" className="btn btn-danger">Eliminar</button>
                    </td>
                </tr>

                <tr>
                    <th scope="row">1</th>
                      <td>123456789</td>
                    <td>HJI896</td>
                    <td>
                        
                        <button type="button" className="btn btn-primary">Modificar</button>
                        <button type="button" className="btn btn-danger">Eliminar</button>
                    </td>
                </tr>

                <tr>
                    <th scope="row">1</th>
                    <td>123456789</td>
                    <td>HJI896</td>
                    <td>
                        <button type="button" className="btn btn-primary">Modificar</button>
                        <button type="button" className="btn btn-danger">Eliminar</button>
                    </td>
                </tr>

            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
    {/* Modal */}
    <div className="modal fade modal-md" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Registrar nueva tarjeta</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form/>
             
                <label for="tarjetavehiculo" className="form-label">No.Tarjeta</label>
                <input type="number" id="tarjetavehiculo" className="form-control" aria-describedby="passwordHelpBlock"/>

                <label for="inputplaca" className="form-label">Placa</label>
                <input type="text" className="form-control" id="inputplaca"/>
           
              
                <label for="catvehiculo" className="form-label">Categoria del vehiculo</label>
                <select className="form-select form-select-lg" aria-label=".form-select-lg example">
                  <option selected>Seleccione</option>
                  <option value="1">1 </option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
             
              
            
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-warning" data-bs-dismiss="modal">Cerrar</button>
            <button type="button" className="btn btn-success">Registrar</button>
          </div>
        </div>
      </div>
    </div>

    
    </div>

  );
}

export default RegTarExt;
