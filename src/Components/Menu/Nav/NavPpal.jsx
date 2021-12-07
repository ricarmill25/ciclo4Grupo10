import { Link } from "react-router-dom";
import OpcNav from "./opcNav";

const NavPpal = (props) => {
  let perfil = props.perfil;

  if (perfil.includes("Administrador")) {
    return (
      <ul className="navbar-nav me-auto mb-2 mb-md-0">
        <OpcNav pagina={"/"} titulo={"Inicio"} />

        <OpcNav pagina={"/MenuInicio"} titulo={"Menu Principal"} />

        <OpcNav pagina={"/CrudUsuariosUA"} titulo={"Gestión de Usuarios"} />

        <OpcNav pagina={"/CreacionConsorcioUA"} titulo={"Consorcios"} />

        <OpcNav pagina={"CreacionPeajeUA"} titulo={"Peajes"} />

        <OpcNav pagina={"/RealizarCobrosUA"} titulo={"Realizar Cobros"} />

        <OpcNav pagina={"/RealizarRegargasUA"} titulo={"Realizar Recargas"} />

        <OpcNav pagina={"/ReportesUA"} titulo={"Reportes"} />
      </ul>
    );
  } else if (perfil.includes("Interno")) {
    return (
      <ul className="navbar-nav me-auto mb-2 mb-md-0">
        <OpcNav pagina={"/"} titulo={"Inicio"} />

        <OpcNav pagina={"/MenuInicio"} titulo={"Menu Principal"} />

        <OpcNav pagina={"/CreacionConsorcio"} titulo={"Consorcios"} />

        <OpcNav pagina={"/CreacionPeaje"} titulo={"Peajes"} />

        <OpcNav pagina={"/RealizarCobros"} titulo={"Realizar Cobros"} />

        <OpcNav pagina={"/RealizarRegargasUI"} titulo={"Realizar Recargas"} />

        <OpcNav pagina={"/ReportesUI"} titulo={"Reportes"} />
      </ul>
    );
  } else if (perfil.includes("Externo")) {
    return (
      <ul className="navbar-nav me-auto mb-2 mb-md-0">
        <OpcNav pagina={"/"} titulo={"Inicio"} />

        <OpcNav pagina={"/MenuInicio"} titulo={"Menu Principal"} />

        <OpcNav pagina={"/ComTarExt"} titulo={"Comprar Tarjeta RFID"} />

        <OpcNav pagina={"/RegTarExt"} titulo={"Registrar Tarjeta"} />

        <OpcNav pagina={"/RecTarExt"} titulo={"Recargar Tarjeta"} />

        <OpcNav pagina={"/RepUsrExt"} titulo={"Reportes"} />
      </ul>
    );
  } else {
    return (
      <ul className="navbar-nav me-auto mb-2 mb-md-0">
        <OpcNav pagina={"/"} titulo={"Perfil No Identificado"} />
      </ul>
    );
  }
};
export default NavPpal;
