import React from 'react';
import './buttons.css';
import {useNavigate} from 'react-router-dom';

function UpdateTraineeButtons() {
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `updateclientmodal`; 
      navigate(path);
    }
    return (
        <div>
          <button className='buttons' onClick={routeChange}>
          Update Trainee
          </button> 
        </div>
    )
}

export default UpdateTraineeButtons;