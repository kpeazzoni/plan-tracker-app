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
query Trainees($traineeId: ID!) {
  trainee(traineeId: $traineeId) {
    _id
    firstName
    lastName
    dob
    traineeSchedule {
      _id
      date
      endTime
      startTime
      trainerId {
        _id
      }
    }
    demographics {
      goals
      height
      injuryHistory
      notes
      weight
    }
  }
}
  `


export const QUERY_TRAINEES = gql `
query Trainees {
  trainees {
    _id
    dob
    firstName
    lastName
    demographics {
      goals
      height
      injuryHistory
      notes
      weight
    }
    traineeSchedule {
      _id
      date
      endTime
      startTime
      trainerId {
        _id
      }
    }
  }
}

`

export const QUERY_SCEHDULES = gql`
query Schedules {
  schedules {
    _id
    date
    endTime
    startTime
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