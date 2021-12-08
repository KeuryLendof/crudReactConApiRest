import React from "react";
import {Routes, Route} from 'react-router-dom';
import Login from "./Componentes/Login";
import Principal from './Componentes/Principal'
import Vacaciones from "./Componentes/Vacaciones";
import Inicio from "./Componentes/Inicio";
import InicioEmpleados from "./Componentes/InicioEmpleados";
import Nomina from "./Componentes/Nomina";
import SolicitarVacaciones from "./Componentes/SolicitarVacaciones";
import NominasEmpleados from "./Componentes/NominasEmpleados";
import JobHistories from "./Componentes/JobHistories";
import PorsiacasoVaca from "./Componentes/PorsiacasoVaca";

function App(){

  return(

    <Routes>
      <Route path="/" exact element={<InicioEmpleados/>}/>
      <Route path="/inicio" exact element={<Inicio />}/>
      <Route path="/login" exact element={<Login />}/>
      <Route path="/vacaciones" exact element={<Vacaciones />}/>
      <Route path="/Principal" exact element={<Principal />}/>
      <Route path="/nomina" exact element={<Nomina />}/>
      <Route path="/solicitarVacaciones" exact element={<SolicitarVacaciones />}/>
      <Route path="/nominasEmpleados" exact element={<NominasEmpleados/>}/>
      <Route path="/jobHistories" exact element={<JobHistories/>}/>
      <Route path="/prueba" exact element={<PorsiacasoVaca/>}/>

    </Routes>

  );

}

export default App;
