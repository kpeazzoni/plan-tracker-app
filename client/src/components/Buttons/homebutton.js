import React from 'react';
import './buttons.css';
import {useNavigate} from 'react-router-dom';

function HomeButton() {
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `homepagecontainer`; 
      navigate(path);
    }
    return (
        <div>
          <button className='buttons' onClick={routeChange}>
          Home
          </button> 
        </div>
    )
}

export default HomeButton;