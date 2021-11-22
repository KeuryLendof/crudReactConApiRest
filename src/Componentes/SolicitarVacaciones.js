import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import logo from './img/calendar.svg'



function SolicitarVacaciones(){



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
                        <DatePicker className="input" placeholderText="Start Date"/>
                        <DatePicker className="input" placeholderText="End Date"/>
                        <button type="button" className="btnv">Solicitar</button>
                    </form>
                </div>
                <img className="calendar-image-container" src={logo}/>
            </div>
        </div>
    )


}


export default SolicitarVacaciones;
