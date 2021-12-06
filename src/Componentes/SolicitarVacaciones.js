import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import axios from "axios";
import swal from 'sweetalert';
import logo from './img/calendar.svg';
import addWeeks from 'date-fns/addWeeks';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateRangePicker from '@mui/lab/DateRangePicker';
import Box from '@mui/material/Box';

const url ="https://nomina-empleado-api.azurewebsites.net/api/Vacations/";

function getWeeksAfter(date, amount) {
    return date ? addWeeks(date, amount) : undefined;
}

class SolicitarVacaciones extends Component{

    state={
        data:[],
        form:{
            identificationCard: '',
            fromVacations: '',
            toVacations: ''
        }
    }

    peticionPost=async()=>{
        axios.post(url, this.state.form).then(response=>{

        });
    }

    handleChange=async e=>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
        //console.log(this.state.form)
    }

    render(){
        const{form}=this.state;
        return(
            <div className="App">
                <div className="calendar-container">
                    <div className="calendar-info-container">
                        <br/>
                        <h1 className="titlev">Solicitar Vacaciones</h1>
                        <br />
                        <form className="inputs-container">
                            <input name="identificationCard" id="identificationCard" type="text" className="input" onChange={this.handleChange} value={form.identificationCard}/>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DateRangePicker
                                    disablePast
                                    value={null}
                                    maxDate={getWeeksAfter(0, 2)}
                                    renderInput={(startProps, endProps) => (
                                        <React.Fragment>
                                            <TextField {...startProps}/>
                                            <Box sx={{ mx: 2 }}> Hasta </Box>
                                            <TextField {...endProps} />
                                        </React.Fragment>
                                    )}
                                />
                            </LocalizationProvider>
                            <button type="submit" className="btnv" onClick={()=>this.peticionPost()}>Solicitar</button>
                        </form>
                    </div>
                    <img className="calendar-image-container" src={logo}/>
                </div>
            </div>
        )
    }


    
}



export default SolicitarVacaciones;
