import './css/MenuPrincipalUI.css';
import { Link} from "react-router-dom";
import BtnSesion from "./Components/Btn/BtnCerrarSesion";

function CrudusuariosUA() {
  return (
    <div>
    <header>
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark" align="up">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img className="logo" src="/images/IconoLogo2.png" alt="index.html" height="50"/>EASY PASS
        </a> 
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarCollapse">
        <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <a className="nav-link" href="/">Inicio</a>
            </li>
            
            <li className="nav-item">
              <Link to="/MenPpalUA" className="nav-link">
                Menu Principal
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/CrudUsuariosUA" className="nav-link">
                Gestión de Usuarios
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/CreacionConsorcioUA" className="nav-link">
                Consorcios
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/CreacionPeajeUA" className="nav-link">
                Peajes
              </Link>            </li>
            <li className="nav-item">
              <Link to="/RealizarCobrosUA" className="nav-link">
                Realizar Cobros
              </Link>            
            </li>
            <li className="nav-item">
              <Link to="/RealizarRegargasUA" className="nav-link">
                Realizar Recargas
              </Link>             </li>
            <li className="nav-item">
              <Link to="/ReportesUA" className="nav-link">
                Reportes
              </Link>             
            </li>
          </ul>
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
  <hr className="my-5"/>
      <div className="modal fade" tabindex="-1" id="editUserModal">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">

        <div className="modal-body">
          <form id="edit-user-form" className="p-2" novalidate>
            <input type="hidden" name="id" id="id"/>
            <div className="row mb-3 gx-3">

            <div className="col">
              <input type="text" name="unombre" id="unombre" className="form-control form-control-lg" placeholder="Nombre de usuario" required/>
              <div className="invalid-feedback">Nombre de Usuario</div>
              </div>
            

            <div className="col">
                <input type="text" name="uapellido" id="uapellido" className="form-control form-control-lg" placeholder="Apellido del Usuario" required/>
                <div className="invalid-feedback">Apellido del Usuario</div>
                </div>
            </div>

            <div className="col">
              <input type="number" name="ucedula" id="ucedula" className="form-control form-control-lg" placeholder="Cedula del Usuario" required/>
              <div className="invalid-feedback">Cedula del usuario</div>
              </div>
            

            <div className="col">
              <input type="number" name="ucelular" id="ucelular" className="form-control form-control-lg" placeholder="Celular del Usuario" required/>
              <div className="invalid-feedback">Celular del usuario</div>
              </div>
            

            <div className="col">
              <input type="email" name="uemail" id="uemail" className="form-control form-control-lg" placeholder="Correo del Usuario" required/>
              <div className="invalid-feedback">Correo del usuario</div>
            </div>

            <div className="col">
              <input type="text" name="ucontrasena" id="ucontrasena" className="form-control form-control-lg" placeholder="Contraseña" required/>
              <div className="invalid-feedback">Contraseña del usuario</div>
            

            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* Edit User Modal End */}
  <div className="container">
    
    <div className="d-flex justify-content-between align-items-center">
        <h4 className="mb-4 text_principal"> Todos los usuarios</h4>
        <form className="d-flex">
                <select className="form-select form-select-lg" aria-label=".form-select-lg example">
                  <option selected>Seleccione</option>
                  <option value="1">Nombre</option>
                  <option value="2">Cedula</option>
                  <option value="3">Correo</option>
                </select>
          <input className="form-control me-2" type="search" placeholder="" aria-label="Search"/>
          <button className="btn btn-warning" type="submit">Buscar</button>
        </form>
        <button type="button" className="btn btn-success">
          <a className="boton_registrarUsuario" href="RegistroUA">Registrar usuario</a>
        </button>
        
    </div>
     <div className="row">
      <div className="col-lg-12">
        <div className="table-responsive">
          <table className="table table-light table-striped table-bordered text-center">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Cedula</th>
                <th>Celular</th>
                <th>Correo</th>
                <th>Contraseña</th>
                <th>Acciones</th>

              </tr>
            </thead>
            <tbody className="table-light">
                <tr>
                    <th scope="row">1</th>
                    <td>Alejandra</td>
                    <td>Gutierrez</td>
                    <td>114396369</td>
                    <td>316514968</td>
                    <td>alejandra.medina@uninorte.edu.co</td>
                    <td>123456</td>
                    <td>
                        <button type="button" className="btn btn-primary">Modificar</button>
                        <button type="button" className="btn btn-danger">Eliminar</button>
                    </td>
                </tr>

                <tr>
                  <th scope="row">1</th>
                  <td>Alejandra</td>
                  <td>Gutierrez</td>
                  <td>114396369</td>
                  <td>316514968</td>
                  <td>alejandra.medina@uninorte.edu.co</td>
                  <td>123456</td>
                  <td>
                      <button type="button" className="btn btn-primary">Modificar</button>
                      <button type="button" className="btn btn-danger">Eliminar</button>
                  </td>
                </tr>

                <tr>
                  <th scope="row">1</th>
                  <td>Alejandra</td>
                  <td>Gutierrez</td>
                  <td>114396369</td>
                  <td>316514968</td>
                  <td>alejandra.medina@uninorte.edu.co</td>
                  <td>123456</td>
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
      </div>

  
  );
}

export default CrudusuariosUA;
