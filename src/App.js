import React from "react";
import {Routes, Route} from 'react-router-dom';
import Login from "./Componentes/Login";
import Principal from './Componentes/Principal'
import Vacaciones from "./Componentes/Vacaciones";
import Inicio from "./Componentes/Inicio";
import InicioEmpleados from "./Componentes/InicioEmpleados";
import Nomina from "./Componentes/Nomina";
import SolicitarVacaciones from "./Componentes/SolicitarVacaciones";
import Inputs from "./Componentes/inputs";
import verNominas from "./Componentes/verNominas";


function App(){

  return(

    <Routes>
      <Route path="/" exact element={<Login/>}/>
      <Route path="/inicio" exact element={<Inicio />}/>
      <Route path="/inicioEmpleados" exact element={<InicioEmpleados />}/>
      <Route path="/vacaciones" exact element={<Vacaciones />}/>
      <Route path="/Principal" exact element={<Principal />}/>
      <Route path="/nomina" exact element={<Nomina />}/>
      <Route path="/solicitarVacaciones" exact element={<SolicitarVacaciones />}/>
      <Route path="/inputs" exact element={<Inputs />}/>
      <Route path="/verNominas" exact element={<verNominas/>}/>

    </Routes>

  );

}

export default App;
