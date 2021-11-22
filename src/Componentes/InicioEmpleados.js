import React from "react";
import '../App.css';
import Img from './img/solicitud.png';
import Img2 from './img/nomina.png';



const InicioEmpleados=()=>{


    return(
        <div className="iniciomax">

            <h1 className="titulo">Bienvenido!</h1><br/>

            <div className="inicio">

                <div className="card">
                    <img src={Img}/>
                    <h4>Solicitar Vacaciones</h4>
                    <p>Modulo para solicitar sus vacaciones y luego ser verificadas</p>
                    <a href="/vacaciones">Solicitar</a>
                </div>
                
                <div className="card">
                    <img src={Img2}/>
                    <h4>Ver mi nomina</h4>
                    <p>Modulo de nomina para ver su salario primario y neto</p>
                    <a href="/nomina">Revisar</a>
                </div>
            
            </div>
        
        </div>
    )
}

export default InicioEmpleados;