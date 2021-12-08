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
    // {
    //     title: "Big Meeting",
    //     allDay: true,
    //     start: new Date(2021, 11, 0),
    //     end: new Date(2021, 11, 0),
    // },
    {
        title: "321-4345123-3",
        start: new Date(2021, 11, 7),
        end: new Date(2021, 11, 10),
    },
    // {
    //     title: "Conference",
    //     start: new Date(2021, 11, 20),
    //     end: new Date(2021, 11, 23),
    // },
];



function PorsiacasoVaca() {
    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
    const [allEvents, setAllEvents] = useState(events);

    function handleAddEvent() {
        setAllEvents([...allEvents, newEvent]);
    }

    return (
        <div className="container Calendario">
                <h1 className="seccion-titulo">Aprobar Vacaciones</h1>
                <div className="calendariopack">
                    <input className="inputc" type="text" placeholder="Cedula" value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
                    <DatePicker className="inputc" placeholderText="Dia Inicio" selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />
                    <DatePicker maxDate="15" minDate="5" className="inputc" placeholderText="Dia Fin" selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />
                    <button className="btn btn-primary" onClick={handleAddEvent}>
                        Aprobar
                    </button>
                </div>
                <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{ height: 500, margin: "50px" }} />
        </div>
    );
}

export default PorsiacasoVaca;



