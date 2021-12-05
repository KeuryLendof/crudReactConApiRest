import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import axios from "axios";
import swal from 'sweetalert';
import logo from './img/calendar.svg'

const url ="https://nomina-empleado-api.azurewebsites.net/api/Vacations/";


class SolicitarVacaciones extends Component{

    state={
        data:[],
        form:{
            idVacations: '',
            identificationCard: '',
            fromVacations: '',
            toVacations: ''
        }
    }

    peticionPost=async()=>{
        await axios.post(url,this.state.form).then(response=>{
            swal("Good job!", "Empleado agregado correctamente!", "success");
        })
    }

    componentDidMount(){
    }

    handleChange=async e=>{
        e.persist()
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
                {/* <header>
                    <h1>Calendario</h1>
                </header> */}
    
                <div className="calendar-container">
                    <div className="calendar-info-container">
                        <br/>
                        <h1 className="titlev">Solicitar Vacaciones</h1>
                        <br />
                        <input className="input" type="text" placeholder="Estrella Adames" name="identificationCard" id="identificationCard" onChange={this.handleChange} value={form.identificationCard}/>
                        <form className="inputs-container">
                            <input name="fromVacations" id="fromVacations" type="date" className="input" placeholderText="Start Date" onChange={this.handleChange} value={form.fromVacations}/>
                            <input name="toVacations" id="toVacations" type="date"  className="input" placeholderText="End Date" onChange={this.handleChange} value={form.toVacations}/>
                            <button className="btnv" onClick={()=>this.peticionPost()}>Solicitar</button>
                        </form>
                    </div>
                    <img className="calendar-image-container" src={logo}/>
                </div>
            </div>
        )
    }


    
}



export default SolicitarVacaciones;
