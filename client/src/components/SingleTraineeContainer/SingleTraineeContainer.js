import React, { useState, useEffect } from "react";
import SingleTraineeInfo from "../../pages/SingleTraineeInfo";
import SingleTraineeAppts from "../../pages/SingleTraineeAppts";
import SingleTraineeWorkout from "../../pages/SingleTraineeWorkout";
import "./SingleTraineeContainer.css";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_TRAINEE } from "../../utils/queries";
import { UPDATE_APPOINTMENT } from "../../utils/mutations";
import { useParams } from "react-router-dom";
import UpdateTraineeModal from '../UpdateClientModal/UpdateTraineeModal'
import ScheduleAppointmentModal from "../ScheduleAppointmentModal/ScheduleAppointmentModal";
import EditWorkoutPlanModal from "../EditWorkoutPlanModal/EditWorkoutPlanModal";

function SingleTraineeContainer(props) {
  const [trainee, setTrainee] = useState();
  const [traineeAppts, setTraineeAppts] = useState();
  const [apptIndex, setApptIndex] = useState(0);
  const [updateAppointment] = useMutation(UPDATE_APPOINTMENT);
  const { traineeId } = useParams();

  const { data, error, refetch } = useQuery(QUERY_TRAINEE, 
    {
    variables: {
      traineeId: traineeId
    },
  });
  useEffect(() => {
    setTrainee(data?.trainee)
    setTraineeAppts(data?.trainee.traineeSchedule)

    // if (data?.trainee.traineeSchedule && apptIndex === null) {
    //   setApptIndex(0);
    // }
  },[data]);

  const singleTraineeSchedule = data?.trainee.traineeSchedule || {};
  const firstName = data?.trainee.firstName || "";
  const lastName = data?.trainee.lastName || "";
  const handleEditAppointment = (index, scheduleId, updatedFields) => {
    console.log(`Editing appointment at index ${index}`);
    updateAppointment({
      variables: {
        scheduleId,
        appointmentInput: updatedFields
      },
      update: (cache, { data: { updateAppointment } }) => {
        const dataInCache = cache.readQuery({
          query: QUERY_TRAINEE,
          variables: { traineeId: traineeId }
        });

        const updatedAppts = dataInCache.trainee.traineeSchedule.map((appt) => {
          if (appt._id === updateAppointment._id) {
            return { ...appt, ...updateAppointment };
          }
          return appt;
        });

        cache.writeQuery({
          query: QUERY_TRAINEE,
          variables: { traineeId: traineeId },
          data: {
            trainee: {
              ...dataInCache.trainee,
              traineeSchedule: updatedAppts
            }
          }
        });
      }
    });
  };

  if (error) {
    return <div>Error loading trainee data</div>;
  }


  return (
    <main>
      <h1 className="oneTrainee">{firstName} {lastName}</h1>
      <div className="singleTraineeContainer-wrapper">
        <aside className="col-lg-4">
          <div className="clientinfo-container">
            <div className="cardBtn">
              {trainee && (<UpdateTraineeModal trainee={trainee} refetch={refetch} />)}
            </div>
            <h3 className="card-title">Client Info</h3>
            {trainee && (
              <SingleTraineeInfo trainee={trainee} />
            )}
          </div>
        </aside>
  
        <aside className="col-lg-4">
          <div className="clientAppt-container">
            <div className="cardBtn">
              {trainee && (<ScheduleAppointmentModal trainee={trainee}
              traineeAppts = {traineeAppts}
              setTraineeAppts = {setTraineeAppts}
              refetch={refetch} />)}
            </div>
            <h3 className="card-title">Upcoming Appointments</h3>
            {trainee && (<SingleTraineeAppts
              traineeAppts={traineeAppts}
              setTraineeAppts={setTraineeAppts}
              setApptIndex={setApptIndex}
              refetch={refetch}
              trainee = {trainee}
              apptIndex= {apptIndex}
              handleEditAppointment={handleEditAppointment}
            />)}
          </div>
        </aside>
  
        <aside className="col-lg-4">
          <div className="clientWorkOuts-container">
            <div className="cardBtn">
              {trainee && (<EditWorkoutPlanModal trainee={trainee} traineeAppts={traineeAppts} setTraineeAppts={setTraineeAppts} 
               refetch={refetch}
               traineeApptIndex={apptIndex} />)}
            </div>
            <h3 className="card-title">Workout Plan</h3>
            {trainee && (<SingleTraineeWorkout
              setTraineeAppts={setTraineeAppts}
              traineeAppts={traineeAppts}
              refetch={refetch}
              apptIndex={apptIndex}
              onEditAppointment={handleEditAppointment}
            />)}
          </div>
        </aside>
      </div>
    </main>
  );
  
  
}

export default SingleTraineeContainer;
