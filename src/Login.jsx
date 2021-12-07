import "./css/MenuPrincipalUI.css";
import { Link} from "react-router-dom";
import React, { useState } from 'react';
import Cookies from 'universal-cookie';
import ValidacionFormLogin from "./Components/validaciones/ValidacionFormLogin";

function Registro() {
  const cookies = new Cookies();
    cookies.remove('perfil', {
      path: '/MenuInicio'
   });
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
              {/* <li className="nav-item">
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
              </li> */}
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
        <ValidacionFormLogin/>
      </div>
      <div>
        <div class="b-example-divider"></div>
      </div>
    </div>
  );
}

export default Registro;
