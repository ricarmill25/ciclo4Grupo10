import React from 'react';
import ReactDOM from 'react-dom';
import './css/MenuPrincipalUI.css';
import CreacionConsorcio from './CreacionConsorcio';
import CreacionPeaje from './CreacionPeaje';
import RealizarCobros from './RealizarCobros';
import ReportesUI from './ReportesUI';
import RealizarRegargasUI from './RealizarRegargasUI';
import App from './App';
import Login from './Login';
import Home from './Home';
import Registro from './Registro';
import MenuInicio from './MenuInicio';
import RegTarExt from './RegTarExt';
import RecTarExt from './RecTarExt';
import ComTarExt from './ComTarExt';
import RepUsrExt from './RepUsrExt';
import CreacionConsorcioUA from './CreacionConsorcioUA';
import CreacionPeajeUA from './CreacionPeajeUA';
import RealizarCobrosUA from './RealizarCobrosUA';
import RealizarRegargasUA from './RealizarRegargasUA';
import ReportesUA from './ReportesUA';
import CrudUsuariosUA from './CrudUsuariosUA'
import RegistroUA from './RegistroUA'

import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/CreacionConsorcio" element={<CreacionConsorcio/>} />
       
        <Route path="/RealizarCobros" element={<RealizarCobros/>} />
        <Route path="/CreacionPeaje" element={<CreacionPeaje/>} />
        <Route path="/ReportesUI" element={<ReportesUI/>} />
        <Route path="/RealizarRegargasUI" element={<RealizarRegargasUI/>} />
        <Route exact path="/" element={<App/>}/>
        <Route path="/Login" element={<Login/>}/> 
        <Route path="/Home" element={<Home/>}/>                 
        <Route path="/Registro" element={<Registro/>}/>
       
        <Route path="/MenuInicio" element={<MenuInicio/>}/>
       
        <Route path="/RegTarExt" element={<RegTarExt/>}/>
        <Route path="/RecTarExt" element={<RecTarExt/>}/>
        <Route path="/ComTarExt" element={<ComTarExt/>}/>
        <Route path="/RepUsrExt" element={<RepUsrExt/>}/>
        <Route path="/CreacionConsorcioUA" element={<CreacionConsorcioUA/>}/>
        <Route path="/CreacionPeajeUA" element={<CreacionPeajeUA/>}/>
        <Route path="/RealizarCobrosUA" element={<RealizarCobrosUA/>}/>
        <Route path="/RealizarRegargasUA" element={<RealizarRegargasUA/>}/>
        <Route path="/ReportesUA" element={<ReportesUA/>}/>
        <Route path="/CrudUsuariosUA" element={<CrudUsuariosUA/>}/>
        <Route path="/RegistroUA" element={<RegistroUA/>}/>
        
      </Routes>
    </Router>
  </React.StrictMode>
  ,
  document.getElementById('root')
  );
  

