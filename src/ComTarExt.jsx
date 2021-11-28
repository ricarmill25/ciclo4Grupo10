

import './css/MenuPrincipalUI.css';
import BtnSesion from './Components/Btn/BtnCerrarSesion';
// import BtnRegresarMenu from './Components/Btn/BtnRegresarMenu';
import MenUsuario from "./Components/Menu/MenUsrExt";

function ComTarExt() {
  
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
    
    <hr className="my-5"/>

    <div ClassName="container" align="center">
          <div ClassName="row justify-content-center pt-5 mt-5 mr-1"> 
              <div>
              <form className="row g-4 formulario">
            {/* Encabezado del formulario */}
            <div class="form-group text-center">
              <h1 class="text-login">COMPRA TU TARJETA FRID</h1>
            </div>
            
            <div align="left">
            <label className="form-secciones">Contacto de entrega</label>
          </div>

            {/* Campos */}
            <div className="col-md-6">
            <label for="inputnombre" className="form-label">Nombre</label>
              <input type="text" className="form-control" id="inputnombre"/>
          </div>
          
          <div className="col-md-6">
            <label for="inputapellido" className="form-label">Apellido</label>
              <input type="text" className="form-control" id="inputapellido"/>
          </div>

          <div className="col-md-6">
            <label for="inputcedula" className="form-label">Cedula</label>
              <input type="number" className="form-control" id="inputcedula"/>
          </div>

          <div className="col-md-6">
            <label for="inputcelular" className="form-label">Celular</label>
              <input type="number" className="form-control" id="inputcelular"/>
          </div>

          <div className="col-md-6">
            <label for="inputEmail" className="form-label">Email</label>
              <input type="email" className="form-control" id="inputEmail"/>
          </div>

          <div>
              <label className="form-secciones">Información de envio</label>
          </div>

          <div className="col-md-6">
            <label for="inputdepartamento" className="form-label">Departamento</label>
              <input type="text" className="form-control" id="inputdepartamento"/>
          </div>
          
          <div className="col-md-6">
            <label for="inputmunicipio" className="form-label">Municipio</label>
              <input type="text" className="form-control" id="inputmunicipio"/>
          </div>
            
          <div className="col-md-6">
            <label for="inputdireccion" className="form-label">Dirección</label>
                <input type="text" className="form-control" id="inputdireccion"/>
          </div>

          <label for="inputcedula" className="form-label">Forma de pago</label>
          <select className="form-select form-select-lg" aria-label=".form-select-lg example">
                <option selected>Seleccione la forma de pago </option>
                <option value="1">Efectivo</option>
                <option value="2">PSE</option>
          </select>
            
          <div className="form-check" align="left">
            <input className="form-check-input" type="checkbox" value="" id="terminosEnvio"/>
              <label className="form-check-label" for="terminosEnvio">
                    Aceptar términos y condiciones del servicio de domicilio
              </label>
          </div>
            
            {/* Boton de comprar */}
            <div className="form-group d-md-flex justify-content-md-center">
            <input type="submit" className="btn btn btn-dark ingresar" value="COMPRAR"/>     
          </div>
        </form>
           
               
                  </div>

              </div> 

          </div>


    

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
 

    </div>





  );
}

export default ComTarExt;
