import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import logo from './img/calendar.svg'

const locales = {
    "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

const events = [
    {
        title: "Big Meeting",
        allDay: true,
        start: new Date(11, 13, 2021),
        end: new Date(11, 19, 2021),
    },
    {
        title: "Vacation",
        start: new Date(2021, 11, 7),
        end: new Date(2021, 11, 10),
    },
    {
        title: "Conference",
        start: new Date(2021, 6, 20),
        end: new Date(2021, 6, 23),
    }
];

function Vacaciones() {
    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
    const [allEvents, setAllEvents] = useState(events);

    function handleAddEvent() {
        setAllEvents([...allEvents, newEvent]);
    }

    return (
        <div className="App">
            {/* <header>
                <h1>Calendario</h1>
            </header> */}

            <div className="calendar-container">
                <div className="calendar-info-container">
                    <br/>
                    <h1 className="titlev">Asignar Vacaciones</h1>
                    <br />
                    <select className="input" value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}>
                        <option>Seleccione Persona</option>
                        <option value="Marlon">Marlon</option>
                        <option value="Keury">Keury</option>
                        <option value="Estrella">Estrella</option>
                        <option value="Abel">Abel</option>
                    </select>
                    <form className="inputs-container">
                        <DatePicker className="input" placeholderText="Start Date" selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })}/>
                        <DatePicker className="input" placeholderText="End Date" selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })}/>
                        <button type="button" className="btnv" onClick={handleAddEvent}>Asignar</button>
                    </form>
                </div>
                <img className="calendar-image-container" src={logo}/>
            </div>
            <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{ height: 500, margin: "50px" }} />
        </div>
    );
}

export default Vacaciones;
