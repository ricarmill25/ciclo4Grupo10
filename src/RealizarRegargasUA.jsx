import './css/ModuloCash.css';
import { Link} from "react-router-dom";
import BtnSesion from "./Components/Btn/BtnCerrarSesion";

function RealizarRegargasUA() {
  return (
<main className="container py-5 backgroundCash">
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
  <div className="container">
          <main>
            <div className="py-5 text-center">
              <img className="d-block mx-auto mb-4" src="/images/dinero.png" alt="" width="72" height="57"/>
              <h2>Recargar Ahora Tu Tarjeta RFID De Easy Pass!</h2>
              <p className="lead">Bienvenido! Te invitamos a seguir con nuestra iniciativa de pagos con Tarjeta RFID, la cual te permitirá pagar sin muchas complicaciones y brindote un excelente servicio.</p>
            </div>
      
            <div className="row g-5">
              <div className="col-md-5 col-lg-4 order-md-last">
                <h4 className="d-flex justify-content-between align-items-center mb-3">
                  <span className="text-primary">Categorías</span>
                  <span className="badge bg-primary rounded-pill">5</span>
                </h4>
                <ul className="list-group mb-3">
                  <li className="list-group-item d-flex justify-content-between lh-sm">
                    <div>
                      <h6 className="my-0">Categoría 1</h6>
                      <small className="text-muted">Automóviles, camperos, camionetas, microbuses con ejes de llanta sencilla</small>
                    </div>
                    <span className="text-muted">$5800</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between lh-sm">
                    <div>
                      <h6 className="my-0">Categoría 2</h6>
                      <small className="text-muted">Buses, busetas, microbuses con eje trasero de doble llanta y camiones de dos ejes</small>
                    </div>
                    <span className="text-muted">$8600</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between lh-sm">
                    <div>
                      <h6 className="my-0">Categoría 3</h6>
                      <small className="text-muted">Vehículos de pasajeros y de carga de tres y cuatro ejes</small>
                    </div>
                    <span className="text-muted">$10200</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between lh-sm">
                    <div>
                      <h6 className="my-0">Categoría 4</h6>
                      <small className="text-muted">Vehículos de carga de cinco ejes</small>
                    </div>
                    <span className="text-muted">$12500</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between lh-sm">
                    <div>
                      <h6 className="my-0">Categoría 5</h6>
                      <small className="text-muted">Vehículos de carga de seis ejes</small>
                    </div>
                    <span className="text-muted">$12500</span>
                  </li>
                </ul>
      
              </div>
              <div className="col-md-7 col-lg-8">
                <h4 className="mb-3">Ingrese los Datos</h4>
                <form className="needs-validation" novalidate>
      
                  <hr className="my-4"/>
      
                  <div className="row gy-3">
                    <div className="col-md-6">
                      <label for="cc-name" className="form-label">Digite el número de la Tarjeta</label>
                      <input type="text" className="form-control" id="cc-name" placeholder="" required/>
                      <small className="text-muted">Escribir todos los dígitos de la tarjeta.</small>
                      <div className="invalid-feedback">
                        Name on card is required
                      </div>
                    </div>
      
                    <hr className="my-4"/>
      
                    <div className="col-md-6">
                      <label for="cc-number" className="form-label">¿Cuanto Desea Recargar?</label>
                      <input type="text" className="form-control" id="cc-number" placeholder="" required/>
                      <div className="invalid-feedback">
                        Peticion de Recarga
                      </div>
                    </div>
      
                    <div className="col-md-6">
                      <label for="cc-expiration" className="form-label">Se recibe la suma de $</label>
                      <input type="text" className="form-control" id="cc-expiration" placeholder="" required/>
                      <div className="invalid-feedback">
                        Dinero Recibido
                      </div>
                    </div>
      
                    <div className="col-md-4">
                      <label for="cc-cvv" className="form-label">Diferencia $</label>
                      <input type="text" className="form-control" id="cc-cvv" placeholder="" required/>
                      <div className="invalid-feedback">
                        Security code required
                      </div>
                    </div>
                  </div>
      
                  <hr className="my-4"/>
      
                  <button className="w-100 btn btn-success btn-lg" type="submit">Continuar con el Pago</button>
                </form>
              </div>
            </div>
          </main>
      
          <footer className="my-5 pt-5 text-muted text-center text-small">
            <p className="mb-1">&copy; 2021 EasyPass LTDA</p>
          </footer>
        </div>

</main>
  );
}

export default RealizarRegargasUA;
