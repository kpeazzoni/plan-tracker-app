import React from 'react';
import { useMutation } from '@apollo/client';
import { REMOVE_TRAINEE } from '../utils/mutations'
import { Link } from 'react-router-dom';
function SingleTraineeInfo({ trainee }, { traineeDemo }) {
    const [removeTrainee] = useMutation(REMOVE_TRAINEE);
    // console.log(me, "====")
    const demo = trainee.demographics.length - 1
    async function handleDelete(e) {
        e.preventDefault()
        await removeTrainee({ variables: { traineeId: trainee._id } })
        window.location.href = '/homepagecontainer'
        console.log("This is singletraineeInfo, trainee ID", trainee._id);
    }

    return (
        <div className='card singleTraineeCards overflow-auto scroll'>
          <div className='card-body'>
            <h4 className="card-text"><b>Name:</b> {trainee.firstName} {trainee.lastName}</h4>
            <h4 className="card-text"><b>DOB:</b> {trainee.dob}</h4>
            <h4 className="card-text"><b>Height:</b> {trainee.demographics[demo].height}</h4>
            <h4 className="card-text"><b>Weight:</b> {trainee.demographics[demo].weight}</h4>
            <h4 className="card-text"><b>Goals:</b> {trainee.demographics[demo].goals}</h4>
            <h4 className="card-text"><b>Injury History:</b> {trainee.demographics[demo].injuryHistory}</h4>
            <h4 className="card-text"><b>Notes:</b> {trainee.demographics[demo].notes}</h4>
            {trainee.demographics[demo].email &&
              <h4 className="card-text">
                <b>Email:</b> 
                <a href={`mailto:${trainee.demographics[demo].email}`} style={{ color: 'blue' }}>
                  {trainee.demographics[demo].email}
                </a>
              </h4>
            }
            <Link to='/homepagecontainer'>
                <button className='btn btn-sm btn-danger onWhite' onClick={handleDelete}>Delete</button>
                </Link> 
               {/* {/* {console.log(trainee._id )} */}
          </div>

        </div>
      );
    };
    
    export default SingleTraineeInfo;