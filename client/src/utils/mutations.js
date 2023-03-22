  import { gql } from '@apollo/client';

export const LOGIN_TRAINER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        firstName
        lastName
        
      }
    }
  }
`;

export const ADD_TRAINER = gql`
  mutation addTrainer($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
    addTrainer(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
      token
      user {
        _id
        firstName
        lastName
      }
    }
  }
`;

export const ADD_TRAINEE = gql`
mutation Mutation($firstName: String!, $lastName: String!, $dob: String!,  $goals: String!, $height: Int!, $injuryHistory: String!, $notes: String!, $weight: Int!) {
  addTrainee(firstName: $firstName, lastName: $lastName, dob: $dob, goals: $goals, height: $height, injuryHistory: $injuryHistory, notes: $notes, weight: $weight) {
    _id
    firstName
    lastName
    dob
    demographics {
      goals
      height
      injuryHistory
      notes
      weight
    }
    traineeSchedule {
      _id
      endDate
      location
      startDate
      trainerId {
        _id
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
}
`;
export const ADD_APPOINTMENT = gql`
mutation Mutation($startDate: String!, $endDate: String!, $location: String, $traineeId: ID!) {
  addAppointment(startDate: $startDate, endDate: $endDate, location: $location, traineeId: $traineeId) {
    _id
  }
}
`;
export const ADD_DEMOGRAPHICS = gql`
mutation Mutation($traineeId: ID!, $height: Int!, $weight: Int!, $goals: String!, $injuryHistory: String!, $notes: String!) {
  addDemographics(traineeId: $traineeId, height: $height, weight: $weight, goals: $goals, injuryHistory: $injuryHistory, notes: $notes) {
    _id
    demographics {
      goals
      height
      injuryHistory
      notes
      weight
    }
    dob
    firstName
    lastName
    trainerId {
      _id
    }
  }
}
`;
export const ADD_WORKOUTS = gql`
mutation AddWorkouts($traineeId: ID!, $scheduleId: ID!, $muscleGroup: String!, $exerciseName: String!, $sets: String, $reps: String, $weight: String, $distanceOrTime: String, $equipmentReq: String, $notes: String) {
  addWorkouts(traineeId: $traineeId, scheduleId: $scheduleId, muscleGroup: $muscleGroup, exerciseName: $exerciseName, sets: $sets, reps: $reps, weight: $weight, distanceOrTime: $distanceOrTime, equipmentReq: $equipmentReq, notes: $notes) {
    _id
    workouts {
      distanceOrTime
      equipmentReq
      exerciseName
      muscleGroup
      notes
      reps
      sets
      weight
    }
    traineeId {
      _id
    }
  }
}
`;
export const REMOVE_APPOINTMENT = gql`
mutation Mutation($scheduleId: ID!) {
  removeAppointment(scheduleId: $scheduleId) {
    _id
  }
}
`;
export const REMOVE_TRAINEE = gql`
mutation Mutation($traineeId: ID!) {
removeTrainee(traineeId: $traineeId) {
  _id 
    traineeSchedule {
      _id
    }
  }
}
`;


export const REMOVE_WORKOUTS = gql`
mutation Mutation($scheduleId: ID!, $workoutId: ID!) {
  removeWorkouts(scheduleId: $scheduleId, workoutId: $workoutId) {
    _id
    workouts {
      _id
    }
  }
}
`;
export const UPDATE_APPOINTMENT = gql`
mutation Mutation($scheduleId: ID!, $startDate: String!, $endDate: String!, $location: String) {
  updateAppointment(scheduleId: $scheduleId, startDate: $startDate, endDate: $endDate, location: $location) {
    _id
    startDate
    endDate
    location
  }
}
`;
export const UPDATE_WORKOUTS = gql`
mutation updateWorkouts($traineeId: ID!,$scheduleId: ID!, $muscleGroup: String!, $exerciseName: String!, $sets: String, $reps: String, $weight: String, $distanceOrTime: String, $equipmentReq: String, $notes: String) {
  updateWorkouts(traineeId: $traineeId, scheduleId: $scheduleId, muscleGroup: $muscleGroup, exerciseName: $exerciseName, sets: $sets, reps: $reps, weight: $weight, distanceOrTime: $distanceOrTime, equipmentReq: $equipmentReq, notes: $notes) {
    _id
    traineeId {
      _id
    }
    trainerId {
      _id
    }
  }
}
`;