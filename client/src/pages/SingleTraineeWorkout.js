import React, {useState, useEffect} from 'react';
import dayjs from "dayjs";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import {useMutation, useQuery } from '@apollo/client';
import {REMOVE_WORKOUTS} from "../utils/mutations";
import {UPDATE_WORKOUTS} from "../utils/mutations";
import {QUERY_EXERCISES} from '../utils/queries'

var editedWorkoutId

function SingleTraineeWorkout({ traineeAppts, apptIndex, refetch}) {

    const [removeWorkouts] = useMutation(REMOVE_WORKOUTS)
    const [updateWorkouts] = useMutation(UPDATE_WORKOUTS)
    const { loading, data } = useQuery(QUERY_EXERCISES);

    const exerciseList = data?.exercises || [];

    const [show, setShow] = useState(false);
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

    const muscleGroups = []

    exerciseList.map((exercise) => {
      return (muscleGroups.push(exercise.muscleGroup))
    });
    const isolatedGroups = [...new Set(muscleGroups)];
    const [selectedGroup, setSelectedGroup] = useState("");
    const optionsArr = [];
  
    useEffect(() => populateExercises(selectedGroup), [selectedGroup]) 

    const exercisesArr = [];

  exerciseList.map((exercise) => {
    return (exercisesArr.push(exercise)
    );
  });

  populateExercises(selectedGroup)


  function populateExercises(selectedGroup) {
    // console.log("44", selectedGroup.muscleGroup)
    switch (selectedGroup.muscleGroup) {
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
    if (traineeAppts.length > 0) {
    const appt = traineeAppts && traineeAppts [apptIndex];
    const apptDay = dayjs(appt.startDate).format('MM/DD/YYYY');
    
    const handleRemoveWorkouts = async (e) => {
        e.preventDefault();
        try {
          const { data, error } = await removeWorkouts({
            variables: { scheduleId: appt._id, workoutId: e.target.id},
          });
        } catch (err) {
          console.error(err);
        }
      }

      const handleInputChange = async (e) => {
        const { name, value } = e.target;
        await setSelectedGroup({ [name]: value });
        optionsArr.length = 0;
        setFormState({
          ...formState,
          [name]: value,
        });
      }
      // let editedWorkoutId ;
      const handleEdit = (workout) => {
        setFormState(workout);
        editedWorkoutId = workout._id
        console.log(editedWorkoutId)
        setShow(true);
      };
  console.log(editedWorkoutId)
      const handleFormSubmit = async (e, workout) => {

        try {
          const { data } = await updateWorkouts({
            variables: { scheduleId: appt._id, workoutId: editedWorkoutId, ...formState},
          });
          setShow(false);
          setFormState(0);
          refetch()
        } catch (e) {
          console.error(e);
        }
      };
      
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState({
          ...formState,
          [name]: value,
        });
      };

      const handleClose = () => {
        setShow(false);
        setFormState(0);
      };

      const handleCancel = () => {
        setShow(false);
        setFormState(0);
      };
    
    return (
        <>
        <h5><b>Selected Appointment: </b>{apptDay}</h5>
        
        <div className='overflow-auto scroll'>
        
        
            {appt.workouts.length ? appt.workouts.map((workout, i) => (
            <div className='clientWorkOuts-cards'>     

                <h4 className="card-text">{workout.exerciseName}</h4>
                <h5 className="card-text">Reps: {workout.reps} Sets: {workout.sets}</h5>
                <h5 className="card-text">Weight: {workout.weight} Equipment: {workout.equipmentReq}</h5>
                <h5 className="card-text">Distance/Time: {workout.distanceOrTime}</h5>
                <h5 className="card-text">Notes: {workout.notes}</h5>
                <Button className='btn btn-sm onWhite' id={workout._id} onClick={() => handleEdit(workout)}>
                  Edit
                </Button>
                <button className= 'btn btn-sm btn-danger onWhite' id={workout._id}
                 onClick= {handleRemoveWorkouts}
                >Delete</button>
            </div>
            )) : (
                <>
                <h3><i>No Workouts Added!</i></h3>
                </>
            )}
    </div>
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
                  <option value={formState.muscleGroup}>{formState.muscleGroup}</option>
                  {isolatedGroups.map((group) => {
                    return (
                      <option key={group} name='muscleGroup' value={group}>
                        {group}
                      </option>
                    );
                  })}
                </select>
                <select
                  name="exerciseName"
                  onChange={handleChange}
                  className="form-control"
                >
                  <option value={formState.exerciseName}>{formState.exerciseName}</option>
                  {/* {optionsArr.sort()} */}
                  {optionsArr.map((option) => {
                    return (
                      <option key={option} name='exerciseName' value={option}>
                        {option}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="input-group">
                <span className="input-group-text">Sets x Reps</span>
                <input
                  value={formState.sets}
                  name="sets"
                  onChange={handleChange}
                  type="number"
                  placeholder="sets"
                  className='form-control'
                />
                <input
                  value={formState.reps}
                  name="reps"
                  onChange={handleChange}
                  type="number"
                  placeholder="reps"
                  className='form-control'
                />
              </div>
              <div className="input-group">
                <span className="input-group-text">Weight</span>
                <input
                  value={formState.weight}
                  name="weight"
                  onChange={handleChange}
                  type="Number"
                  placeholder="lbs"
                  className='form-control'
                />
              </div>
              <div className="input-group">
                <span className="input-group-text">Distance/Time</span>
                <input
                  value={formState.distanceOrTime}
                  name="distanceOrTime"
                  onChange={handleChange}
                  type="text"
                  placeholder=""
                  className='form-control'
                />
              </div>
              <div className="input-group">
                <span className="input-group-text">Equipment Required</span>
                <input
                  value={formState.equipmentReq}
                  name="equipmentReq"
                  onChange={handleChange}
                  type="text"
                  placeholder=""
                  className='form-control'
                />
              </div>
              <div className="input-group">
                <span className="input-group-text">Notes</span>
                <input
                  value={formState.notes}
                  name="notes"
                  onChange={handleChange}
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
          <Button className='btn onWhite'
            onClick={handleFormSubmit}
          >
            Update Exercise
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    );} else {return <> <h3><i>No Appointments Scheduled!</i></h3>
    </>}
};
export default SingleTraineeWorkout;