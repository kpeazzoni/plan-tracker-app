import React from 'react';
import './buttons.css';



const handlescheduleappt = (e) => {
    e.preventDefault();
    console.log('form submitted');
alert('form submitted');
}


function ScheduleapptButtons() {
    return (
        <div>
          <button className='buttons' onClick={handlescheduleappt}>
          Schedule Appt.
          </button> 
        </div>
    )
}

export default ScheduleapptButtons;