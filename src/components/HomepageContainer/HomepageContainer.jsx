import React, { useState} from "react";
import AppointmentsCards from "../HompageAppointments/AppointmentsCards";
import ClientsCards from "../HomepageClients/ClientsCards"
import './HomepageContainer.css'

export default function HomepageContainer() {
    const [clients, setclient] = useState([
        { name: "Karen", dob: "8/19/1989", height:"5'7" },
        { name: "Chris", dob: "1/20/1987", height:"5'6"},
        { name: "Erin", dob: "5/17/2002", height:"5'3"},
    ]);
    const [appointments, setAppotintments] = useState([
        { date: "3/5/23", start_time:"9AM", end_time:"10AM", exercise:"arm" },
        { date: "3/5/23", start_time:"10AM", end_time:"11AM", exercise:"leg" },
        { date: "3/5/23", start_time:"6AM", end_time:"7AM", exercise:"shoulder"  },
    ]);
    return (
        <div className="homepageContainer-wrapper">
           
            <aside className="col-md-5">
                <div className="appointments-container">
                    <h3 className="card-heading">Today's Appointment</h3>
            <AppointmentsCards appointments={appointments}/>
            </div>
            </aside>
           
            <aside className="col-md-2"></aside>
           
           <aside className="col-md-5">
                <div className="clients-container">
                    <h3 className="card-heading">Clients</h3>
            <ClientsCards clients={clients}/>
            </div>
            </aside>

        </div>
    )}
