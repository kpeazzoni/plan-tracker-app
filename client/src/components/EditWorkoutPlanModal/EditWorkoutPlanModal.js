import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { QUERY_EXERCISES, QUERY_TRAINEE } from '../../utils/queries';
import { useMutation } from '@apollo/client';
import { useParams } from 'react-router-dom';
import {UPDATE_WORKOUTS} from "../../utils/mutations"


function EditWorkoutPlanModal(props) {
  const [show, setShow] = useState(false);
  const { loading, data } = useQuery(QUERY_EXERCISES);

  const exerciseList = data?.exercises || [];
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const muscleGroups = []

  exerciseList.map((exercise) => {
    return (muscleGroups.push(exercise.muscleGroup))
  });
  const isolatedGroups = [...new Set(muscleGroups)];
  const [selectedGroup, setSelectedGroup] = useState("");
  const handleInputChange = (e) => {
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


  function populateExercises(selectedGroup) {
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
    }
  }
  // }
  // );

  async function isArms() {
    const arms = exercisesArr.filter(function (a) {
      return a.muscleGroup === "Arms";
    });
    arms.map((options) => {
      optionsArr.push(options.exerciseName)
    })
      ;
  }

  async function isBack() {
    const back = exercisesArr.filter(function (b) {
      return b.muscleGroup === "Back";
    });
    back.map((options) => {
      optionsArr.push(options.exerciseName)
    })
  };

  async function isChest() {
    const chest = exercisesArr.filter(function (c) {
      return c.muscleGroup === "Chest";
    });
    chest.map((options) => {
      optionsArr.push(options.exerciseName)
    })
  };

  async function isGlutes() {
    const glutes = exercisesArr.filter(function (g) {
      return g.muscleGroup === "Glutes";
    });
    glutes.map((options) => {
      optionsArr.push(options.exerciseName)
    })
  };

  async function isLegs() {
    const legs = exercisesArr.filter(function (l) {
      return l.muscleGroup === "Legs";
    })
    legs.map((options) => {
      optionsArr.push(options.exerciseName)
    })
  };

  async function isShoulders() {
    const shoulders = exercisesArr.filter(function (s) {
      return s.muscleGroup === "Shoulders";
    });
    shoulders.map((options) => {
      optionsArr.push(options.exerciseName)
    })
  };
  const [trainee, setTrainee] = useState();
  const [updateWorkouts] = useMutation(UPDATE_WORKOUTS);


  const [formState, setFormState] = useState({
    muscleGroup: '',
    exerciseName: '',
    sets: '',
    reps: '',
    weight: '',
    distanceOrTime: '',
    equipmentReq: '',
    notes: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    let intValue = value;

    setFormState({
      ...formState,
      [name]: intValue,
    });
  };
  const {traineeSchedule} = props.trainee
console.log(traineeSchedule);
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await updateWorkouts({
        variables: { scheduleId: traineeSchedule._id, ...formState },
      }); 

      setFormState({
        muscleGroup: '',
        exerciseName: '',
        sets: '',
        reps: '',
        weight: '',
        distanceOrTime: '',
        equipmentReq: '',
        notes: '',
      });
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <>
      <Button className='btn onWhite' onClick={handleShow}>
        Edit Workout Plan
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Workout Plan</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='container col'>
            <form className="row justify-content-center formCard" >
              <div className="input-group">
                <span className="input-group-text">Select Exercises</span>
                <select
                  name="muscleGroup"
                  onChange={handleInputChange}
                  className="form-control"
                >
                  <option>Muscle Group</option>
                  {isolatedGroups.map((group) => {
                    return (

                      <option key={group} value={group}>
                        {group}
                      </option>
                    );
                  })}
                </select>
                <select
                  name="muscleGroup"
                  onChange={handleInputChange}
                  className="form-control"
                >
                  <option>Exercises</option>
                  {optionsArr.sort()}
                  {optionsArr.map((option) => {
                    return (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="input-group">
                <span className="input-group-text">Sets x Reps</span>
                <input
                  // value={sets} 
                  name="sets"
                  // onChange={handleInputChange} 
                  type="number"
                  placeholder="sets"
                  className='form-control'
                />
                <input
                  // value={reps} 
                  name="reps"
                  // onChange={handleInputChange}
                  type="number"
                  placeholder="reps"
                  className='form-control'
                />
              </div>
              <div className="input-group">
                <span className="input-group-text">Weight</span>
                <input
                  // value={weight} 
                  name="weight"
                  // onChange={handleInputChange} 
                  type="Number"
                  placeholder="lbs"
                  className='form-control'
                />
              </div>
              <div className="input-group">
                <span className="input-group-text">Distance/Time</span>
                <input
                  // value={weight} 
                  name="distanceTime"
                  // onChange={handleInputChange} 
                  type="text"
                  placeholder=""
                  className='form-control'
                />
              </div>
              <div className="input-group">
                <span className="input-group-text">Equipment Required</span>
                <input
                  // value={weight} 
                  name="equipmentReq"
                  // onChange={handleInputChange} 
                  type="text"
                  placeholder=""
                  className='form-control'
                />
              </div>
              <div className="input-group">
                <span className="input-group-text">Notes</span>
                <input
                  // value={weight} 
                  name="notes"
                  // onChange={handleInputChange} 
                  type="text"
                  placeholder="instructions, focus points"
                  className='form-control'
                />
              </div>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className='btn onWhite' onClick={handleClose}>
            Close
          </Button>
          <Button className='btn onWhite' onClick={handleFormSubmit}>
            Add Exercise
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditWorkoutPlanModal;

