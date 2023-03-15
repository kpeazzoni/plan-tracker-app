import React from 'react';
import './buttons.css';
import {useNavigate} from "react-router-dom";
// const styles = {
//     buttonStyle: {
//       backgroundColor: '#6cb4ac',
//       color: 'white',
//       fontSize: '16px',
//       padding: '10px 20px',
//       borderRadius: '5px',
//       margin: '10px 0',
//       outline:  'none',
//       // boxShadow: '0 2px 2px 0 lightgray',
//       cursor: 'pointer',
//       textTransform: 'uppercase'
//     },
//   };

// const handlefullschedule = (e) => {
//     e.preventDefault();
//     console.log('form submitted');
// alert('form submitted');
// }

function FullscheduleButtons() {
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `Schedule`; 
      navigate(path);
    }
    return (
        <div>
          <button className='btn onWhite actionCenter' onClick={routeChange}>
          Full Schedule
          </button> 
        </div>
    )
}

export default FullscheduleButtons;