import React from 'react';
import './buttons.css';
import {useNavigate, Link} from 'react-router-dom';

// const styles = {
//     buttonStyle: {
//       backgroundColor: '#6cb4ac',
//       color: 'white',
//       fontSize: '16px',
//       padding: '10px 20px',
//       borderRadius: '5px',
//       margin: '10px 0',
//       outline:  'none',
//       // boxShadow: '0 2px 2px 0 gray',
//       cursor: 'pointer',
//       textTransform: 'uppercase',
//   }
// };

// const handleviewallclients = (e) => {
//     e.preventDefault();
//     console.log('form submitted');
// alert('form submitted');
// }


function ViewallTraineesButtons() {
    // let navigate = useNavigate(); 
    // const routeChange = () =>{ 
    //   let path = `AllTraineesContainer`; 
    //   navigate(path);
    // }
    return (
        <>
        <Link to="/AllTraineesContainer" > <button className='btn btn-lg onWhite actionCenter' 
        // onClick={routeChange}
        >
          View All Clients
          </button>
          </Link>
        </>
    )
}

export default ViewallTraineesButtons;