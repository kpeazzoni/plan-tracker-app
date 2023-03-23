import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { QUERY_EXERCISES, QUERY_TRAINEE } from '../../utils/queries';
import { useMutation } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { ADD_WORKOUTS } from "../../utils/mutations"


function EditWorkoutPlanModal({ trainee, traineeAppts, setTraineeAppts, refetch, traineeApptIndex }) {
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
  const optionsArr = [];

  useEffect(() => populateExercises(selectedGroup), [selectedGroup])

  const handleInputChange = async (e) => {
    const { name, value } = e.target;
    await setSelectedGroup({ [name]: value });
    optionsArr.length = 0;
    setFormState({
      ...formState,
      [name]: value,
    });
    // populateExercises(selectedGroup);
  }
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
  // const [trainee, setTrainee] = useState();
  const [addWorkouts] = useMutation(ADD_WORKOUTS);


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
  const { _id } = trainee; //trainee.traineeSchedule
  const appointment = traineeAppts[traineeApptIndex]
  // console.log(appointment);
  // console.log(_id);
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await addWorkouts({
        variables: { scheduleId: appointment._id, traineeId: _id, ...formState },
      });

      refetch();
      
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
      setShow(false); // Close the modal after form submission
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Button className='btn onWhite' onClick={handleShow}>
        Add Workout
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
                  <option>Exercises</option>
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
            Add Exercise
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditWorkoutPlanModal;
