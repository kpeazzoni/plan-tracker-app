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

// const handleaddclient = (e) => {
//     e.preventDefault();
//     console.log('form submitted');
// alert('form submitted');
// }


function AddTraineeButtons() {
    // let navigate = useNavigate(); 
    // const routeChange = () =>{ 
    //   let path = `NewClientForm`; 
    //   navigate(path);
    // }
    return (
        <div>
         <Link to= "/NewClientForm"> <button className='btn btn-lg onWhite actionCenter'  
          // onClick={routeChange}
          >
          Add Client
          </button> </Link>
        </div>
    )
}

export default AddTraineeButtons;