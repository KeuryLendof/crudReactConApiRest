import React from "react";
import {Routes, Route} from 'react-router-dom';
import Login from "./Componentes/Login";
import Principal from './Componentes/Principal'


function App(){

  return(

    <Routes>
      <Route path="/" exact element={<Login/>}/>
      <Route path="/Principal" exact element={<Principal />}/>
    </Routes>

  );

}

export default App;
