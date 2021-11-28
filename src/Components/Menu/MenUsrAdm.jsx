const MenUsrExt = () => {
    return (  
        <ul className="navbar-nav me-auto mb-2 mb-md-0">
        <li className="nav-item">
          <a className="nav-link" href="/">
            Inicio
          </a>
        </li>

        <li className="nav-item">
          <a href="/MenPpalUE" className="nav-link">
            Menu Principal
          </a>
        </li>
        <li className="nav-item">
          <a href="/RegTarExt" className="nav-link">
            Registrar Tarjeta
          </a>
        </li>
        <li className="nav-item">
          <a href="/RecTarExt" className="nav-link">
            Recargar Tarjeta
          </a>{" "}
        </li>
        <li className="nav-item">
          <a href="/ComTarExt" className="nav-link">
            Comprar Tarjeta RFID
          </a>
        </li>
        <li className="nav-item">
          <a href="/RepUsrExt" className="nav-link">
            Reportes
          </a>{" "}
        </li>
      </ul>
);
}
export default MenUsrExt;