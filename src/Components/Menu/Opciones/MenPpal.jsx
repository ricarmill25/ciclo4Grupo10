import { Link } from "react-router-dom";
import OpcMenu from "./opcMenu";

const MenPpal = (props) => {
  let perfil = props.perfil;

  if (perfil.includes("Administrador")) {
    return (
      <div className="row">
        <OpcMenu
          pagina={"/CrudusuariosUA"}
          foto={"/images/gestionar_usuarios.png"}
          titulo={"Registrar Usuarios"}
          leyenda={"Permite crear Usuarios Internos de la aplicacion."}
        />

        <OpcMenu
          pagina={"/CreacionConsorcioUA"}
          foto={"/images/Consorcio 2.jpeg"}
          titulo={"Crear un Consorcio"}
          leyenda={
            "¿Deseas crear un nuevo consorcio? Ten en cuenta que se debe suministrar la información necesaria y de esta manera nos ayudas a expandir nuestra plataforma.?"
          }
        />

        <OpcMenu
          pagina={"/RealizarCobrosUA"}
          foto={"/images/Cobros.jpeg"}
          titulo={"Realizar Cobros"}
          leyenda={
            "¿Deseas realizar el cobro de un vehículo? Ten en cuenta recomendaciones por categorías de cada vehículo?"
          }
        />

        <OpcMenu
          pagina={"/RealizarRegargasUA"}
          foto={"/images/Recargar.jpeg"}
          titulo={"Recargar Tarjeta FRID"}
          leyenda={
            "¿Deseas Recargar tu tarjeta FRID? Cónoce nuestra funcionalidad de pagos, ten en cuenta que se debe suministrar información correcta y precisa en los pagos.?"
          }
        />

        <OpcMenu
          pagina={"/CreacionPeajeUA"}
          foto={"/images/Peaje5.jpeg"}
          titulo={"Crear Un Peaje"}
          leyenda={
            "¿Deseas crear un nuevo Peaje? Debes tener en cuenta el listado de los Consorcios que se encuentran disponible, se debe seleccionar el consorcio y completar el formulario"
          }
        />

        <OpcMenu
          pagina={"/ReportesUA"}
          foto={"/images/ReportesDash.png"}
          titulo={"Reportes De Usuario"}
          leyenda={
            "¿Deseas Averiguar tus movimientos y Reportes en tu cuenta de Usuario? Puedes interactuar con los distintos diagramas y reportes de moviminetos que brindamos para ti, recuerda seleccionar tu tarjeta."
          }
        />
      </div>
    );
  } else if (perfil.includes("Interno")) {
    return (
      <div className="row">
        <OpcMenu
          pagina={"/CreacionConsorcio"}
          foto={"/images/Consorcio 2.jpeg"}
          titulo={"Crear un Consorcio"}
          leyenda={
            "¿Deseas crear un nuevo consorcio? Ten en cuenta que se debe suministrar la información necesaria y de esta manera nos ayudas a expandir nuestra plataforma.?"
          }
        />

        <OpcMenu
          pagina={"/RealizarCobros"}
          foto={"/images/Cobros.jpeg"}
          titulo={"Realizar Cobros"}
          leyenda={
            "¿Deseas realizar el cobro de un vehículo? Ten en cuenta recomendaciones por categorías de cada vehículo?"
          }
        />

        <OpcMenu
          pagina={"/RealizarRegargasUI"}
          foto={"/images/Recargar.jpeg"}
          titulo={"Recargar Tarjeta FRID"}
          leyenda={
            "¿Deseas Recargar la tarjeta FRID? Cónoce nuestra funcionalidad de pagos, ten en cuenta que se debe suministrar información correcta y precisa en los pagos.?"
          }
        />

        <OpcMenu
          pagina={"/CreacionPeaje"}
          foto={"/images/Peaje5.jpeg"}
          titulo={"Crear Un Peaje"}
          leyenda={
            "¿Deseas crear un nuevo Peaje? Debes tener en cuenta el listado de los Consorcios que se encuentran disponible, se debe seleccionar el consorcio y completar el formulario"
          }
        />

        <OpcMenu
          pagina={"/ReportesUI"}
          foto={"/images/ReportesDash.png"}
          titulo={"Reportes De Usuario"}
          leyenda={
            "¿Deseas Averiguar tus movimientos y Reportes en tu cuenta de Usuario? Puedes interactuar con los distintos diagramas y reportes de moviminetos que brindamos para ti, recuerda seleccionar tu tarjeta."
          }
        />
      </div>
    );
  } else if (perfil.includes("Externo")) {
    return (

<div className="row">

<OpcMenu
          pagina={"/ComTarExt"}
          foto={"/images/comprar_tarjeta.jpg"}
          titulo={"Comprar Tarjeta FRID"}
          leyenda={
            "¿Deseas crear un nuevo Peaje? Debes tener en cuenta el listado de los Consorcios que se encuentran disponible, se debe seleccionar el consorcio y completar el formulario"
          }
        />
        
        <OpcMenu
          pagina={"/RegTarExt"}
          foto={"/images/Registrar_tarjeta.jpg"}
          titulo={"Registrar Tarjeta RFID"}
          leyenda={
            "¿Deseas Registrar tu tarjeta RFID? Cada tarjeta se encuentra asociada a una placa de vehiculo, debes ingresar la información para poder usar nuestros servicios.?"}
        />

        <OpcMenu
          pagina={"/RecTarExt"}
          foto={"/images/Recargar_tarjeta.jpg"}
          titulo={"Recargar Tarjeta FRID"}
          leyenda={
            "¿Deseas Recargar tu tarjeta FRID? Cónoce nuestra funcionalidad de pagos, ten en cuenta que se debe suministrar informaación correcta y precisa en los pagos."}
        />

        

        <OpcMenu
          pagina={"/RepUsrExt"}
          foto={"/images/ReportesDash.png"}
          titulo={"Reportes De Usuario"}
          leyenda={
            "¿Deseas conocer información sobre tu cuenta? Consultar tu saldo es súper sencillo, solo debes ingresar a tu cuenta y en la plataforma verás los movimientos y el saldo."}
        />



  </div>);
  } else {
    return <ul className="navbar-nav me-auto mb-2 mb-md-0"></ul>;
  }
};
export default MenPpal;
