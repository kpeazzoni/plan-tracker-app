import React, {useState} from 'react';
import {useQuery} from '@apollo/client'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {QUERY_EXERCISES} from '../../utils/queries'

function EditWorkoutPlanModal(props) {
  const [show, setShow] = useState(false);
  const {loading, data } = useQuery(QUERY_EXERCISES);
  const exerciseList = data?.exercises || [];
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const muscleGroups = []

  exerciseList.map((exercise) => {
    return (muscleGroups.push(exercise.muscleGroup))
  });

  const isolatedGroups = [...new Set(muscleGroups)];


  const [selectedGroup, setSelectedGroup] = useState("");
  const handleInputChange =  (e) => {
  const { name, value } = e.target;
  setSelectedGroup({ [name]: value });
  optionsArr.length = 0;
  populateExercises(selectedGroup);
}
const exercisesArr = [];
const optionsArr = [];
exerciseList.map((exercise) => {
  return (exercisesArr.push(exercise)
    );
});

populateExercises(selectedGroup)


function populateExercises (selectedGroup) {
      switch (selectedGroup.musclegroup) {
      case 'Arms':
        isArms();
        optionsArr.sort()
        break;
      case 'Back':
        isBack();
        optionsArr.sort()
        break;
      case 'Chest':
        isChest();
        optionsArr.sort()
        break;
      case 'Glutes':
        isGlutes();
        optionsArr.sort()
        break;
      case 'Legs':
        isLegs();
        optionsArr.sort()
        break;
      case 'Shoulders':
        isShoulders();
        optionsArr.sort()
        break;
      default:
        exercisesArr.map((options) => {
          optionsArr.push(options.exerciseName)
          optionsArr.sort()
        })
    }}
  // }
  // );
  
async function isArms() {
  const arms = exercisesArr.filter(function (a) {
    return a.muscleGroup === "Arms";});
    arms.map((options) => {
      optionsArr.push(options.exerciseName)
    })
    ;
}

async function isBack() {
  const back = exercisesArr.filter(function (b) {
    return b.muscleGroup === "Back";});
    back.map((options) => {
      optionsArr.push(options.exerciseName)
    })
};

async function isChest() {
  const chest = exercisesArr.filter(function (c) {
    return c.muscleGroup === "Chest";});
    chest.map((options) => {
      optionsArr.push(options.exerciseName)
    })
};

async function isGlutes() {
  const glutes = exercisesArr.filter(function (g) {
    return g.muscleGroup === "Glutes";});
    glutes.map((options) => {
      optionsArr.push(options.exerciseName)
    })
};

async function isLegs() {
  const legs = exercisesArr.filter(function (l) {
    return l.muscleGroup === "Legs";})
    legs.map((options) => {
      optionsArr.push(options.exerciseName)
    })
};

async function isShoulders() {
  const shoulders = exercisesArr.filter(function (s) {
    return s.muscleGroup === "Shoulders";});
    shoulders.map((options) => {
      optionsArr.push(options.exerciseName)
    })
};


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
    <Button className = 'btn onWhite' onClick={handleShow}>
      Edit Workout Plan
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
          <option>Select Muscle Group</option>
              {isolatedGroups.map((group) => {
                return (
                  
                  <option key={group} value={group}>
                    {group}
                  </option>
                );
              })}
            </select>
            {/* <label>Exercise: </label> */}
            <select name="exerciseName"
            //  onChange={handleInputChange}
             >
              <option>Select Exercise</option>
              {optionsArr.sort()}
              {optionsArr.map((option) => {
                return (
                  <option key={option} value={option}>
                    {option}
                  </option>
                );
              })}
            </select>
            {/* THIS CODE WORKS FOR ALL EXERCISES
            <select name="exerciseName"
            //  onChange={handleInputChange}
             >
              {exerciseList.map((option) => {
                return (
                  <option key={option} value={option.exerciseName}>
                    {option.exerciseName}
                  </option>
                );
              })}
            </select> */}
        </div> 
            <p className=''>Sets:
            <input 
            // value={sets} 
            name="sets" 
            // onChange={handleInputChange} 
            type="number"
            placeholder="Sets" 
            className='inputStyle'
            /></p>
            <p className=''>Reps:
            <input 
            // value={reps} 
            name="reps" 
            // onChange={handleInputChange}
            type="number" 
            placeholder="reps" 
            className='inputStyle'
            /></p>
            <p className=''>Weight:
            <input 
            // value={weight} 
            name="weight" 
            // onChange={handleInputChange} 
            type="Number" 
            placeholder="lbs" 
            className='inputStyle'
            /></p>
            <p className=''>Distance:
            <input 
            // value={distance} 
            name="distance" 
            // onChange={handleInputChange} 
            type="number" 
            placeholder="Distance" 
            className='inputStyle'
            /></p>
            <p className=''>Equipment Required:
            <input 
            // value={equipmentReq} 
            name="equipmentReq" 
            // onChange={handleInputChange} 
            type="text"
            placeholder="Equipment Required" 
            className='inputStyle'
            /></p>
            <p className=''>Notes:
            <input 
            // value={notes} 
            name="notes" 
            // onChange={handleInputChange} 
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

