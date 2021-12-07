import React from 'react';
import { useState } from "react";
import './css/MenuPrincipalUI.css';
import BtnSesion from "./Components/Btn/BtnCerrarSesion";
import TablaUsuario from "./Components/Tablas/TablaUsuarios";

/* NAV */
import NavPpal from "./Components/Menu/Nav/NavPpal";
/* NAV */



function CrudusuariosUA() {
  
  React.useEffect(() => {
    fetch('http://localhost:3307/ListUsers')
      .then((response) => response.json())
      .then((data) => setUsuario(data));
  }, []);

    const [Usuario, setUsuario] = React.useState([]);
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
              <NavPpal perfil={"Administrador"} />

              <BtnSesion />
            </div>
          </div>
        </nav>
      </header>
  <hr className="my-5"/>
      <div className="modal fade" tabindex="-1" id="editUserModal">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">

        <div className="modal-body">
          <form id="edit-user-form" className="p-2" novalidate>
            <input type="hidden" name="id" id="id"/>
            <div className="row mb-3 gx-3">

            <div className="col">
              <input type="number" name="ucedula" id="ucedula" className="form-control form-control-lg" placeholder="Cedula del Usuario" required/>
              <div className="invalid-feedback">Cedula del usuario</div>
              </div>

            <div className="col">
              <input type="text" name="unombre" id="unombre" className="form-control form-control-lg" placeholder="Nombre de usuario" required/>
              <div className="invalid-feedback">Nombre de Usuario</div>
              </div>
            

            <div className="col">
                <input type="text" name="uapellido" id="uapellido" className="form-control form-control-lg" placeholder="Apellido del Usuario" required/>
                <div className="invalid-feedback">Apellido del Usuario</div>
                </div>
            </div>
         
            

            <div className="col">
              <input type="number" name="ucelular" id="ucelular" className="form-control form-control-lg" placeholder="Celular del Usuario" required/>
              <div className="invalid-feedback">Celular del usuario</div>
              </div>
            

            <div className="col">
              <input type="email" name="uemail" id="uemail" className="form-control form-control-lg" placeholder="Correo del Usuario" required/>
              <div className="invalid-feedback">Correo del usuario</div>
            </div>

            <div className="col">
              <input type="text" name="ucontrasena" id="ucontrasena" className="form-control form-control-lg" placeholder="Contraseña" required/>
              <div className="invalid-feedback">Contraseña del usuario</div>
            

            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* Edit User Modal End */}
  <div className="container">
    
    <div className="d-flex justify-content-between align-items-center">
        <h4 className="mb-4 text_principal"> Todos los usuarios</h4>
        <form className="d-flex">
                <select className="form-select form-select-lg" aria-label=".form-select-lg example">
                  <option selected>Seleccione</option>
                  <option value="1">Nombre</option>
                  <option value="2">Cedula</option>
                  <option value="3">Correo</option>
                </select>
          <input className="form-control me-2" type="search" placeholder="" aria-label="Search"/>
          <button className="btn btn-warning" type="submit">Buscar</button>
        </form>
        <button type="button" className="btn btn-success">
          <a className="boton_registrarUsuario" href="RegistroUA">Registrar usuario</a>
        </button>
        
    </div>
     <div className="row">
      <div className="col-lg-12">
        <div className="table-responsive">
        <hr className="my-5"/>
        <TablaUsuario Usuario={Usuario} />
          
        </div>
      </div>
    </div>
  </div>
      </div>

  
  );
}

export default CrudusuariosUA;
