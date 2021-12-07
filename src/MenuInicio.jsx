import "./css/MenuPrincipalUI.css";
import Cookies from 'universal-cookie';
import BtnSesion from "./Components/Btn/BtnCerrarSesion";

/* NAV */
import NavPpal from "./Components/Menu/Nav/NavPpal";
/* NAV */

/* OPCIONES MENU */
import MenPpal from "./Components/Menu/Opciones/MenPpal";
/* OPCIONES MENU */

function MenuInicio() {
  const cookies = new Cookies();
  return (
    <main className="container py-5">
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
              <NavPpal perfil={cookies.get('perfil')} />
           
              <BtnSesion />
              
            </div>
          </div>
        </nav>
      </header>
      <hr className="my-5" />

      
      <MenPpal perfil={cookies.get('perfil')}/>
        
    </main>
  );
}

export default MenuInicio;
