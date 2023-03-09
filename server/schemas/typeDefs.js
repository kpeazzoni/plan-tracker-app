const { gql } = require ('apollo-server-express');

const typeDefs = gql`
 type Trainers {
    _id: ID!
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    trainerSchedule: [{Schedules}]!
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
    exercises:[Exercises]!
 }
 type Exercises {
    muscleGroup: String!
    exerciseName: String!
    sets: String
    reps: String
    weight: String
    distance: String
    equipmentReq: String 
    notes: String
 }

type Mutation {
    addTrainer(email: String!, password: String!): Auth
    login (email: String!, password: String!): Auth
    addTrainee (firstName: String!, lastName: String!, dob: String!, demographics:[Demographics]!,traineeSchedule:[Schedules]!): Trainees
    
}

`
