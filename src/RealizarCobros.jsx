import './css/form-validation.css';
import { Link} from "react-router-dom";
import BtnSesion from "./Components/Btn/BtnCerrarSesion";

function RealizarCobros() {
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
              <a className="nav-link" href="index.html">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="Peajes.html">Plataforma</a>
            </li>
            <li className="nav-item">
              <Link to="/MenuPrincipalUI" className="nav-link">
                Menu Principal
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/CreacionConsorcio" className="nav-link">
                Consorcios
              </Link>
            </li>            
            <li className="nav-item">
              <Link to="/CreacionPeaje" className="nav-link">
                Peajes
              </Link>            </li>
            <li className="nav-item">
              <Link to="/RealizarCobros" className="nav-link">
                Realizar Cobros
              </Link>            
            </li>
            <li className="nav-item">
              <Link to="/RealizarRegargasUI" className="nav-link">
                Realizar Recargas
              </Link>             </li>
            <li className="nav-item">
              <Link to="/ReportesUI" className="nav-link">
                Reportes
              </Link>             
            </li>
          </ul>
          {/* <form className="d-flex">
                <button className="btn btn-warning" type="submit" href="/">
                  Cerrar Sesi??n
                </button>
              </form> */}
              <BtnSesion />
        </div>
      </div>
    </nav>
  </header> 
  <div className="b-example-divider"></div>

    <div className="container">
        <div className="py-5 text-center">
          <img className="d-block mx-auto mb-4" src="/images/IconoLogo2.png" alt="" width="72" height="57"/>
          <h2>Realiza tus pagos Easy Pass!</h2>
          <p className="lead">Bienvenido al M??dulo de cobros y pagos al Usuario, recuerda tener en cuenta la placa del veh??culo, su categor??a correspondiente y finalmente el m??todo de pago que respecta al usuario.</p>
        </div>

        <div className="row g-5">
          <div className="col-md-5 col-lg-4 order-md-last">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-primary">Categor??as</span>
              <span className="badge bg-primary rounded-pill">5</span>
            </h4>
            <ul className="list-group mb-3">
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0">Categor??a 1</h6>
                  <small className="text-muted">Autom??viles, camperos, camionetas, microbuses con ejes de llanta sencilla</small>
                </div>
                <span className="text-muted">$5800</span>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0">Categor??a 2</h6>
                  <small className="text-muted">Buses, busetas, microbuses con eje trasero de doble llanta y camiones de dos ejes</small>
                </div>
                <span className="text-muted">$8600</span>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0">Categor??a 3</h6>
                  <small className="text-muted">Veh??culos de pasajeros y de carga de tres y cuatro ejes</small>
                </div>
                <span className="text-muted">$10200</span>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0">Categor??a 4</h6>
                  <small className="text-muted">Veh??culos de carga de cinco ejes</small>
                </div>
                <span className="text-muted">$12500</span>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0">Categor??a 5</h6>
                  <small className="text-muted">Veh??culos de carga de seis ejes</small>
                </div>
                <span className="text-muted">$12500</span>
              </li>
            </ul>

            <div className="col-md">
              <div className="form-floating">
                <select className="form-select" id="floatingSelectGrid" aria-label="Floating label select example">
                  <option selected>Peaje ABC</option>
                  <option value="1">Peaje DEF</option>
                  <option value="2">Peaje GHI</option>
                  <option value="3">Peaje JKL</option>
                </select>
                <label for="floatingSelectGrid">Digite porfavor el Peaje del cobro</label>
              </div>
            </div>
          </div>
          <div className="col-md-7 col-lg-8">
            <h4 className="mb-3">Ingrese los Datos</h4>
            <form className="needs-validation" novalidate>
              <div className="row g-3">
                <div className="col-sm-6">
                  <label for="firstName" className="form-label">Nombre del Usuario</label>
                  <input type="text" className="form-control" id="firstName" placeholder="" value="" required/>
                  <div className="invalid-feedback">
                    Se requiere la validaci??n del Nombre del Usuario.
                  </div>
                </div>

                <div className="col-sm-6">
                  <label for="lastName" className="form-label">Apellidos del Usuario</label>
                  <input type="text" className="form-control" id="lastName" placeholder="" value="" required/>
                  <div className="invalid-feedback">
                    Se requiere la validaci??n del Apellido del Usuario.
                  </div>
                </div>
                <div className="col-sm-6">
                  <label for="firstName" className="form-label">Placa del Veh??culo</label>
                  <input type="text" className="form-control" id="firstName" placeholder="" value="" required/>
                  <div className="invalid-feedback">
                    Se requiere la validaci??n de la placa del Veh??culo.
                  </div>
                </div>

                <div className="col-sm-6">
                  <label for="lastName" className="form-label">Identificaci??n (C.C)</label>
                  <input type="text" className="form-control" id="lastName" placeholder="" value="" required/>
                  <div className="invalid-feedback">
                    Se requiere la validaci??n de la c??dula del Usuario.
                  </div>
                </div>

                <div className="col-12">
                  <label for="email" className="form-label">Email <span className="text-muted">(Optional)</span></label>
                  <input type="email" className="form-control" id="email" placeholder="EasyPassHuila@Uninorte.edu.co"/>
                  <div className="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                  </div>
                </div>
                <div className="col-md-4">
                  <label for="state" className="form-label">Movimiento del Usuario</label>
                  <select className="form-select" id="state" required>
                    <option value="">Saliendo</option>
                    <option>Entrando</option>
                  </select>
                  <div className="invalid-feedback">
                    Please provide a valid move.
                  </div>
                </div>

                <div className="col-md-5">
                  <label for="country" className="form-label">Categor??a del Veh??culo</label>
                  <select className="form-select" id="country" required>
                    <option value="">Categor??a 1</option>
                    <option>Categor??a 2</option>
                    <option>Categor??a 3</option>
                    <option>Categor??a 4</option>
                    <option>Categor??a 5</option>
                  </select>
                  <div className="invalid-feedback">
                    Please select a valid Category.
                  </div>
                </div>


              </div>


              <hr className="my-4"/>

              <h4 className="mb-3">M??todo de Pago</h4>

              <div className="my-3">
                <div className="form-check">
                  <input id="credit" name="paymentMethod" type="radio" className="form-check-input" checked required/>
                  <label className="form-check-label" for="credit">Efectivo</label>
                </div>
                <div className="form-check">
                  <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required/>
                  <label className="form-check-label" for="debit">Tarjeta RFID</label>
                </div>
              </div>

              <hr className="my-4"/>

              <div className="row gy-3">
                <div className="col-md-6">
                  <label for="cc-name" className="form-label">Digite el n??mero de la Tarjeta</label>
                  <input type="text" className="form-control" id="cc-name" placeholder="" required/>
                  <small className="text-muted">Escribir todos los d??gitos de la tarjeta.</small>
                  <div className="invalid-feedback">
                    Name on card is required
                  </div>
                </div>

                <hr className="my-4"/>

                <div className="col-md-6">
                  <label for="cc-number" className="form-label">Valor a pagar $</label>
                  <input type="text" className="form-control" id="cc-number" placeholder="" required/>
                  <div className="invalid-feedback">
                    Credit card number is required
                  </div>
                </div>

                <div className="col-md-6">
                  <label for="cc-expiration" className="form-label">Se recibe la suma de $</label>
                  <input type="text" className="form-control" id="cc-expiration" placeholder="" required/>
                  <div className="invalid-feedback">
                    Expiration date required
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

              <button className="w-100 btn btn-primary btn-lg" type="submit">Continuar con el Pago</button>
            </form>
          </div>
        </div>

      <footer className="my-5 pt-5 text-muted text-center text-small">
        <p className="mb-1">&copy; 2021 EasyPass LTDA</p>
      </footer>
  </div>

</main>
  );
}

export default RealizarCobros;
