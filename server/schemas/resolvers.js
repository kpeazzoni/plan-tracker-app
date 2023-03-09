const { AuthenticationError } = require('apollo-server-express');
const { Exercises, Schedules, Trainees, Trainers } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    trainers: async () => {
      return Trainers.find().populate('trainerSchedule');
    },
    trainer: async (parent, { trainerId }) => {
        return Trainers.findOne({ _id: trainerId });
    },
    trainees: async () => {
        return Trainees.find().populate('demographics').populate('traineeSchedule');
    },
    trainee: async (parent, { traineeId }) => {
        return Trainees.findOne({ _id: traineeId });
    },
    schedules: async (parent, { traineeId, trainerId }) => {
        let params = {};

        if(traineeId) {
            params = { traineeId }
        };
        
        if(trainerId) {
            params = { trainerId }
        };

        return Schedules.find(params).populate('workouts');
    },
    // trainerSchedules: async () => {
    //     return Schedules.find().populate('workouts');
    // },
    // traineeSchedules: async () => {
    //     return Schedules.find().populate('workouts');
    // },    
    exercises: async () => {
        return Exercises.find();
    },
  },
  Mutation: {
    addTrainer: async (parent, { lastName, firstName, email, password }) => {
      const user = await Trainers.create({ lastName, firstName,  email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await Trainers.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
  }

};

module.exports = resolvers;
