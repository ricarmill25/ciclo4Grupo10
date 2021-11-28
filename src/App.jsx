
import './css/App.css';

function App() {
  return (
  <div>
    {/* Inicial el encabezado */}
    <nav class="navbar navbar-expand-lg  bg-dark">
   
        <div class="container-fluid">
            {/* Se agrega imagen y al precionar se devuelve al index*/}
          <a class="navbar-brand text-light" href="#">
            <img class="logo" src="/images/IconoLogo2.png" alt="index.html" height="50"/>EASY PASS
          </a> 
          
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          {/* Barra de navegación */}
          <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto" >
              
                {/* Registrate */}
              <li class="nav-item">
                <a class="nav-link" aria-current="page"  href="Registro">Registrate</a>
              </li>

              {/* Usuario */}
              <li class="nav-item">
                <a class="nav-link" aria-current="page"  href="Login">Login</a>
              </li>

      
              {/* Agregando iconos de redes sociales */}
              <li>
                  <img class="icono-redes" src="/images/facebook.png" alt=""/>
              </li>
              <li>
                  <img class="icono-redes" src="/images/instagram.png" alt=""/>
              </li>
              <li>
                  <img class="icono-redes" src="/images/Twiter.png" alt=""/>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    {/* section */}

      <div class="card-group" >
        <div class="card">
          <div class="card-image">
            <img src="/images/payment.png" class="card-img-top" alt="..."/>
          </div>
          <div class="card-body">
            <h5 class="card-title">Agilidad</h5>
            <p class="card-text">Paso por peajes de forma más eficiente, disminuyendo gastos de gasolina.</p>
          </div>
        </div>
     
        <div class="card">
          <div class="card-image">
            <img src="/images/Información.png" class="card-img-top" alt="..."/>
          </div>
          <div class="card-body">
            <h5 class="card-title">Información</h5>
            <p class="card-text">Información oportuna y al intante, conociendo todos sus movimientos.</p>
          </div>
        </div>
        <div class="card">
          <div class="card-image">
            <img src="/images/metodo-de-pago.png" class="card-img-top" alt="..."/>
          </div>
          <div class="card-body">
            <h5 class="card-title">Metodos de Pago</h5>
            <p class="card-text"> Cualquier metodo de pago, pensando en la comodidad suya.</p>
          </div>
         </div>
      </div>

    
    <footer>
      <div class="footer-autor" align="center">
        <h5 class="text-footer">Elaborado por EASYpass</h5>
      </div>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

  </div>);
}

export default App;
