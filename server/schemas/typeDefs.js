const { gql } = require('apollo-server-express');

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
   trainer(trainerId: ID!) : Trainers
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
      trainerId: ID!
      ) : Trainees
   
   addDemographics(
      height: Int!,
      weight: Int!,
      goals: String!,
      injuryHistory: String!,
      notes: String!
      ) : Trainees
      
   
   removeTrainee(traineeId: ID!) : Trainees
   
   updateWorkouts(
      muscleGroup: String!,
      exerciseName: String!,
      sets: String,
      reps: String,
      weight: String,
      distance: String,
      equipmentReq: String,
      notes: String
      ) : Schedules
   
   addAppointment(
      date: String!,
      startTime: String!,
      endTime: String!,
      location: String,
      trainerId: ID!,
      traineeId: ID!,
      ) : Schedules
   
   updateAppointment(
      date: String!,
      startTime: String!,
      endTime: String!,
      location: String,
      trainerId: ID!,
      traineeId: ID!,
      ) : Schedules

   removeAppointment(schedulesId: ID!)
   }
`;

module.exports = typeDefs;

// trainerSchedules(trainerId: ID!): [Schedules]
// traineeSchedules(traineeId: ID!): [Schedules]