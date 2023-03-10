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

    me: async (parent, args, context) => {
      if (context.trainer) {
        return Trainers.findOne({ _id: context.trainer._id }).populate('/');
      }
      throw new AuthenticationError('You need to be logged in!');
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

    addTrainee: async (parent, {firstName, lastName, dob, trainerId }, context) => {
      if (context) {
        const trainee = await Trainees.create({
          firstName, 
          lastName, 
          dob,
          trainerId
        });
        await Trainers.findOneAndUpdate(
          {_id: trainerId},
          {$addToSet: { trainees: trainee._id}}
        );
        return trainee;
      }
      // throw new AuthenticationError('You need to be logged in!');
      },

      addAppointment: async (parent, { date, startTime, endTime, location, trainerId, traineeId }, context) => {
        if (context) {
          const appointment = await Schedules.create({
            date,
            startTime,
            endTime,
            location,
            trainerId, 
            traineeId
          });
  
          await Trainers.findOneAndUpdate(
            { _id: trainerId },
            { $addToSet: { trainerSchedule: appointment._id } }
          );
          await Trainees.findOneAndUpdate(
            { _id: traineeId },
            { $addToSet: { traineeSchedule: appointment._id } }
          );
  
          return appointment;
        }
        throw new AuthenticationError('You need to be logged in!');
      },
  
      addDemographics: async (parent, { traineeId, height, weight, goals, injuryHistory, notes }, context) => {
        if (context) {
          return Trainees.findOneAndUpdate(
            { _id: traineeId },
            // the above works with hardcoded 'traineeId'
            {
              $addToSet: {
                demographics: { height, weight, goals, injuryHistory, notes },
              },
            },
            {
              new: true,
              runValidators: true,
            }
          );
        }
        // throw new AuthenticationError('You need to be logged in!');
      },

      
    removeTrainee: async (parent, { traineeId }, context) => {
      if (context) {
        const trainee = await Trainees.findOneAndDelete({
          _id: traineeId,
        }
        );

        await Trainers.findOneAndUpdate(
          { _id: trainee.trainerId },
          { $pull: { trainees: trainee._id } }
        );

        return trainee;
      }
      // throw new AuthenticationError('You need to be logged in!');
    },

    addWorkouts: async (parent, { scheduleId, muscleGroup, exerciseName, sets, reps, weight, distance, equipementReq, notes }, context) => {
      if (context) {
        return Schedules.findOneAndUpdate(
          { _id: "640abceb6ebec88730d4f6dd" },
          // the above works with hardcoded 'scheduleId'
          {
            $addToSet: {
              workouts: { muscleGroup, exerciseName, sets, reps, weight, distance, equipementReq, notes },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      // throw new AuthenticationError('You need to be logged in!');
    },

    removeAppointment: async (parent, { scheduleId }, context) => {
      if (context) {
        const appointment = await Schedules.findOneAndDelete({
          _id: scheduleId,
        });

        await Trainers.findOneAndUpdate(
          { _id: appointment.trainerId },
          { $pull: { trainerSchedule: appointment._id } }
        );
        await Trainees.findOneAndUpdate(
          { _id: appointment.traineeId },
          { $pull: { traineeSchedule: appointment._id } }
        );

        return appointment;
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    updateAppointment: async (parent, { scheduleId, date, startTime, endTime, location, trainerId, traineeId }, context) => {
      if (context) {
        return Schedules.findOneAndUpdate(
          { _id: scheduleId },
          //the above works with hardcoded 'scheduleId'
          {
            $set: {
              date,
              startTime,
              endTime,
              location,
              trainerId,
              traineeId
//make trainerId and traineeId not required???
            },
          },
        );
      }
      // throw new AuthenticationError('You need to be logged in!');
    },

    removeWorkouts:  async (parent, { scheduleId, workoutId }, context) => {
      if (context) {
        return Schedules.findOneAndUpdate(
          { _id: scheduleId },
          {
            $pull: {
              workouts: {
                _id: workoutId,              
              },
            },
          },
          { new: true }
        );
      }
      // throw new AuthenticationError('You need to be logged in!');
    },

    removeWorkouts:  async (parent, { scheduleId, workoutId }, context) => {
      if (context) {
        return Schedules.findOneAndUpdate(
          { _id: scheduleId },
          {
            $pull: {
              workouts: {
                _id: workoutId,              
              },
            },
          },
          { new: true }
        );
      }
      // throw new AuthenticationError('You need to be logged in!');
    },
    
    updateWorkouts: async (parent, { scheduleId, workoutId, muscleGroup, exerciseName, sets, reps, weight, distance, equipementReq, notes }, context) => {
      if (context) {
        return Schedules.updateOne(
          {   _id: scheduleId, workouts_id: workoutId
           },
          {
            $set: {
              muscleGroup, exerciseName, sets, reps, weight, distance, equipementReq, notes
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      // throw new AuthenticationError('You need to be logged in!');
    },


  }
};

module.exports = resolvers;
