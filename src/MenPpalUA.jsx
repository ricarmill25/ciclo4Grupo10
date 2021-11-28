import './css/MenuPrincipalUI.css';
import { Link} from "react-router-dom";
import BtnSesion from "./Components/Btn/BtnCerrarSesion";

function MenPpalUA() {
  return (
<main className="container py-5">
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

  <div className="row">

  <div className="col-sm-6 col-lg-4 mb-4">
      <Link to="/CrudusuariosUA" className="skip-link">
        <div className="card">
          <img width="100%" height="200" src="/images/gestionar_usuarios.png"/>
          <div className="card-body">
            <h5 className="card-title">Registrar Usuarios</h5>
            <p className="card-text text-dark">¿Permite crear Usuarios Internos de la aplicacion.
            </p>
          </div>
        </div>
      </Link>
    </div>

    <div className="col-sm-6 col-lg-4 mb-4">
      <Link to="/CreacionConsorcioUA" className="skip-link">
        <div className="card">
          <img width="100%" height="200" src="/images/Consorcio 2.jpeg"/>
          <div className="card-body">
            <h5 className="card-title">Crear Un Consorcio</h5>
            <p className="card-text text-dark">¿Deseas crear un nuevo consorcio? Ten en cuenta que se debe suministrar la información necesaria y de esta manera nos ayudas a expandir nuestra plataforma.
            </p>
          </div>
        </div>
      </Link>
    </div>
    <div className="col-sm-6 col-lg-4 mb-4">
      <Link to="/RealizarCobrosUA" className="skip-link">
        <div className="card">
          <img width="100%" height="200" src="/images/Cobros.jpeg"/>

          <div className="card-body">
            <h5 className="card-title">Realizar Cobros</h5>
            <p className="card-text text-dark">¿Deseas realizar el cobro de un vehículo? Ten en cuenta las recomendaciones por categorías de cada vahículo ;)</p>
          </div>
        </div>
      </Link>
    </div>
    <div className="col-sm-6 col-lg-4 mb-4">
      <Link to="/RealizarRegargasUA" className="skip-link">
        <div className="card">
          <img width="100%" height="200" src="/images/Recargar.jpeg"/>
          
          <div className="card-body">
            <h5 className="card-title">Recargar Tarjeta FRID</h5>
            <p className="card-text text-dark">¿Deseas Recargar tu tarjeta FRID? Cónoce nuestra funcionalidad de pagos, ten en cuenta que se debe suministrar informaación correcta y precisa en los pagos.</p>
          </div>
        </div>
      </Link>
    </div>
    <div className="col-sm-6 col-lg-4 mb-4">
      <Link to="/CreacionPeajeUA" className="skip-link">
        <div className="card">
          <img width="100%" height="200" src="/images/Peaje5.jpeg"/>
          
          <div className="card-body">
            <h5 className="card-title">Crear Un Peaje</h5>
            <p className="card-text text-dark">¿Deseas crear un nuevo Peaje? Debes tener en cuenta el listado de los Consorcios que se encuentran disponible, se debe seleccionar el consorcio y completar el formulario</p>
          </div>
        </div>
      </Link>
    </div>
    <div className="col-sm-6 col-lg-4 mb-4">
      <Link to="/ReportesUA" className="skip-link">
        <div className="card">
          <img width="100%" height="200" src="/images/ReportesDash.png"/>
          
          <div className="card-body">
            <h5 className="card-title">Reportes De Usuario</h5>
            <p className="card-text text-dark">¿Deseas Averiguar tus movimientos y Reportes en tu cuenta de Usuario? Puedes interactuar con los distintos diagramas y reportes de moviminetos que brindamos para ti, recuerda seleccionar tu tarjeta.</p>
          </div>
        </div>  
      </Link>
    </div>
  </div>

</main>
  );
}

export default MenPpalUA;
