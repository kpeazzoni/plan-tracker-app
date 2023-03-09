const { AuthenticationError } = require('apollo-server-express');
const { Exercises, Schedules, Trainees, Trainers } = require('../models');
// const { signToken } = require('../utils/auth');

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
};

module.exports = resolvers;
