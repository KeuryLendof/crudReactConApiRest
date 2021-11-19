import React from "react";
import {Routes, Route} from 'react-router-dom';
import Login from "./Componentes/Login";
import Principal from './Componentes/Principal'
import Vacaciones from "./Componentes/Vacaciones";
import Inicio from "./Componentes/Inicio";


function App(){

  return(

    <Routes>
      <Route path="/" exact element={<Login/>}/>
      <Route path="/inicio" exact element={<Inicio />}/>
      <Route path="/vacaciones" exact element={<Vacaciones />}/>
      <Route path="/Principal" exact element={<Principal />}/>
    </Routes>

  );

}

export default App;
