import './css/MenuPrincipalUI.css';
import { Link} from "react-router-dom";
import BtnSesion from "./Components/Btn/BtnCerrarSesion";

function CreacionConsorcioUA() {
  return (
    

<main className="container py-5">

<header>
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark" align="up">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img className="logo" src="/images/IconoLogo2.png" alt="index.html" height="50"/>EASY PASS
        </a> 
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarCollapse">
        <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <a className="nav-link" href="/">Inicio</a>
            </li>
            
            <li className="nav-item">
              <Link to="/MenPpalUA" className="nav-link">
                Menu Principal
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/CrudUsuariosUA" className="nav-link">
                Gestión de Usuarios
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/CreacionConsorcioUA" className="nav-link">
                Consorcios
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/CreacionPeajeUA" className="nav-link">
                Peajes
              </Link>            </li>
            <li className="nav-item">
              <Link to="/RealizarCobrosUA" className="nav-link">
                Realizar Cobros
              </Link>            
            </li>
            <li className="nav-item">
              <Link to="/RealizarRegargasUA" className="nav-link">
                Realizar Recargas
              </Link>             </li>
            <li className="nav-item">
              <Link to="/ReportesUA" className="nav-link">
                Reportes
              </Link>             
            </li>
          </ul>
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

  <div className="row">
    <div className="col-sm-6 col-lg-4 mb-4 BtnCursor" data-bs-toggle="modal" data-bs-target="#ModalCreacionConsorcio" data-bs-whatever="@fat">
      <div className="card">
        <img width="100%" height="200" src="/images/Consorcio 2.jpeg"/>
        
        <div className="card-body">
          <h5 className="card-title">Crear Un Consorcio</h5>
          <p className="card-text text-dark">¿Deseas crear un nuevo consorcio? Ten en cuenta que se debe suministrar la información necesaria y de esta manera nos ayudas a expandir nuestra plataforma.</p>
        </div>
      </div>
    </div>
    <div className="col-sm-6 col-lg-4 mb-4 BtnCursor" data-bs-toggle="modal" data-bs-target="#modalListConsorcio">
      <div className="card">
        <img width="100%" height="200" src="/images/WhatsApp Image 2021-11-19 at 9.40.09 AM.jpeg"/>

        <div className="card-body">
          <h5 className="card-title">Listado de Consorcios</h5>
          <p className="card-text text-dark">¿Deseas conocer el listado de todos los Consorcios que existen? Puedes encontrar buena información de tu busqueda y poder gestionarla apropiadamente.</p>
        </div>
      </div>
    </div>
  </div>


{/* <!-- Modal Creación Consorcio --> */}
<div className="modal fade" id="ModalCreacionConsorcio" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h4 className="modal-title " id="exampleModalLabel">Creación De Consorcio <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-person-plus-fill" viewBox="0 0 16 16">
          <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
          <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
        </svg></h4>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <div className="list-group">
          <h1></h1>
          <form className="row g-3">
            <div className="col-md-12">
              <label for="validationDefault01" className="form-label">Nombre Del Consorcio</label>
              <input type="text" className="form-control" id="validationDefault01" placeholder="Consorcio Pradera Almendra..." required/>
            </div>
            <div className="col-md-6">
              <label for="validationDefault02" className="form-label">Fecha de creación</label>
              <input type="date" className="form-control" id="validationDefault02" value="Otto" required/>
            </div>
            <div className="col-md-6">
              <label for="validationDefaultUsername" className="form-label">Administrador</label>
              <div className="input-group">
                <span className="input-group-text" id="inputGroupPrepend2">Admnin.</span>
                <input type="text" className="form-control" id="validationDefaultUsername"  aria-describedby="inputGroupPrepend2" required/>
              </div>
            </div>
            <div className="col-md-6">
              <label for="validationDefault03" className="form-label">Ciudad</label>
              <select className="form-select" id="validationDefault03" required>
                <option selected disabled value="">Barranquilla</option>
                <option>Bogotá</option>
                <option>Bucaramanga</option>
                <option>Cali</option>
                <option>Cucutá</option>
                <option>Medellin</option>
                <option>Monteria</option>
                <option>Santander</option>
              </select>
            </div>
            <div className="col-md-6">
              <label for="validationDefault04" className="form-label">Municipio</label>
              <select className="form-select" id="validationDefault04" required>
                <option selected disabled value="">Municipio</option>
                <option>...</option>
              </select>
            </div>
            <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">Descripción</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div className="col-12" align="center">
              <button className="btn btn-info" type="submit">Crear Consorcio <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-emoji-wink" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm1.757-.437a.5.5 0 0 1 .68.194.934.934 0 0 0 .813.493c.339 0 .645-.19.813-.493a.5.5 0 1 1 .874.486A1.934 1.934 0 0 1 10.25 7.75c-.73 0-1.356-.412-1.687-1.007a.5.5 0 0 1 .194-.68z"/>
              </svg></button>
            </div>
          </form>
        </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-warning" data-bs-dismiss="modal">Finalizar</button>
      </div>
    </div>
  </div>
</div>
{/* <!-- Finalización de Modal de Creacion --> */}
{/* <!-- Modal Lista Consorcio--> */}
<div className="modal fade" id="modalListConsorcio" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
    <div className="modal-content">
      <div className="modal-header">
        <h2 className="modal-title" id="modalListConsorcioLabel">Listado de Consorcios <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-card-list" viewBox="0 0 16 16">
          <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
          <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
        </svg></h2>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        {/* <!-- Comienzo Del Cuerpo del Modal de Listados --> */}
        
        <table className="table table-striped table-hover table-bordered">
          <thead>
              <tr className="table-dark align-middle">
                <th scope="col">#</th>
                <th scope="col">Nombre Del Consorcio</th>
                <th scope="col">Creación</th>
                <th scope="col">Administrador</th>
                <th scope="col">Ciudad</th>
                <th scope="col">Descripción</th>
                <th scope="col">Acciones</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Consorcio Villa Almendra</td>
                <td>13/06/2021</td>
                <td>José Serge</td>
                <td>Barranquilla, Atlántico</td>
                <td>Consorcio aliada con Gaselca junto a la Zona franca de Barranquilla Consorcio aliada con Gaselca junto a la Zona franca de Barranquilla Consorcio aliada con Gaselca junto a la Zona franca de Barranquilla Consorcio aliada con Gaselca junto a la Zona franca de Barranquilla</td>
                <td><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                </svg></a> <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                </svg></a></td>
              </tr>
              <tr>
              <th scope="row">2</th>
              <td>Consorcio Villa Nueva</td>
              <td>27/09/2018</td>
              <td>Ricardo Millán</td>
              <td>Cali, Valle del Cauca</td>
              <td>Consorcio aliada con Afinea junto a la Zona franca de Cali</td>
              <td><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
              </svg></a> <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
              </svg></a></td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Consorcio Alameda</td>
              <td>24/11/2019</td>
              <td>Camila Pérez</td>
              <td>Bogotá, Cundinamarca</td>
              <td>Consorcio aliado de Colpatria y los diversos inversores al contribuyente expresado</td>
              <td><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
              </svg></a> <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
              </svg></a></td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Consorcio Alameda</td>
              <td>24/11/2019</td>
              <td>Camila Pérez</td>
              <td>Bogotá, Cundinamarca</td>
              <td>Consorcio aliado de Colpatria y los diversos inversores al contribuyente expresado</td>
              <td><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
              </svg></a> <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
              </svg></a></td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Consorcio Alameda</td>
              <td>24/11/2019</td>
              <td>Camila Pérez</td>
              <td>Bogotá, Cundinamarca</td>
              <td>Consorcio aliado de Colpatria y los diversos inversores al contribuyente expresado</td>
              <td><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
              </svg></a> <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
              </svg></a></td>
            </tr>
          </tbody>
        </table>

        
        {/* <!-- Finalización Del Cuerpo del Modal de Listados --> */}
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Finalizar</button>
        <button type="button" className="btn btn-warning">Siguiente</button>
      </div>
    </div>
  </div>
</div>



<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

</main>

  );
}

export default CreacionConsorcioUA;