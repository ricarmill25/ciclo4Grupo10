
const FormPeaje = () => {
return (
<div className="list-group">
          <h1></h1>
          <form className="row g-3">
            <div className="col-md-12">
              <label for="validationDefault01" className="p-2">Nombre Del Peaje</label>
              <input type="text" className="form-control" id="validationDefault01" placeholder="Peaje Av.Americas" required/>
            </div>
            <div className="col-md-6">
              <label for="validationDefault02" className="p-2">Fecha de creación</label>
              <input type="date" className="form-control" id="validationDefault02" value="Otto" required/>
            </div>
            <div className="col-md-6">
              <label for="validationDefault03" className="p-2">Ciudad</label>
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
            <div className="col-md-12">
              <label for="validationDefaultUsername" className="p-2">Encargado</label>
              <div className="input-group">
                <span className="input-group-text" id="inputGroupPrepend2">Encarg.</span>
                <input type="text" className="form-control" id="validationDefaultUsername"  aria-describedby="inputGroupPrepend2" required/>
              </div>
            </div>
            <div className="col-md-6">
              <label for="validationDefault03" className="p-2">Latitud de Ubicación</label>
              <input type="text" className="form-control" id="validationDefault03" required/>
            </div>
            <div className="col-md-6">
              <label for="validationDefault03" className="p-2">Longitud de Ubicación</label>
              <input type="text" className="form-control" id="validationDefault03" required/>
            </div>
            <div className="col-md-6">
              <label for="validationDefault03" className="p-2">Valor $0,00 Categoría 1</label>
              <div className="input-group">
                <span className="input-group-text" id="inputGroupPrepend2">$</span>
                <input type="text" className="form-control" id="validationDefault03" required/>
              </div>
            </div>
            <div className="col-md-6">
              <label for="validationDefault03" className="p-2">Valor $0,00 Categoría 2</label>
              <div className="input-group">
                <span className="input-group-text" id="inputGroupPrepend2">$</span>
                <input type="text" className="form-control" id="validationDefault03" required/>
              </div>
            </div>
            <div className="col-md-6">
              <label for="validationDefault03" className="p-2">Valor $0,00 Categoría 3</label>
              <div className="input-group">
                <span className="input-group-text" id="inputGroupPrepend2">$</span>
                <input type="text" className="form-control" id="validationDefault03" required/>
              </div>
            </div>
            <div className="col-md-6">
              <label for="validationDefault03" className="p-2">Valor $0,00 Categoría 4</label>
              <div className="input-group">
                <span className="input-group-text" id="inputGroupPrepend2">$</span>
                <input type="text" className="form-control" id="validationDefault03" required/>
              </div>
            </div>
            <div className="col-12" align="center">
              <button className="btn btn-info" type="submit">Crear Peaje <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-emoji-wink" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm1.757-.437a.5.5 0 0 1 .68.194.934.934 0 0 0 .813.493c.339 0 .645-.19.813-.493a.5.5 0 1 1 .874.486A1.934 1.934 0 0 1 10.25 7.75c-.73 0-1.356-.412-1.687-1.007a.5.5 0 0 1 .194-.68z"/>
              </svg></button>
            </div>
          </form>
        </div>
  );
}

export default FormPeaje;
