const { gql } = require ('apollo-server-express');

const typeDefs = gql`
 type Trainers {
    _id: ID!
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    trainerSchedule: [Schedules]!
 }
 type Trainees {
    _id: ID!
    firstName: String!
    lastName: String!
    dob: String!  
    demographics:[Demographics]!
    traineeSchedule:[Schedules]!
 }
 type Demographics{
    height: Int!
    weight: Int!
    goals: String!
    injuryHistory: String!
    notes: String!
 }
 type Schedules{
    _id: ID!
    date: String!
    startTime: String!
    endTime: String!
    location: String
    trainerId:[Trainers]!
    traineeId: [Trainees]!
    workouts:[Workouts]!
 }
 type Workouts{
   muscleGroup: String!
   exerciseName: String!
   sets: String
   reps: String
   weight: String
   distance: String
   equipmentReq: String 
   notes: String
 }
 type Exercises {
    _id: ID!
    muscleGroup: String!
    exerciseName: String!
 }
 type Auth {
    token: ID!
    user: Trainers
  }

type Query {
   trainers: [Trainers]
   trainer(trainerId: ID!): Trainers
   trainees: [Trainees]
   trainee(traineeId: ID!): Trainees
   me: Trainers
   schedules: [Schedules]
   exercises: [Exercises]
}

type Mutation {
    addTrainer(firstName: String!, lastName: String!,email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

   addTrainee (
      firstName: String!, 
      lastName: String!, 
      dob: String!, 
      demographics:[Demographics]!,
      traineeSchedule:[Schedules]!
      ): Trainees
   updateTrainee(
      fistName: String!,
      lastName: String!
      deomographics: [Demographics]!,
      traineeSchedule: [Schedules]!
      ) : Trainees
   removeTrainee(traneeId: ID!) : Trainees
   addExercise (muscleGroup: String!, exerciseName: String!) : Exericses
   updateWorkouts(
      muscleGroup: String!,
      exerciseName: String!,
      sets: String, reps: String,
      weight: String,
      distance: String,
      equipmentReq: String,
      notes: String
      ) : Workouts
   removeExercise(workoutsId: ID!) : Workouts

   addAppointment(
      date: String!,
      startTime: String!,
      endTime: String!,
      location: String,
      trainerId: [Trainers]!,
      traneeId[Trainees]!,
      workouts:[Workouts]!
      ) : Schedules
   updateAppointment(
      date: String!,
      startTime: String!,
      endTime: String!,
      location: String,
      trainerId: [Trainers]!,
      traneeId[Trainees]!,
      workouts:[Workouts]!
      ) : Schedules
   removeAppointment(schedulesId: ID!): Schedules
   
   }


`;

module.exports = typeDefs;

// trainerSchedules(trainerId: ID!): [Schedules]
// traineeSchedules(traineeId: ID!): [Schedules]