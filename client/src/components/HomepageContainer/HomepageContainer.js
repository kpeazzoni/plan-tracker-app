import React, { useState} from "react";
import { useQuery } from "@apollo/client";
// import AppointmentsCards from "../../pages/AppointmentsCards";
import TraineesCards from "../../pages/TraineesCards"
import './HomepageContainer.css'
import FullscheduleButtons from '../Buttons/fullschedulebuttons';
import AddclientButtons from '../Buttons/addclientbuttons';
import ViewallclientsButtons from '../Buttons/viewallclientsbuttons';
import { QUERY_TRAINEES } from "../../utils/queries";

export default function HomepageContainer() {
    const [trainees, setTrainees] = useState();
    const [appointments, setAppotintments] = useState();
    
    const { loading, data } = useQuery(QUERY_TRAINEES)

    return (
        <div className="homepageContainer-wrapper">
           
            <aside className="col-md-5">
                {/* <div className="appointments-container">
                    <FullscheduleButtons />
                    <h3 className="card-heading">Today's Appointment</h3>
            <AppointmentsCards appointments={appointments}/>
            </div> */}
            </aside>
           
            <aside className="col-md-2"></aside>
           
           <aside className="col-md-5">
                <div className="trainees-container">
                <div class="d-flex flex-row mb-3">
                <AddclientButtons /> <ViewallclientsButtons />
               </div>
                    <h3 className="card-heading">Trainees</h3>
            <TraineesCards trainees={ TraineesCards }/>
            </div>
            </aside>

        </div>
    )}
