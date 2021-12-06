import "./css/MenuPrincipalUI.css";
import { Link} from "react-router-dom";

function Registro() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg  bg-dark">
        <div className="container-fluid">
        <a className="navbar-brand text-light" href="#">
          <img className="logo" src="/images/IconoLogo2.png" alt="/" height="50"/>EASY PASS
        </a> 

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/MenuPrincipalUI" className="nav-link">
                  Menu Principal Usuario Interno
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/MenPpalUE" className="nav-link">
                  Menu Principal Usuario Externo
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  aria-current="page"
                  href="MenPpalUA"
                >
                  Administrador
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="Registro">
                  Registrate
                </a>
              </li>

              <li>
                <img className="icono-redes" src="img/facebook.png" alt="" />
              </li>
              <li>
                <img className="icono-redes" src="img/instagram.png" alt="" />
              </li>
              <li>
                <img className="icono-redes" src="img/Twiter.png" alt="" />
              </li>
            </ul>
          </div>
        </div>
      </nav>
<hr className="my-5"/>

      <div>
      <div ClassName="container" align="center">
          <div ClassName="row justify-content-center pt-5 mt-5 mr-1">
            <div>
              <form className="row g-4 formulario">
                {/* <div ClassName="form-group justify-content-center" > */}
                {/* <img ClassName="Logo" src="" alt=""> */}
                {/* </div> */}
                <div ClassName="form-group text-center p-4">
                  <h1 ClassName="text-login">INICIAR SESIÓN</h1>
                </div>
                <div ClassName="form-group mx-sm-4 pt-2">
                  <input type="text" className="form-control" id="validationDefault01" placeholder="Ingrese su usuario" required/>
                </div>

                <div ClassName="form-group mx-sm-4 ">
                  <input type="password" className="form-control" id="validationDefaultUsername"  aria-describedby="inputGroupPrepend2" required />

                </div>

                <div ClassName="form-group d-md-flex justify-content-md-center">
                  <button type="button" className="btn btn-warning">Ingresar</button>

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

export default Registro;
