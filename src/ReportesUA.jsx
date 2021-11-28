import './css/MenuPrincipalUI.css';
import { Link} from "react-router-dom";
import BtnSesion from "./Components/Btn/BtnCerrarSesion";

function ReportesUA() {
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
  <main className="container py-5">
  <div className="input-group">
    <span className="input-group-text" id="basic-addon1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-credit-card" viewBox="0 0 16 16">
      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z"/>
      <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z"/>
    </svg></span>
    <input type="text" className="form-control" placeholder="Digite El Número De La Tarjeta A su disposición"  aria-label="Recipient's username" aria-describedby="button-addon2"/>
    <button className="btn btn-primary" type="button" id="button-addon2">Buscar</button>
  </div>
      <div className="container py-3">
      <table className="table table-light text-center">
        <thead className="table-dark  text-center">
          <tr className="table-dark">
            <th scope="col">#</th>
            <th scope="col">Número De Tarjeta</th>
            <th scope="col">Reportes</th>
          </tr>
        </thead>
        <tbody align="center">
          <tr>
            <th scope="row">1</th>
            <td>123456789</td>
            <td><button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModal"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-speedometer" viewBox="0 0 16 16">
              <path d="M8 2a.5.5 0 0 1 .5.5V4a.5.5 0 0 1-1 0V2.5A.5.5 0 0 1 8 2zM3.732 3.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 8a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 7.31A.91.91 0 1 0 8.85 8.569l3.434-4.297a.389.389 0 0 0-.029-.518z"/>
              <path fill-rule="evenodd" d="M6.664 15.889A8 8 0 1 1 9.336.11a8 8 0 0 1-2.672 15.78zm-4.665-4.283A11.945 11.945 0 0 1 8 10c2.186 0 4.236.585 6.001 1.606a7 7 0 1 0-12.002 0z"/>
            </svg> <b>Reportes</b></button></td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>123456789</td>
            <td><button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModal"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-speedometer" viewBox="0 0 16 16">
              <path d="M8 2a.5.5 0 0 1 .5.5V4a.5.5 0 0 1-1 0V2.5A.5.5 0 0 1 8 2zM3.732 3.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 8a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 7.31A.91.91 0 1 0 8.85 8.569l3.434-4.297a.389.389 0 0 0-.029-.518z"/>
              <path fill-rule="evenodd" d="M6.664 15.889A8 8 0 1 1 9.336.11a8 8 0 0 1-2.672 15.78zm-4.665-4.283A11.945 11.945 0 0 1 8 10c2.186 0 4.236.585 6.001 1.606a7 7 0 1 0-12.002 0z"/>
            </svg> <b>Reportes</b></button></td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>123456789</td>
            <td><button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModal"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-speedometer" viewBox="0 0 16 16">
              <path d="M8 2a.5.5 0 0 1 .5.5V4a.5.5 0 0 1-1 0V2.5A.5.5 0 0 1 8 2zM3.732 3.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 8a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 7.31A.91.91 0 1 0 8.85 8.569l3.434-4.297a.389.389 0 0 0-.029-.518z"/>
              <path fill-rule="evenodd" d="M6.664 15.889A8 8 0 1 1 9.336.11a8 8 0 0 1-2.672 15.78zm-4.665-4.283A11.945 11.945 0 0 1 8 10c2.186 0 4.236.585 6.001 1.606a7 7 0 1 0-12.002 0z"/>
            </svg> <b>Reportes</b></button></td>
          </tr>
        </tbody>
      </table>
    </div>
</main>

{/* <!-- Modal --> */}
<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-xl">
    <div className="modal-content">
      <div className="modal-header">
        <h2 className="modal-title" id="exampleModalLabel">Reportes de Usuario <i className="bi bi-bar-chart-line-fill"></i></h2>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <h5 style={{color: 'aliceblue' , position:'-ms-page'}}>Interactua con tus reportes y movimientos realizados!</h5>
        </div>
        <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i className="fas fa-bars"></i></button>
        <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
            <div className="input-group">
              <label for="select-82ce" className="u-label">Buscar Por:</label>
                <select className="form-control form-control-sm btn-primary"  name="SeleccionReportes">
                  <option value="NumRadicado">Número Radicado</option>
                  <option value="Mes">Mes</option>
                  <option value="TotalM">Total del Movimiento</option>
                  <option value="LugarM">Lugar del Movimiento</option>
                  <option value="Placa">Placa Del Vehículo</option>
                  <option value="Identificacion">Identificación</option>
                  <option value="Apellido">Apellido</option>
                </select>
                <input className="form-control" type="text" placeholder="Buscar" aria-label="Buscar" aria-describedby="btnNavbarSearch" />
                <button className="btn btn-primary" id="btnNavbarSearch" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg><i className="fas fa-search"></i></button>
            </div>
        </form>
      </nav>
      <div className="modal-body">
        {/* <!-- Cuerpo de Reportes Modal --> */}
        <section>
          <div className="container">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-4 d-flex my-3 stat">
                    <div className="mx-auto">
                      <h6 className="text-muted">Reporte Actual</h6>
                      <h6 className="font-weight-bold">$80500</h6>
                      <h6 className="text-succes"><i className="bi bi-arrow-up-right-circle-fill"></i> 40.80%</h6>
                    </div>
                  </div>
                  <div className="col-lg-4 d-flex my-3 stat">
                    <div className="mx-auto">
                      <h6 className="text-muted">última Recarga</h6>
                      <h6 className="font-weight-bold">$60000</h6>
                      <h6 className="text-succes"><i className="bi bi-arrow-up-right-circle-fill"></i> 34.80%</h6>
                    </div>
                  </div>
                  <div className="col-lg-4 d-flex my-3">
                    <div className="mx-auto">
                      <h6 className="text-muted">último Cobro</h6>
                      <h6 className="font-weight-bold">$17500</h6>
                      <h6 className="text-succes"><i className="bi bi-arrow-down-left-circle-fill"></i> 26.00%</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-grey">
            <div className="row">
              <div className="col-lg-7 py-5">
                <div className="card">
                  <div className="card-header">
                    <h1 align="center">Diagrama Del Reporte</h1>
                  </div>
                  <div className="card-body">
                    <canvas className="my-4 w-100" width="900" height="380" id="myChart"></canvas>                  
                  </div>
                </div>
              </div>
              <div className="col-lg-5 py-5">
                <div className="card">
                  <div className="card-header">
                    <h1 align="center">Barras</h1>
                  </div>
                  <div className="card-body">
                    <canvas className="my-4 w-100" id="myChart1" width="900" height="380"></canvas>                  
                  </div>
                </div>
              </div>
              <div className="col-lg-13">
                <div className="card">
                  <div className="card-header">
                    <h1 align="center">Historial De Registros</h1>
                  </div>
                  <div className="card-body">

                    <div className="table-responsive" >
                      <table className="table table-striped table-sm table-hover">
                        <thead>
                          <tr>
                            <th scope="col"># Número del radicado</th>
                            <th scope="col">Fecha</th>
                            <th scope="col">Total pagado del Movimiento</th>
                            <th scope="col">Lugar del Movimiento</th>
                            <th scope="col">Placa Del Vehículo</th>
                            <th scope="col">Identificación</th>
                            <th scope="col">Apellidos</th>
                          </tr>
                        </thead>
                        <tbody className="text-center">
                          <tr>
                            <td>921800</td>
                            <td>12/23/21</td>
                            <td>$12500</td>
                            <td>Peaje Almendra</td>
                            <td>WTG891</td>
                            <td>12345678</td>
                            <td>Cervantes</td>
                          </tr>
                          <tr>
                            <td>1838800</td>
                            <td>12/23/21</td>
                            <td>$12500</td>
                            <td>Peaje Almendra</td>
                            <td>WTG891</td>
                            <td>12345678</td>
                            <td>Cervantes</td>
                          </tr>
                          <tr>
                            <td>980800</td>
                            <td>12/23/21</td>
                            <td>$12500</td>
                            <td>Peaje Almendra</td>
                            <td>WTG891</td>
                            <td>12345678</td>
                            <td>Cervantes</td>
                          </tr>
                          <tr>
                            <td>68900</td>
                            <td>12/23/21</td>
                            <td>$12500</td>
                            <td>Peaje Almendra</td>
                            <td>WTG891</td>
                            <td>12345678</td>
                            <td>Cervantes</td>
                          </tr>
                          <tr>
                             <td>99000</td>
                            <td>12/23/21</td>
                            <td>$12500</td>
                            <td>Peaje Almendra</td>
                            <td>WTG891</td>
                            <td>12345678</td>
                            <td>Cervantes</td>
                          </tr>
                          <tr>
                            <td>989800</td>
                            <td>12/23/21</td>
                            <td>$12500</td>
                            <td>Peaje Almendra</td>
                            <td>WTG891</td>
                            <td>12345678</td>
                            <td>Cervantes</td>
                          </tr>
                          <tr>
                             <td>4800</td>
                            <td>12/23/21</td>
                            <td>$12500</td>
                            <td>Peaje Almendra</td>
                            <td>WTG891</td>
                            <td>12345678</td>
                            <td>Cervantes</td>
                          </tr>
                          <tr>
                            <td>7900</td>
                            <td>12/23/21</td>
                            <td>$12500</td>
                            <td>Peaje Almendra</td>
                            <td>WTG891</td>
                            <td>12345678</td>
                            <td>Cervantes</td>
                          </tr>
                          <tr>
                            <td>523210</td>
                            <td>12/23/21</td>
                            <td>$12500</td>
                            <td>Peaje Almendra</td>
                            <td>WTG891</td>
                            <td>12345678</td>
                            <td>Cervantes</td>
                          </tr>
                          <tr>
                            <td>44200</td>
                            <td>12/23/21</td>
                            <td>$12500</td>
                            <td>Peaje Almendra</td>
                            <td>WTG891</td>
                            <td>12345678</td>
                            <td>Cervantes</td>
                          </tr>
                          <tr>
                            <td>123121</td>
                            <td>12/23/21</td>
                            <td>$12500</td>
                            <td>Peaje Almendra</td>
                            <td>WTG891</td>
                            <td>12345678</td>
                            <td>Cervantes</td>
                          </tr>
                          <tr>
                            <td>1231</td>
                            <td>12/23/21</td>
                            <td>$12500</td>
                            <td>Peaje Almendra</td>
                            <td>WTG891</td>
                            <td>12345678</td>
                            <td>Cervantes</td>
                          </tr>
                          <tr>
                            <td>912800</td>
                            <td>12/23/21</td>
                            <td>$12500</td>
                            <td>Peaje Almendra</td>
                            <td>WTG891</td>
                            <td>12345678</td>
                            <td>Cervantes</td>
                          </tr>
                          <tr>
                            <td>921800</td>
                            <td>12/23/21</td>
                            <td>$12500</td>
                            <td>Peaje Almendra</td>
                            <td>WTG891</td>
                            <td>12345678</td>
                            <td>Cervantes</td>
                          </tr>
                          <tr>
                            <td>9321800</td>
                            <td>12/23/21</td>
                            <td>$12500</td>
                            <td>Peaje Almendra</td>
                            <td>WTG891</td>
                            <td>12345678</td>
                            <td>Cervantes</td>
                          </tr>
                          <tr>
                            <td>9789800</td>
                            <td>12/23/21</td>
                            <td>$12500</td>
                            <td>Peaje Almendra</td>
                            <td>WTG891</td>
                            <td>12345678</td>
                            <td>Cervantes</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                  </div>
                </div>
              </div>
            </div>
        </section>
        
        {/* <!-- Finalizacion de cuerpo de Reportes Modal --> */}


      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-warning font-weight-bold" data-bs-dismiss="modal">Finalizar</button>
      </div>
    </div>
  </div>
</div>
</main>
  );
}

export default ReportesUA;
