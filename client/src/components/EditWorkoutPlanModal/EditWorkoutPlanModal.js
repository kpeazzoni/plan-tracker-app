import React, {useState} from 'react';
import {useQuery} from '@apollo/client'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {QUERY_EXERCISES} from '../../utils/queries'


function EditWorkoutPlanModal(props) {
  const [show, setShow] = useState(false);
  const {loading, data } = useQuery(QUERY_EXERCISES);

  const exerciseList = data?.exercises || [];
  // console.log(exerciseList);
  const muscleGroups = []
  exerciseList.map((exercise) => {
    return (muscleGroups.push(exercise.muscleGroup))
  });

  const isolatedGroups = [...new Set(muscleGroups)];

  const [selectedGroup, setSelectedGroup] = useState("Arms");
  console.log("line22", selectedGroup)
  const handleInputChange = (e) => {
  const { name, value } = e.target;
  setSelectedGroup({ [name]: value })
  // console.log(selectedGroup);        
}
const exercisesArr = [];
  // .then((selectedGroup) => {
   populateExercises(selectedGroup.musclegroup)
   async function populateExercises (){
console.log("line 32", selectedGroup.musclegroup)
      switch (selectedGroup.musclegroup) {
      case 'Arms':
        isArms();
        
        console.log(selectedGroup.musclegroup)
        break;
      case 'Back':
        isBack();
       console.log(selectedGroup.musclegroup)
        break;
      case 'Chest':
        isChest();
        console.log(selectedGroup.musclegroup)
        break;
      case 'Glutes':
        isGlutes();
        console.log(selectedGroup.musclegroup)
        break;
      case 'Legs':
        isLegs();
        console.log(selectedGroup.musclegroup)
        break;
      case 'Shoulders':
        isShoulders();
        console.log(selectedGroup.musclegroup)
        break;    

    }}
  // }
  // );
  
// console.log(selectedGroup)

exerciseList.map((exercise) => {
  return (exercisesArr.push(exercise)
    );
});

async function isArms(options) {
  const arms = await exercisesArr.filter(function (el) {
  return (el.muscleGroup === "Arms")
  // .then ( arms.map(options));
})}

async function isBack(options) { 
  const back = exercisesArr.filter(function (el) {
  return (el.muscleGroup === "Back").then(
  console.log(back.map()))
  // .then ( back.map(options));
})};

async function isChest(options) {
  const chest = await exercisesArr.filter(function (el) {
  return (el.muscleGroup === "Chest")
  // .then ( chest.map(options))
})};

async function isGlutes(options) {
  const glutes = await exercisesArr.filter(function (el) {
  return (el.muscleGroup === "Glutes")
  // .then ( glutes.map(options));
})};

async function isLegs(options) {
  const legs = await exercisesArr.filter(function (el) {
  return (el.muscleGroup === "Legs")
  // .then ( legs.map(options));
})};

async function isShoulders(options) {
  const shoulders = await exercisesArr.filter(function (el) {
  return (el.muscleGroup === "Shoulders")
  // .then ( shoulders.map(options));
})};


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    const handleFormSubmit = (e) => {
        e.preventDefault();
      };
      // const muscleGroup = ""      
      // const exerciseName = ""
      // const sets = ""
      // const reps =""
      // const weight = ""
      // const distance = ""
      // const equipmentReq = ""
      // const notes = ""
    return (
    <>
    <Button variant="primary" onClick={handleShow}>
      EditWorkoutPlanModal
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Workout Plan</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <div className = 'container col-8'>
         <form className="row justify-content-center" >
         <div className="dropdown">
         <select name="musclegroup" onChange={handleInputChange}>
              {isolatedGroups.map((group) => {
                return (
                  <option key={group} value={group}>
                    {group}
                  </option>
                );
              })}
            </select>
            {/* <label>Exercise: </label>
            <select name="exerciseName"
            //  onChange={handleInputChange}
             >
              {populateExercises((options) => {
                return (
                  <option key={options} value={options}>
                    {options}
                  </option>
                );
              })}
            </select> */}
          {/* <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Muscle Group
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="">Action</a></li>
            <li><a className="dropdown-item" href="">Another action</a></li>
            <li><a className="dropdown-item" href="">Something else here</a></li>
          </ul>
        </div>
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Exercise
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="">Action</a></li>
            <li><a className="dropdown-item" href="">Another action</a></li>
            <li><a className="dropdown-item" href="">Something else here</a></li>
          </ul>*/}
        </div> 
            <p className=''>Sets:
            <input 
            // value={sets} 
            name="sets" 
            onChange={handleInputChange} 
            type="number"
            placeholder="Sets" 
            className='inputStyle'
            /></p>
            <p className=''>Reps:
            <input 
            // value={reps} 
            name="reps" 
            onChange={handleInputChange} type="number" 
            placeholder="reps" 
            className='inputStyle'
            /></p>
            <p className=''>Weight:
            <input 
            // value={weight} 
            name="weight" 
            onChange={handleInputChange} 
            type="Number" 
            placeholder="lbs" 
            className='inputStyle'
            /></p>
            <p className=''>Distance:
            <input 
            // value={distance} 
            name="distance" 
            onChange={handleInputChange} 
            type="number" 
            placeholder="Distance" 
            className='inputStyle'
            /></p>
            <p className=''>Equipment Required:
            <input 
            // value={equipmentReq} 
            name="equipmentReq" 
            onChange={handleInputChange} 
            type="text"
            placeholder="Equipment Required" 
            className='inputStyle'
            /></p>
            <p className=''>Notes:
            <input 
            // value={notes} 
            name="notes" 
            onChange={handleInputChange} 
            type="text"
            placeholder="Notes: (instructions, focal points, exceptions, etc.)" 
            className='inputStyle'
            /></p>
        </form>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleFormSubmit}>
          Add Exercise
        </Button>
      </Modal.Footer>
    </Modal>
  </>
      );
    }

    export default EditWorkoutPlanModal;

