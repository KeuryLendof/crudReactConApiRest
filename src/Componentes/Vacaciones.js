import React, { Component } from "react";
import axios from "axios";
import '../App.css';

const url ="http://localhost:3001/vacaciones";


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
                    <div class="panel-chat">
                        <div class="mensaje">
                            <div class="avatar">
                                {/* <img src="ruta_img" alt="img"/> */}
                            </div>
                            <div class="cuerpo">
                                <div class="texto">
                                    <table>
                                        <thead>
                                            <th>Nombre</th>
                                            <th>Inicio</th>
                                            <th>Fin</th>
                                            <th>Select</th>
                                        </thead>
                                        <tbody>
                                            {this.state.data.map(vacaciones=>{
                                                return(
                                                    <tr>
                                                        <td>{vacaciones.nombre}</td>
                                                        <td>{vacaciones.fechaInicio}</td>
                                                        <td>{vacaciones.fechaFin}</td>
                                                        <td><input type="radio"/></td>
                                                    </tr>  
                                                )
                                            })}
                                        </tbody>
                                    </table>
                                    {/* <span class="tiempo">
                                        <i class="far fa-clock"></i>
                                        Hace 5 min
                                    </span> */}
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
                </section>
            </div>
        )
    }

}

export default Vacaciones;
