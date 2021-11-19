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
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, excepturi unde?</p>
                    <a href="/principal">Crear</a>
                </div>
                
                <div className="card">
                    <img src={Img2}/>
                    <h4>Vacaciones</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, excepturi unde?</p>
                    <a href="/vacaciones">Asignar</a>
                </div>
                
            
            </div>
        
        </div>
    )
}

export default Inicio;