import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Conexion from "./conexionVacaciones";
import "../App.css";
import logo from './img/calendar.svg'



function SolicitarVacaciones(){


    // let fechaInicio = document.getElementById("inico").value

    // console.log("Soy yoooooooooooooooo: " + fechaInicio);

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
                    <input className="input" type="text" placeholder="Estrella Adames" name="username" disabled/>
                    <form className="inputs-container">
                        <input id="inicio" type="date" className="input" placeholderText="Start Date"/>
                        <input id="fin" type="date"  className="input" placeholderText="End Date"/>
                        <button type="button" className="btnv">Solicitar</button>
                        <Conexion fechaInicio = {document.getElementById("inico")}/>
                        <Conexion fechaFin = "28/11/2021"/>
                    </form>
                </div>
                <img className="calendar-image-container" src={logo}/>
            </div>
        </div>
    )
    
}



export default SolicitarVacaciones;
