

import './css/MenuPrincipalUI.css';
import BtnSesion from "./Components/Btn/BtnCerrarSesion";

/* NAV */
import NavPpal from "./Components/Menu/Nav/NavPpal";
/* NAV */

function RegistroUA() {
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
              <NavPpal perfil={"Administrador"} />

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
              <label for="inputcedula" class="form-label">Cedula</label>
              <input type="number" class="form-control" id="inputcedula"/>
            </div>

            <div class="col-md-6">
              <label for="inputnombre" class="form-label">Nombre</label>
              <input type="text" class="form-control" id="inputnombre"/>
            </div>
            <div class="col-md-6">
              <label for="inputapellido" class="form-label">Apellido</label>
              <input type="text" class="form-control" id="inputapellido"/>
            </div>

            <div class="col-md-6">
              <label for="celular" class="form-label">Celular</label>
              <input type="text" class="form-control" id="celular"/>
            </div>

            <div class="col-md-6">
              <label for="inputcedula" class="form-label">Perfil</label>
              <select class="form-select form-select-lg" aria-label=".form-select-lg example">
                <option value="1">Administrador</option>
                <option value="2">Interno</option>
                <option value="2">Externo</option>
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
