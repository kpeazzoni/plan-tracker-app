import React from 'react';
// import './Clients.css'

function SingleClientAppts({clientAppts}) {
    return clientAppts.map((appt, i) => (
        <div class="card allappts-per">
            <div className='card-body' key={i}>
                <h5>{appt.date}</h5>
                <p class="card-text">{appt.time}</p>
                <p class="card-text"><b>location:</b> {appt.location}</p>
            </div>
        </div>
    ));
};

export default SingleClientAppts;