import React, { Component } from "react";
import axios from "axios";
import PorsiacasoVaca from "./PorsiacasoVaca";
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import '../App.css';
import Img from './img/usuario.png'

const url ="https://nomina-empleado-api.azurewebsites.net/api/Vacations/";


class Vacaciones extends Component{

    state={
        data:[],
        modalEliminar: false,
        form:{
            idVacations: '',
            identificationCard: '',
            fromVacations: '',
            toVacations: ''
        }
    }

    peticionGet=()=>{
        axios.get(url).then(response=>{
            this.setState({data: response.data});
        })
    }

    peticionDelete=()=>{
        axios.delete(url+this.state.form.idVacations).then(response=>{
          this.peticionGet();
        })
    }

    seleccionarVacaciones=(vacaciones)=>{
        this.setState({
          form: {
            idVacations: vacaciones.idVacations,
            identificationCard: vacaciones.identificationCard,
            fromVacations: vacaciones.fromVacations,
            toVacations: vacaciones.toVacations
          }
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
                                        <img src={Img}/>
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
                                        <ul class="opciones-msj">
                                            <li>
                                                <button onClick={()=>{this.seleccionarVacaciones(vacaciones); this.setState({modalEliminar: true})}}>
                                                    <i class="fas fa-times"></i>
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </section>
                <br/>
                <PorsiacasoVaca />
                <Modal isOpen={this.state.modalEliminar}>
                    <ModalBody>
                        Estas seguro de que quieres eliminar
                    </ModalBody>
                    <ModalFooter>
                        <button className="btn btn-danger" onClick={()=>this.peticionDelete()}>Si</button>
                        <button className="btn btn-secundary" onClick={()=>this.setState({modalEliminar: false})}>No</button>
                    </ModalFooter>
                </Modal>
            </div>

        )
    }

}

export default Vacaciones;
