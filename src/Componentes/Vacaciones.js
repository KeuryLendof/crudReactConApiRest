import React, { Component } from "react";
import axios from "axios";
import '../App.css';

const url ="https://nomina-empleado-api.azurewebsites.net/api/Vacations";


class Vacaciones extends Component{

    state={
        data:[]
    }

    peticionGet=()=>{
        axios.get(url).then(response=>{
            this.setState({data: response.data});
        })
    }

    componentDidMount(){
        this.peticionGet();
    }

    render(){
        return(
            <div className="revisarVacaciones">
                <section class="body-chat">
                    <div class="seccion-titulo">
                        <h3>
                            <i class="fas fa-comments"></i>
                            Solicitudes de vacaciones
                        </h3>
                    </div>
                    {this.state.data.map((vacaciones)=>{
                        return(
                            <div class="panel-chat">
                                <div class="mensaje">
                                    <div class="avatar">
                                        {/* <img src="ruta_img" alt="img"/> */}
                                    </div>
                                    <div class="cuerpo">
                                        <div class="texto">
                                            <p>De: {vacaciones.identificationCard}</p>
                                            <p>Fecha Inicio: {vacaciones.fromVacations}</p>
                                            <p>Fecha Fin: {vacaciones.toVacations}</p>
                                            <span class="tiempo">
                                                <i class="far fa-clock"></i>
                                                Reciente
                                            </span>
                                        </div>
                                        {/* <ul class="opciones-msj">
                                            <li>
                                                <button type="button">
                                                    <i class="fas fa-times"></i>
                                                </button>
                                            </li>
                                            <li>
                                                <button type="button">
                                                    <i class="fas fa-share-square"></i>
                                                </button>
                                            </li>
                                        </ul> */}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </section>
            </div>
        )
    }

}

export default Vacaciones;
