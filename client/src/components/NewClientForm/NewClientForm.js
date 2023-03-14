import React, { useState } from 'react';
import './NewClientForm.css';
import { useMutation } from '@apollo/client';
import { ADD_TRAINEE } from '../../utils/mutations';
import Auth from '../../utils/auth'

const NewClientForm = () => {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    height: '',
    weight: '',
    goals: '',
    injuryHistory: '',
    notes: '',
  });

  const [addTrainee] = useMutation(ADD_TRAINEE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let intValue = value;

    if (name === 'weight' || name === 'height') {
      intValue = parseInt(value);
    }

    setFormState({
      ...formState,
      [name]: intValue,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addTrainee({
        variables: { ...formState },
      });

      console.log(data);
      // Reset the form state to clear the input data
      setFormState({
        firstName: '',
        lastName: '',
        dob: '',
        height: '',
        weight: '',
        goals: '',
        injuryHistory: '',
        notes: '',
      });

    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className='formPlacement'>
      <p className='pStyle'>
        Add new client information:
      </p>


      <div className='container col-8'>
        <form className="row justify-content-center formCard" >
          <div class="input-group">
            <span class="input-group-text">Full Name</span>
            <input
              value={formState.firstName}
              name="firstName"
              onChange={handleChange}
              type="text"
              placeholder="First"
              className="form-control" />
            <input
              value={formState.lastName}
              name="lastName"
              onChange={handleChange}
              type="text"
              placeholder="Last"
              class="form-control" />
          </div>
          <div class="input-group">
            <span class="input-group-text" id="basic-addon3">DOB</span>
            <input
              value={formState.dob}
              name="dob"
              onChange={handleChange}
              type="Date"
              placeholder="DOB"
              className="form-control" />
          </div>
          <div class="input-group">
            <span class="input-group-text" id="basic-addon3">Height</span>
            <input
              value={formState.height}
              name="height"
              onChange={handleChange}
              type="text"
              placeholder="in"
              className="form-control" />
          </div>
          <div class="input-group">
            <span class="input-group-text" id="basic-addon3">Weight</span>
            <input
              value={formState.weight}
              name="weight"
              onChange={handleChange}
              type="text"
              placeholder="lbs"
              className="form-control" />
          </div>
          <div class="input-group">
            <span class="input-group-text" >Goals</span>
            <textarea
              value={formState.goal}
              name="goals"
              onChange={handleChange}
              type="text"
              className="form-control" />
          </div>
          <div class="input-group">
            <span class="input-group-text" id="basic-addon3">Injury History</span>
            <textarea
              value={formState.injuryHistory}
              name="injuryHistory"
              onChange={handleChange}
              type="text"
              className="form-control" />
          </div>
          <div class="input-group">
            <span class="input-group-text" id="basic-addon3">Notes</span>
            <textarea
              value={formState.notes}
              name="notes"
              onChange={handleChange}
              type="text"
              placeholder="Notes: (lifestyle, fun facts, etc.)"
              className="form-control"
            />
          </div>


          <button type="button" onClick={handleFormSubmit} className='buttonStyle'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewClientForm;
{/* <p className='pStyle'>Name:
            <input
              value={formState.firstName}
              name="firstName"
              onChange={handleChange}
              type="text"
              placeholder="First Name"
              className='inputStyle'
            />
            <input
              value={formState.lastName}
              name="lastName"
              onChange={handleChange}
              type="text"
              placeholder="Last Name"
              className='inputStyle'
            /> </p>
          <p className='pStyle'>DOB:
            <input
              value={formState.dob}
              name="dob"
              onChange={handleChange}
              type="Date"
              placeholder="DOB"
              className='inputStyle'
            /></p>
          <p className='pStyle'>Height:
            <input
              value={formState.height}
              name="height"
              onChange={handleChange}
              type="text"
              placeholder="in"
              className='inputStyle'
            /></p>
          <p className='pStyle'>Weight:
            <input
              value={formState.weight}
              name="weight"
              onChange={handleChange}
              type="text"
              placeholder="lbs"
              className='inputStyle'
            /></p>
          <p className='pStyle'>Goals:
            <input
              value={formState.goal}
              name="goals"
              onChange={handleChange}
              type="text"
              placeholder="Goals"
              className='inputStyle'
            /></p>
          <p className='pStyle'>Injury History:
            <input
              value={formState.injuryHistory}
              name="injuryHistory"
              onChange={handleChange}
              type="text"
              placeholder="Injury History"
              className='inputStyle'
            /></p>
          <p className='pStyle'>Notes:
            <input
              value={formState.notes}
              name="notes"
              onChange={handleChange}
              type="text"
              placeholder="Notes: (lifestyle, fun facts, etc.)"
              className='inputStyle'
            /></p> */}