import React from 'react';
import { useState } from "react";
import './css/MenuPrincipalUI.css';
import BtnSesion from "./Components/Btn/BtnCerrarSesion";
import TablaTarjetas from "./Components/Tablas/TablaTarjetas";

/* NAV */
import NavPpal from "./Components/Menu/Nav/NavPpal";
/* NAV */

function RecTarExt() {
  React.useEffect(() => {
    fetch('http://localhost:3307/ListUserCard')
      .then((response) => response.json())
      .then((data) => setTarjeta(data));
  }, []);

    const [Tarjeta, setTarjeta] = React.useState([]);
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
              <NavPpal perfil={"Externo"} />

              <BtnSesion />
            </div>
          </div>
        </nav>
      </header>

      {/* Add New User Modal Start */}

  {/* Add New User Modal End */}

  {/* Edit User Modal Start */}
  {/* Button trigger modal */}

{/* Modal */}
<div className="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div className="modal-dialog modal-lg" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLongTitle">Pago con tarjeta de crédito</h5>
      </div>
      <div className="modal-body">
        <form className="row g-3">
          <div className="col-md-12">
            <label for="validationDefault01" className="form-label">Ingrese Porfavor Su Nombre Completo</label>
            <input type="text" className="form-control" id="validationDefault01" placeholder="José Es Ejemplo Prueba" required />
          </div>
          <div className="col-md-12">
            <label for="validationDefault01" className="form-label">Ingrese Porfavor el Número de su tarjeta crédito</label>
            <input type="password" className="form-control" id="validationDefault01" placeholder="********1234" required />
          </div>
          <div className="col-md-6">
            <label for="validationDefault02" className="form-label">Fecha de expedición</label>
            <input type="date" className="form-control" id="validationDefault02" value="Otto" required />
          </div>
          <div className="col-md-6">
            <label for="validationDefaultUsername" className="form-label">Código de seguridad</label>
            <div className="input-group">
              <span className="input-group-text" id="inputGroupPrepend2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lock-fill" viewBox="0 0 16 16">
                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
              </svg></span>
              <input type="password" className="form-control" id="validationDefaultUsername"  aria-describedby="inputGroupPrepend2" required />
            </div>
          </div>
          <div className="col-md-6">
            <label for="validationDefault03" className="form-label">Ingrese su Apellido</label>
            <input type="text" className="form-control" id="validationDefault03" required />
          </div>
          <div className="col-md-6">
            <label for="validationDefault03" className="form-label">Ciudad</label>
            <input type="text" className="form-control" id="validationDefault03" required />
          </div>
          <div className="form-check">
            <input className="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option1" aria-label="..." />
            <label className="form-check-label" for="exampleRadios1">
              Acepto el tratamiento de información requerida
            </label>
          </div>
          {/* <div className="col-md-6">
            <label for="validationDefault03" className="form-label">Valor $0,00 Categoría 1</label>
            <div className="input-group">
              <span className="input-group-text" id="inputGroupPrepend2">$</span>
              <input type="text" className="form-control" id="validationDefault03" required>
            </div>
          </div>
          <div className="col-md-6">
            <label for="validationDefault03" className="form-label">Valor $0,00 Categoría 2</label>
            <div className="input-group">
              <span className="input-group-text" id="inputGroupPrepend2">$</span>
              <input type="text" className="form-control" id="validationDefault03" required>
            </div>
          </div>
          <div className="col-md-6">
            <label for="validationDefault03" className="form-label">Valor $0,00 Categoría 3</label>
            <div className="input-group">
              <span className="input-group-text" id="inputGroupPrepend2">$</span>
              <input type="text" className="form-control" id="validationDefault03" required>
            </div>
          </div>
          <div className="col-md-6">
            <label for="validationDefault03" className="form-label">Valor $0,00 Categoría 4</label>
            <div className="input-group">
              <span className="input-group-text" id="inputGroupPrepend2">$</span>
              <input type="text" className="form-control" id="validationDefault03" required>
            </div>
          </div> */}
        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary"  data-bs-toggle="modal" data-bs-target="#exampleModal">Regresar</button>
        <button type="button" className="btn btn-primary">Validar información</button>
      </div>
    </div>
  </div>
</div>
  {/* Edit User Modal End */}
  <hr className="my-5"/>

  <div className="container">
    
    <div className="d-flex justify-content-between align-items-center">
        <h4 className="mb-4 text_principal"> Todos los registros</h4>
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="No.tarjeta o placa" aria-label="Search"/>
          <button className="btn btn-warning" type="submit">Buscar</button>
        </form>
        <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">Recargar tarjeta</button>
    </div>


     <div className="row">
      <div className="col-lg-12">
        <div className="table-responsive">
        <TablaTarjetas Tarjeta={Tarjeta} />
        </div>
      </div>
    </div>
  </div>
    {/* Modal */}
    <div className="modal fade modal-md" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title" id="exampleModalLabel">Recargar tarjeta por medio de tu cuenta Bancaria</h4>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form>
             
              <section>
                <div className="d-flex">
                  <div id="sidebar-container" className="bg-grey">
                    <div className="menu">
                      <h4 className="p-3">Solicitud De Recarga</h4>
                      <div className="mx-auto p-3">
                        <h6 className="">Enviada Por:</h6>
                        <p>EASY PASS LTDA<br />
                          EasyPassPagos@gmail.com
                        </p>
                      </div>
                      <div className="mx-auto p-3">
                        <h6 className="">Concepto:</h6>
                        <p>Recarga de Tarjeta RFID</p>
                      </div>
                      <div className="mx-auto p-3">
                        <h6 className="">Solicitado por EasyPass.Ltda</h6>
                        <p>Linea de Atención al cliente: <br />
                          EasyPassCol@Gmail.com
                          3008979278988
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-3">
                    <h3 className="p-3">Seleccione su medio de pago preferido </h3>
                    <div className="card">
                      <div className="card-body">
                        <div className="row"  data-bs-toggle="modal" data-bs-target="#exampleModalLong" data-bs-whatever="@getbootstrap">
                          <div className="col-lg-12">
                            <h5 className="">Pago con tarjeta de crédito</h5>
                            <p className="p-3">
                              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-credit-card" viewBox="0 0 16 16">
                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z"/>
                                <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z"/>
                              </svg> Todas las transacciones son seguras
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <section className="py-3">
                      <div className="card">
                        <div className="card-body">
                          <div className="row">
                            <div className="col-lg-12">
                              <h5 className="">Pago por PSE</h5>
                              <p>
                                <img src="/images/BotonPSE.png" className="img-fluid rounded-circle avatar cover"/> Pagos seguros en linea con el banco de su preferencia
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </section>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-warning" data-bs-dismiss="modal">Cerrar</button>
            <button type="button" className="btn btn-success">Pagar</button>
          </div>
        </div>
      </div>
    </div>




    

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>



    </div>
  );
}

export default RecTarExt;
