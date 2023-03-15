import { gql } from '@apollo/client';

export const QUERY_TRAINERS = gql `
query Trainers($trainerId: ID!) {
    trainer(trainerId: $trainerId) {
        _id
    firstName
    lastName
    email
    password
    trainerSchedule {
      _id
      startDate
      endDate
      location
    }
    }
  }
`

export const QUERY_TRAINER = gql `
  query Trainers($trainerId: ID!) {
    trainer(trainerId: $trainerId) {
        _id
    firstName
    lastName
    email
    password
    trainerSchedule {
      _id
      startDate
      endDate
      location
    }
    trainees {
      _id
      lastName
      firstName
      dob
    }
    }
  }
`

export const QUERY_TRAINEES = gql `
query Trainees {
  trainees {
    _id
    firstName
    lastName
    dob
    traineeSchedule {
      _id
      startDate
      endDate
      workouts {
        _id
        distanceOrTime
        equipmentReq
        exerciseName
        muscleGroup
        notes
        reps
        sets
        weight
      }
      trainerId {
        _id
      }
    }
    demographics {
      height
      weight
      goals
      notes
      injuryHistory
    }
  }
}
  `
export const QUERY_TRAINEE = gql `
query Trainees($traineeId: ID!) {
  trainee(traineeId: $traineeId) {
    _id
    firstName
    lastName
    dob
    traineeSchedule {
      _id
      startDate
      endDate
      workouts {
        _id
        distanceOrTime
        equipmentReq
        exerciseName
        muscleGroup
        notes
        reps
        sets
        weight
      }
      trainerId {
        _id
      }
    }
    demographics {
      height
      weight
      goals
      notes
      injuryHistory
    }
  }
}
  `

// export const QUERY_TRAINEES = gql `
// query Query($trainerId: ID!) {
//   trainees(trainerId: $trainerId) {
//     _id
//     firstName
//     lastName
//     dob
//   }
// }
// `

export const QUERY_SCHEDULES = gql`
query Schedules($trainerId: ID!) {
  schedules(trainerId: $trainerId) {
    _id
    endDate
    startDate
    traineeId {
      _id
      firstName
      lastName
    }
    trainerId {
      _id
      firstName
      lastName
    }
    workouts {
      _id
      distanceOrTime
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
      trainerSchedule {
        _id
        startDate
        endDate
        location
        traineeId{
          _id
          firstName
          lastName
        }
      }
      trainees {
        _id
        firstName
        lastName
        dob
      }
    }
  }
  `

  export const QUERY_EXERCISES = gql`
  query Query {
    exercises {
      _id
      muscleGroup 
      exerciseName
    }
  }
  `