import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import axios from "axios";
import swal from 'sweetalert';
import moment from 'moment'
import logo from './img/calendar.svg';



const url ="https://nomina-empleado-api.azurewebsites.net/api/Vacations/";


class SolicitarVacaciones extends Component{

    state={
        data:[],
        resultado:[],
        form:{
            identificationCard: '',
            fromVacations: '',
            toVacations: '',
            hireDate: ''
        }
    }

    LaApi=async()=>{
        let cedula = `${this.state.form.identificationCard}`
        let fechaInicio = moment(this.state.form.fromVacations)
        let fechaFin = moment(this.state.form.toVacations)
        let dias = fechaFin.diff(fechaInicio, 'days')

        let res = await fetch('https://nomina-empleado-api.azurewebsites.net/api/Employees')
        this.state.data = await res.json()
        this.state.resultado = this.state.data.find(identificationCard => identificationCard.identificationCard === cedula)

        let ano = moment(this.state.resultado.hireDate)
        let date = new Date();
        let anoA = date.toISOString().split('T')[0];
        let actual = moment(anoA)
        let diasPasados = actual.diff(ano, 'days')


        if(this.state.data.find(identificationCard => identificationCard.identificationCard === cedula)){
            if(dias > 14){
                swal ( "Oops" ,  "No puede pedir mas de 15 dias de vacaciones, intente nuevamente!" ,  "error" )
            }else{
                if(diasPasados > 365){
                    this.peticionPost()
                }else{
                    swal ( "Oops" ,  "Usted no tiene mas de un ano en la empresa!" ,  "error" )
                }
            }
        }else{
            swal ( "Oops" ,  "Esta cedula no existe!" ,  "error" )
        }

        
    }

    manejadorSubmit = e =>{
        e.preventDefault();
        var usuario = this.state.form.identificationCard
        var inicio = this.state.form.fromVacations
        var fin = this.state.form.toVacations
        this.LaApi()
    }

    peticionPost=async()=>{
        await axios.post(url,this.state.form).then(response=>{
            swal("Good job!", "Vacaciones solicitadas!", "success");
        }).catch(error=>{
            swal ( "Oops" ,  "Usted ya solicito sus vacaciones!" ,  "error" )
        })
    }

    handleChange=async e=>{
        //e.persist();
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
        console.log(this.state.form)
    }


    render(){
        const {form}=this.state;

        
        return(
            <div className="App">
                <div className="calendar-container">
                    <div className="calendar-info-container">
                        <br/><br/><br/><br/>
                        <h1 className="titlev">Solicitar Vacaciones</h1>
                        <br />
                        <form className="inputs-container" onSubmit={this.manejadorSubmit}>
                            <input placeholder="Cedula" type="text" className="input" name="identificationCard" onChange={this.handleChange} value={form.identificationCard}/>
                            <input type="date" name="fromVacations" className="input" name="fromVacations" onChange={this.handleChange} value={form.fromVacations}/>
                            <input type="date" name="toVacations" className="input" name="toVacations" onChange={this.handleChange} value={form.toVacations}/>
                            <button type="submit" className="btnv">Solicitar</button>
                        </form>
                    </div>
                    <img className="calendar-image-container" src={logo}/>
                </div>
            </div>
        )
    }
    
}
<script src="http://momentjs.com/downloads/moment.min.js"></script>



export default SolicitarVacaciones;
