

import './css/MenuPrincipalUI.css';
import BtnSesion from "./Components/Btn/BtnCerrarSesion";
import { Link} from "react-router-dom";

function RegistroUA() {
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
 <div>


    <div ClassName="container" align="center">
          <div ClassName="row justify-content-center pt-5 mt-5 mr-1"> 
              <div>
              <form className="row g-4 formulario">
            {/* Encabezado del formulario */}
            <div class="form-group text-center">
              <h1 class="text-login">FORMULARIO DE REGISTRO</h1>
            </div>
            
            {/* Campos */}
            <div class="col-md-6">
              <label for="inputnombre" class="form-label">Nombre</label>
              <input type="text" class="form-control" id="inputnombre"/>
            </div>
            <div class="col-md-6">
              <label for="inputapellido" class="form-label">Apellido</label>
              <input type="text" class="form-control" id="inputapellido"/>
            </div>

            <div class="col-md-6">
              <label for="inputcedula" class="form-label">Cedula</label>
              <input type="number" class="form-control" id="inputcedula"/>
            </div>

            <div class="col-md-6">
              <label for="inputcedula" class="form-label">Sexo</label>
              <select class="form-select form-select-lg" aria-label=".form-select-lg example">
                <option selected>Seleccione el sexo</option>
                <option value="1">Mujer</option>
                <option value="2">Hombre</option>
              </select>
            </div>

            <div class="col-md-6">
              <label for="inputEmail4" class="form-label">Email</label>
              <input type="email" class="form-control" id="inputEmail4"/>
            </div>
            <div class="col-md-6">
              <label for="inputPassword4" class="form-label">Password</label>
              <input type="password" class="form-control" id="inputPassword4"/>
            </div>
            
            {/* Boton de registrarse */}
            <div class="form-group d-md-flex justify-content-md-center">
              <input type="submit" class="btn btn btn-dark ingresar" value="REGISTRAR"/>

            
        </div>
        </form>
           
               
                  </div>

              </div> 

          </div>

      </div>
      <div>
      <div class="b-example-divider"></div>
    </div>
    
    </div>




  );
}

export default RegistroUA;
