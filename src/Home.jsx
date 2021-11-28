import './css/MenuPrincipalUI.css';

function home() {
  return (
    <div className="site-wrapper">
      <div className="site-wrapper-inner">
        <div className="cover-container">
          <div className="masthead clearfix">          
            <div className="inner">
              <h3 className="masthead-brand">EASYPASS</h3>
              <nav className="nav nav-masthead">
      
                <a className="nav-link" aria-current="page"  href="RegistroUsuarioExterno.html">Registrate</a>
                <a className="nav-link" aria-current="page"  href="Login.html">Login</a>
              </nav>
            </div>
          </div>      
          <div className="inner cover p-4">
            <h1 className="cover-heading">La Aventura Comienza</h1>
            <p className="lead cover-copy">Cada Tag Flypass tiene un número que debe estar asociado a la placa de un vehiculo.</p>
          
          </div>
        </div>
      </div>
    </div>

  );
}

export default home;
