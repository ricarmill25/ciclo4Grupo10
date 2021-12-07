import Cookies from 'universal-cookie';
import { useCookies } from "react-cookie";
import './css/App.css';

function App() {
  
   
  const [cookies, setCookie, removeCookie] = useCookies(["perfil"]);
  removeCookie('perfil');
  return (
    
  <div>
    
    {/* Inicial el encabezado */}
    <nav class="navbar navbar-expand-lg  bg-dark">
   
        <div class="container-fluid">
            {/* Se agrega imagen y al precionar se devuelve al index*/}
          <a class="navbar-brand text-light" href="/">
            <img class="logo" src="/images/IconoLogo2.png" alt="/" height="50"/>EASY PASS
          </a> 
          
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          {/* Barra de navegación */}
          <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto" >
              
                {/* Registrate */}
              <li class="nav-item">
                <a class="nav-link text-center" aria-current="page"  href="Registro">Registrate</a>
              </li>

              {/* Usuario */}
              <li class="nav-item">
                <a class="nav-link text-center" aria-current="page"  href="Login">Login</a>
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

    <div className="container">
        <div className="row">
        <div class="col-lg-4 py-5">
          <div class="card card-cover h-180 overflow-hidden text-white bg-dark rounded-5 shadow-lg fondo-easy-pass">
            <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
              <h2 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Servicios de Usuario que te ayudan a mejorar.</h2>
              <ul class="d-flex list-unstyled mt-auto">
                <li class="me-auto">
                  <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" class="rounded-circle border border-white"/>
                </li>
                <li class="d-flex align-items-center me-3">
                  <svg class="bi me-2" width="1em" height="1em"></svg>
                  <small>Easy Pass, Colombia</small>
                </li>
                <li class="d-flex align-items-center">
                  <svg class="bi me-2" width="1em" height="1em"></svg>
                  <small>New</small>
                </li>
              </ul>
            </div>
          </div>
        </div>
          <div className="col-lg-4 py-5">
              <div class="card" style={{width: '18rem'}}>
                <img class="card-img-top" src="/images/Segurity.jpeg" alt="Card image cap"/>
                <div class="card-body">
                <h5 class="card-title">Easy Pass Por tu Seguridad</h5>
                  <p class="card-text">Somos concientes de que tu seguridad es de mucha importancia, por eso queremos brindarte la proteccion de datos que mereces.</p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Cifrado de Extremo a Extremo</li>
                  <li class="list-group-item">Tranquilidad y plenitud</li>
                  <li class="list-group-item">Navegabilidad sustentable</li>
                </ul>
                <div class="card-body">
                  <a href="#" class="card-link">Conozca nuestras Políticas de Datos</a>
                </div>
              </div>
          </div>
          <div class="col-lg-4 py-5">
          <div class="card card-cover h-180 overflow-hidden text-white bg-dark rounded-5 shadow-lg fondo-easy-passTwo">
            <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
              <h2 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Podrás consultar reportes en todo momento.</h2>
              <ul class="d-flex list-unstyled mt-auto">
                <li class="me-auto">
                  <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" class="rounded-circle border border-white"/>
                </li>
                <li class="d-flex align-items-center me-3">
                  <svg class="bi me-2" width="1em" height="1em"></svg>
                  <small>Easy Pass, Colombia</small>
                </li>
                <li class="d-flex align-items-center">
                  <svg class="bi me-2" width="1em" height="1em"></svg>
                  <small>New</small>
                </li>
              </ul>
            </div>
          </div>
        </div>
          <div className="col-lg-4 py-5">
            <div class="card" style={{width: '18rem'}}>
                <img class="card-img-top" src="/images/ReportesDash.jpeg" alt="Card image cap"/>
                <div class="card-body">
                  <h5 class="card-title">Easy Pass Por tu Reportes</h5>
                  <p class="card-text">Sabemos que estás al tanto del control de tus finanzas y junto a ellos, tu total conocer tus movimientos.</p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Podrás administrar tu información en tiempo real</li>
                  <li class="list-group-item">Podrás comparar periodos y ver tus consumos por registros</li>
                  <li class="list-group-item">Controla tus registros</li>
                </ul>
            </div>
          </div>
          <div class="col-lg-4 py-5">
          <div class="card card-cover h-180 overflow-hidden text-white bg-dark rounded-5 shadow-lg fondo-easy-passOne">
            <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
              <h2 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Diversas funciones y facil acesso para ti.</h2>
              <ul class="d-flex list-unstyled mt-auto">
                <li class="me-auto">
                  <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" class="rounded-circle border border-white"/>
                </li>
                <li class="d-flex align-items-center me-3">
                  <svg class="bi me-2" width="1em" height="1em"></svg>
                  <small>Easy Pass, Colombia</small>
                </li>
                <li class="d-flex align-items-center">
                  <svg class="bi me-2" width="1em" height="1em"></svg>
                  <small>New</small>
                </li>
              </ul>
            </div>
          </div>
        </div>          
          <div className="col-lg-4 py-5">
            <div class="card" style={{width: '18rem'}}>
                <img class="card-img-top" src="/images/Peaje4.jpeg" alt="Card image cap"/>
                <div class="card-body">
                  <h5 class="card-title">Easy Pass por tu tiempo</h5>
                  <p class="card-text">Sabemos que tu tiempo es muy importante, para elllo, diseñamos distintas modalidades de pagos, donde el podás desenvolverte mucho mejor y hacer un buen usuo de tu tiempo.</p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Adquiere tu tarjeta RFID</li>
                  <li class="list-group-item">Recarga y Tarjeta y paga</li>
                  <li class="list-group-item">Paga por medio de tu cuenta bancaria</li>
                </ul>
                <div class="card-body">
                  <a href="#" class="card-link">Consulte términos y condiciones</a>
                </div>
              </div>
            </div>
          </div>
    </div>

    <footer className="my-5 pt-5 text-muted text-center text-small">
      <h5 class="text-footer text-light">&copy; 2021 EasyPass LTDA</h5>
    </footer>


    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

  </div>);
}

export default App;
