import React, { useEffect, useState } from 'react';
import { QUERY_TRAINEES } from '../../utils/queries';
import { useQuery } from '@apollo/client';

import AllTrainees from '../../pages/AllTrainees';
import './AllTraineesContainer.css'
import { useParams } from 'react-router-dom';

function AllTraineesContainer() {
    // const [allTrainees, setAllTrainees] = useState([]);

    const { loading, data } = useQuery(QUERY_TRAINEES) 
    //     {
    //     variables: {
    //         trainerId: localStorage.getItem("trainer_id"),
    //     }
    // })
//    useEffect(() =>{
//     setAllTrainees(data?.trainees)
//     return
//    }, [data]);

//    console.log(data)
    const allTrainees = data?.trainees || [];


    // const [trainees, setTrainees] = useState(
    //     [
    //     {name: 'Jane Doe', dob: '1/01/1911', notes: 'Super old.'}, 
    //     {name: 'John Doe', dob: '2/02/1922', notes: 'Very old.'}, 
    //     {name: 'James Doe', dob: '3/03/1933', notes: 'Really old.'},
    //     {name: 'James Doe', dob: '3/03/1933', notes: 'Really old.'},
    //     {name: 'James Doe', dob: '3/03/1933', notes: 'Really old.'},
    //     {name: 'James Doe', dob: '3/03/1933', notes: 'Really old.'},
    //     {name: 'James Doe', dob: '3/03/1933', notes: 'Really old.'},
    //     {name: 'James Doe', dob: '3/03/1933', notes: 'Really old.'},
    //     {name: 'James Doe', dob: '3/03/1933', notes: 'Really old.'},
    //     {name: 'James Doe', dob: '3/03/1933', notes: 'Really old.'},
    //     {name: 'James Doe', dob: '3/03/1933', notes: 'Really old.'},
    //     {name: 'James Doe', dob: '3/03/1933', notes: 'Really old.'},
    //     {name: 'James Doe', dob: '3/03/1933', notes: 'Really old.'}
    // ]
    // );

    return (
        <div className='allTrainees-wrapper'>
            {loading ? (
                <p>Loading ....</p>
            ) : (
                <AllTrainees trainees={allTrainees} />
            )}
        </div>
    )
};

export default AllTraineesContainer;