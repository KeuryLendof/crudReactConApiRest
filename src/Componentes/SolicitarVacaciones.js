import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import axios from "axios";
import swal from 'sweetalert';
import logo from './img/calendar.svg';



const url ="https://nomina-empleado-api.azurewebsites.net/api/Vacations/";


class SolicitarVacaciones extends Component{

    state={
        data:[],
        form:{
            identificationCard: '',
            fromVacations: '',
            toVacations: ''
        }
    }

    LaApi=async()=>{
        let cedula = `${this.state.form.identificationCard}`
        let res = await fetch('https://nomina-empleado-api.azurewebsites.net/api/Employees')
        this.state.data = await res.json()

        if(this.state.data.find(identificationCard => identificationCard.identificationCard === cedula)){
            this.peticionPost()
        }else{
            swal ( "Oops" ,  "Esta cedula no existe!" ,  "error" )
        }

        
    }

    manejadorSubmit = e =>{
        e.preventDefault();
        var usuario = this.state.form.identificationCard
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
                            <input type="date" name="fromVacations" className="input" onChange={this.handleChange} value={form.fromVacations}/>
                            <input type="date" name="toVacations" className="input" onChange={this.handleChange} value={form.toVacations}/>
                            <button type="submit" className="btnv">Solicitar</button>
                        </form>
                    </div>
                    <img className="calendar-image-container" src={logo}/>
                </div>
            </div>
        )
    }


    
}



export default SolicitarVacaciones;
