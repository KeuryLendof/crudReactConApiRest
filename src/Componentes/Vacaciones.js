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
            <header>
                <h1>Calendario</h1>
                <h2>Asignar Vacaciones</h2>
            </header>
            <br></br>
            <div className="formCalendario">
            <label for="cars" >Seleccionar Persona:</label>
            <select className="date" name="cars" id="cars" style={{ width: "15%", marginRight: "10px" }}  value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}>
                <option></option>
                <option value="Marlon">Marlon</option>
                <option value="Keury">Keury</option>
                <option value="Estrella">Estrella</option>
                <option value="Abel">Abel</option>
            </select>
                {/* <input className="date" type="text" placeholder="Ingresar Persona" style={{ width: "20%", marginRight: "10px" }} value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} /> */}
                <DatePicker className="date" placeholderText="Start Date" style={{ marginRight: "10px" }} selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />
                <DatePicker className="date" placeholderText="End Date" selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />
                <button type="button" className="btn btn-outline-success date" stlye={{ marginTop: "10px" }} onClick={handleAddEvent}>
                    Asignar
                </button>
            </div>
            <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{ height: 500, margin: "50px" }} />
        </div>
    );
}

export default Vacaciones;
