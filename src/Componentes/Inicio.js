import React from "react";
import '../App.css';
import Img from './img/recursos-humanos.png';
import Img2 from './img/calendario.png';
import Img3 from './img/factura.png';


const Inicio=()=>{


    return(
            
        <div className="iniciomax">

            <h1 className="titulo">Administracion de empleados</h1><br/>

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
                    <p>Modulo de vacaciones para ver las peticiones de vacaciones de los empleados</p>
                    <a href="/vacaciones">Revisar</a>
                </div>

                <div className="card">
                    <img src={Img3}/>
                    <h4>Nominas</h4>
                    <p>Modulo de nominas para ver todas las nominas de todos los empleados</p>
                    <a href="/nominasEmpleados">Ver</a>
                </div>
                
            
            </div>
        
        </div>
    )
}

export default Inicio;