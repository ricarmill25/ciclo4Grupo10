import "./css/MenuPrincipalUI.css";
import { Link } from "react-router-dom";
import BtnSesion from "./Components/Btn/BtnCerrarSesion";
import MenUsuario from "./Components/Menu/MenUsrExt";

function MenPpalUE() {
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
      <div>
        <hr className="my-5" />

        <main className="container py-1">
          <div className="row">
            <div className="col-sm-6 col-lg-4 mb-4">
              <Link to="/RegTarExt" className="skip-link">
                <div className="card">
                  <img
                    width="100%"
                    height="200"
                    src="/images/Registrar_tarjeta.jpg"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Registrar Tarjeta RFID</h5>
                    <p className="card-text text-dark">
                      ¿Deseas Registrar tu tarjeta RFID? Cada tarjeta se
                      encuentra asociada a una placa de vehiculo, debes ingresar
                      la información para poder usar nuestros servicios.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-sm-6 col-lg-4 mb-4">
              <Link to="/RecTarExt" className="skip-link">
                <div className="card">
                  <img
                    width="100%"
                    height="200"
                    src="/images/Recargar_tarjeta.jpg"
                  />

                  <div className="card-body">
                    <h5 className="card-title">Recargar Tarjeta RFID</h5>
                    <p className="card-text text-dark">
                      ¿Deseas Recargar tu tarjeta FRID? Cónoce nuestra
                      funcionalidad de pagos, ten en cuenta que se debe
                      suministrar informaación correcta y precisa en los pagos.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-sm-6 col-lg-4 mb-4">
              <Link to="/ComTarExt" className="skip-link">
                <div className="card">
                  <img
                    width="100%"
                    height="200"
                    src="/images/comprar_tarjeta.jpg"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Comprar Tarjeta FRID</h5>
                    <p className="card-text text-dark">
                      ¿Deseas comprar tarjeta FRID? adquirirla es super sencillo
                      , solo debes diligenciar todos los datos solicitados y
                      pagar. Puedes tener tantas tarjetas como carros tengas{" "}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-sm-6 col-lg-4 mb-4">
              <Link to="/RepUsrExt" className="skip-link">
                <div className="card">
                  <img
                    width="100%"
                    height="200"
                    src="/images/ReportesDash.png"
                  />

                  <div className="card-body">
                    <h5 className="card-title">Reportes De Usuario</h5>
                    <p className="card-text text-dark">
                      ¿Deseas conocer información sobre tu cuenta? Consultar tu
                      saldo es súper sencillo, solo debes ingresar a tu cuenta y
                      en la plataforma verás los movimientos y el saldo.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </main>
      </div>

      <div>
        <div className="b-example-divider"></div>
      </div>
    </div>
  );
}

export default MenPpalUE;
