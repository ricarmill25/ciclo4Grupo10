import './css/MenuPrincipalUI.css';
import BtnSesion from "./Components/Btn/BtnCerrarSesion";
import {useState} from "react";
import TablaConsorcios from './Components/Tablas/TablaConsorcios';
import TablaPeajes from './Components/Tablas/TablaPeajes';
import FormPeaje from './Components/validaciones/Formularios/FormPeaje';
/* DATA FIJA*/
import listConsorcio from './Components/Data/listConsorcios';
import listPeajes from './Components/Data/listPeajes';

/* NAV */
import NavPpal from "./Components/Menu/Nav/NavPpal";
/* NAV */

function CreacionPeaje() {
     
  const [Consorcio, setConsorcio] = useState(listConsorcio);

  const [Peaje, setPeaje] = useState(listPeajes);
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
              <NavPpal perfil={"Interno"} />

              <BtnSesion />
            </div>
          </div>
        </nav>
      </header>
  <hr className="my-5"/>

  <div className="row">
    <div className="col-sm-6 col-lg-4 mb-4 BtnCursor" data-bs-toggle="modal" data-bs-target="#modalListConsorcio">
      <div className="card">
        <img width="100%" height="200" src="/images/Peaje5.jpeg"/>
        
        <div className="card-body">
          <h5 className="card-title">Crear Un Peaje</h5>
          <p className="card-text text-dark">¿Deseas crear un nuevo Peaje? Debes tener en cuenta el listado de los Consorcios que se encuentran disponible, se debe seleccionar el consorcio y completar el formulario</p>
        </div>
      </div>
    </div>
    <div className="col-sm-6 col-lg-4 mb-4 BtnCursor" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
      <div className="card">
        <img width="100%" height="200" src="/images/WhatsApp Image 2021-11-19 at 9.40.09 AM.jpeg"/>

        <div className="card-body">
          <h5 className="card-title">Listado de los Peajes</h5>
          <p className="card-text text-dark">¿Deseas conocer el listado de todos los Peajes que existen? Puedes encontrar buena información de tu busqueda y poder gestionarla apropiadamente.</p>
        </div>
      </div>
    </div>
  </div>

{/* <!-- Modal Creación Peaje  --> */}
<div className="modal fade" id="ModalAfterPeaje" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
    <div className="modal-content">
      <div className="modal-header">
        <h3 className="modal-title" id="modalListConsorcioLabel">Crea un Peaje <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-emoji-wink" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
          <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm1.757-.437a.5.5 0 0 1 .68.194.934.934 0 0 0 .813.493c.339 0 .645-.19.813-.493a.5.5 0 1 1 .874.486A1.934 1.934 0 0 1 10.25 7.75c-.73 0-1.356-.412-1.687-1.007a.5.5 0 0 1 .194-.68z"/>
        </svg></h3>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        {/* <!-- Comienzo Del Cuerpo del Modal de Listados  --> */}
          <FormPeaje/>
        {/* <!-- Finalización Del Cuerpo del Modal de Listados  --> */}
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#modalListConsorcio">Regresar</button>
        <button type="button" className="btn btn-warning" data-bs-dismiss="modal">Finalizar</button>
      </div>
    </div>
  </div>
</div>
{/* <!-- Finalización de Modal de Creacion  --> */}


{/* <!-- Modal Lista Consorcio --> */}
<div className="modal fade" id="modalListConsorcio" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
    <div className="modal-content">
      <div className="modal-header">
        <h2 className="modal-title" id="modalListConsorcioLabel">Creación de un Peaje. Selecciona un Consorcio <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-card-list" viewBox="0 0 16 16">
          <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
          <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
        </svg></h2>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <TablaConsorcios Consorcio={Consorcio}/>
        {/* <!-- Finalización Del Cuerpo del Modal de Listados  --> */}
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-warning" data-bs-dismiss="modal">Finalizar</button>
      </div>
    </div>
  </div>
</div>

{/* <!-- Modal de la Lista de Peajes  --> */}
<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog modal-xl">
    <div className="modal-content">
      <div className="modal-header">
        <h2 className="modal-title" id="staticBackdropLabel">Listado de Peajes <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-card-list" viewBox="0 0 16 16">
          <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
          <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
        </svg></h2>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        {/* <!-- Comienzo Del Cuerpo del Modal de Listados  --> */}
        <TablaPeajes Peaje={Peaje}/>
        {/* <!-- Finalización Del Cuerpo del Modal de Listados  --> */}
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-warning" data-bs-dismiss="modal">Finalizar</button>
      </div>
    </div>
  </div>
</div>

</main>
  );
}

export default CreacionPeaje;
