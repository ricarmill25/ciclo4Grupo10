

import './css/MenuPrincipalUI.css';

function Registro() {
  return (
    
    <div>
      <nav className="navbar navbar-expand-lg  bg-dark">
   
   <div className="container-fluid">
       {/* Se agrega imagen y al precionar se devuelve al index*/}
     <a className="navbar-brand text-light" href="#">
       <img className="logo" src="/images/IconoLogo2.png" alt="index.html" height="50"/>EASY PASS
     </a> 
     
     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <span className="navbar-toggler-icon"></span>
     </button>

     {/* Barra de navegación */}
     <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
       <ul className="navbar-nav ml-auto" >
         
           {/* Registrate */}
         <li className="nav-item">
           <a className="nav-link" aria-current="page"  href="/">Inicio</a>
         </li>

        

 
         {/* Agregando iconos de redes sociales */}
         <li>
             <img className="icono-redes" src="/images/facebook.png" alt=""/>
         </li>
         <li>
             <img className="icono-redes" src="/images/instagram.png" alt=""/>
         </li>
         <li>
             <img className="icono-redes" src="/images/Twiter.png" alt=""/>
         </li>
       </ul>
     </div>
   </div>
 </nav>
      
   
 <div>
 <hr className="my-5"/>

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
              <label for="inputnombre" class="form-label">Nombre</label>
              <input type="text" class="form-control" id="inputnombre"/>
            </div>
            <div class="col-md-6">
              <label for="inputapellido" class="form-label">Apellido</label>
              <input type="text" class="form-control" id="inputapellido"/>
            </div>

            <div class="col-md-6">
              <label for="inputcedula" class="form-label">Cedula</label>
              <input type="number" class="form-control" id="inputcedula"/>
            </div>

            <div class="col-md-6">
              <label for="inputcedula" class="form-label">Sexo</label>
              <select class="form-select form-select-lg" aria-label=".form-select-lg example">
                <option selected>Seleccione el sexo</option>
                <option value="1">Mujer</option>
                <option value="2">Hombre</option>
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

export default Registro;
