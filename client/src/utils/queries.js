import { gql } from '@apollo/client';

export const QUERY_TRAINERS = gql `
query Query($trainerId: ID!) {
    trainers(trainerId: $trainerId) {
        _id
    firstName
    lastName
    email
    password
    trainerSchedule {
      _id
      date
      startTime
      endTime
      location
    }
    }
  }
`

export const QUERY_TRAINER = gql `
query Query {
  trainer {
    _id
    firstName
    lastName
    email
    password
  }
}
`

export const QUERY_TRAINEE = gql `
query Query {
    trainee {
      _id
      dob
      firstName
      lastName
      demographics {
        height
        weight
        goals
        injuryHistory
        notes
      }
    }
  }
  `


export const QUERY_TRAINEES = gql `
query Query($traineeId: ID!) {
  trainees(traineeId: $traineeId) {
    _id
    dob
      firstName
      lastName
      demographics {
        height
        weight
        goals
        injuryHistory
        notes
      }
  }
}

`

export const QUERY_SCEHDULES = gql`
query Query($scheduleId: ID!) {
    schedules(scheduleId: $scheduleId) {
      _id
      date
      startTime
      endTime
      location
      traineeId {
        _id
        firstName
        lastName
      }
      trainerId {
        _id
      }
      workouts {
        _id
        distance
        equipmentReq
        exerciseName
        muscleGroup
        notes
        reps
        sets
        weight
      }
    }
  }
`

export const QUERY_ME = gql`
query Query {
    me {
      _id
      firstName
      lastName
      email
      password
      trainerSchedule {
        _id
        date
        startTime
        endTime
        location
        traineeId {
          _id
          firstName
          lastName
        }
      }
    }
  }
  `