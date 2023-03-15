const { gql } = require('apollo-server-express');

const typeDefs = gql`
 type Trainers {
    _id: ID!
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    trainees: [Trainees]!
    trainerSchedule: [Schedules]!
}
 type Trainees {
    _id: ID!
    firstName: String!
    lastName: String!
    dob: String!  
    trainerId: Trainers
    demographics:[Demographics]!
    traineeSchedule:[Schedules]!
}
 type Demographics {
    height: Int!
    weight: Int!
    goals: String!
    injuryHistory: String!
    notes: String!
}
 type Schedules {
    _id: ID!
    startDate: String!
    endDate: String!
    location: String
    trainerId:Trainers!
    traineeId: Trainees!
    workouts:[Workouts]!
}
 type Workouts {
   _id: ID!
   muscleGroup: String!
   exerciseName: String!
   sets: String
   reps: String
   weight: String
   distanceOrTime: String
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
   schedules(trainerId: ID, traineeId: ID): [Schedules]
   schedule(scheduleId: ID!): Schedules
   exercises: [Exercises]
}

type Mutation {
   addTrainer(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
   ) : Auth
    
   login(email: String!, password: String!): Auth

   addTrainee (
      firstName: String!, 
      lastName: String!, 
      dob: String!, 
      goals: String!
      height: Int!
      injuryHistory: String!
      notes: String!
      weight: Int!
   ) : Trainees   
   
   addDemographics(
      traineeId: ID!
      height: Int!,
      weight: Int!,
      goals: String!,
      injuryHistory: String!,
      notes: String!
   ) : Trainees
   
   removeTrainee(traineeId: ID!) : Trainees
   
   updateWorkouts(
      traineeId: ID!
      scheduleId: ID!
      muscleGroup: String!,
      exerciseName: String!,
      sets: String,
      reps: String,
      weight: String,
      distanceOrTime: String,
      equipmentReq: String,
      notes: String
   ) : Schedules

   addWorkouts(
      traineeId: ID!
      scheduleId: ID!
      muscleGroup: String!,
      exerciseName: String!,
      sets: String,
      reps: String,
      weight: String,
      distanceOrTime: String,
      equipmentReq: String,
      notes: String
   ) : Schedules
   
   removeWorkouts(scheduleId: ID!, workoutId: ID!) : Schedules
   
   addAppointment(
      startDate: String!,
      endDate: String!,
      location: String,
      traineeId: ID!,
   ) : Schedules
   
   updateAppointment(
      scheduleId: ID!
      startDate: String!,
      endDate: String!,
      location: String,
      traineeId: ID!,
   ) : Schedules

   removeAppointment(scheduleId: ID!) : Schedules
}
`;

module.exports = typeDefs;

// trainerSchedules(trainerId: ID!): [Schedules]
// traineeSchedules(traineeId: ID!): [Schedules]