import React from "react";
import '../App.css';
import Img from './img/recursos-humanos.png';
import Img2 from './img/calendario.png';


const Inicio=()=>{


    return(
            
        <div className="iniciomax">

            <h1 className="titulo">Administracion de empleados</h1>

            <div className="inicio">

                <div className="card">
                    <img src={Img}/>
                    <h4>Empleados</h4>
                    <p>Modulo de empleados para crear nuevos empleados en la empresa</p>
                    <a href="/principal">Crear</a>
                </div>
                
                <div className="card">
                    <img src={Img2}/>
                    <h4>Vacaciones</h4>
                    <p>Modulo de vacaciones para que los empleados puedan solicitar sus vacaciones</p>
                    <a href="/vacaciones">Asignar</a>
                </div>
                
            
            </div>
        
        </div>
    )
}

export default Inicio;