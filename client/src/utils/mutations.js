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
  mutation addTrainer($firstName: String!,$lastName: String!, $email: String!, $password: String!) {
    addTrainer(fistName: $firstName, lastName: $lastName, email: $email, password: $password) {
      token
      user {
        _id
        firstName
        lastName

      }
    }
  }
`;



