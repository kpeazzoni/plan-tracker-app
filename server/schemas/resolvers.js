const { AuthenticationError } = require("apollo-server-express");
const { Exercises, Schedules, Trainees, Trainers } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    //trainers:[Trainers]
    trainers: async () => {
      return (
        Trainers.find()
          .populate("trainerSchedule")
          // .populate({path: 'trainerSchedule', populate: 'trainerId'})
          .populate({
            path: "trainerSchedule",
            populate: [{ path: "trainerId" }, { path: "traineeId" }],
          })
      );
    },
    //trainer:Trainers
    trainer: async (parent, { trainerId }) => {
      return Trainers.findOne({ _id: trainerId })
        .populate("trainerSchedule")
        .populate({
          path: "trainerSchedule",
          populate: [{ path: "trainerId" }, { path: "traineeId" }],
        })
        .populate("trainees");
    },
    //trainees:[Trainees]
    trainees: async (parent, args, context) => {
      if (context.user) {
        return Trainees.find({ trainerId: context.user._id })
          .populate("demographics")
          .populate("traineeSchedule")
          .populate({
            path: "traineeSchedule",
            populate: [
              { path: "trainerId" },
              { path: "traineeId" },
              { path: "workouts" },
            ],
          });
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    //trainee:Trainees
    trainee: async (parent, { traineeId }) => {
      return Trainees.findOne({ _id: traineeId })
        .populate("demographics")
        .populate("traineeSchedule")
        .populate({
          path: "traineeSchedule",
          populate: [
            { path: "trainerId" },
            { path: "traineeId" },
            { path: "workouts" },
          ],
        });
    },

    schedules: async (parent, { traineeId, trainerId }) => {
      if (context.user) {
        let params = {};

        if (traineeId) {
          params = { traineeId };
        }

        if (trainerId) {
          params = { trainerId };
        }

        return Schedules.find(params)
          .populate("workouts")
          .populate("trainerId")
          .populate("traineeId");
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    me: async (parent, arg, context) => {
      if (context.user) {
        return Trainers.findOne({ _id: context.user._id })
          .populate({
            path: "trainerSchedule",
            populate: [{ path: "trainerId" }, { path: "traineeId" }],
          })
          .populate("trainees");
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    exercises: async () => {
      return Exercises.find();
    },
  },

  Mutation: {
    addTrainer: async (parent, { lastName, firstName, email, password }) => {
      const user = await Trainers.create({
        lastName,
        firstName,
        email,
        password,
      });
      const token = signToken(user);
      return { token, user };
    },

    login: async (parent, { email, password }) => {
      const user = await Trainers.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },

    addTrainee: async (
      parent,
      { firstName, lastName, dob, email, goals, height, injuryHistory, notes, weight },
      context
    ) => {
      if (context.user) {
        const trainee = await Trainees.create({
          firstName,
          lastName,
          dob,
        
          trainerId: context.user._id,
        });
        await Trainers.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { trainees: trainee._id } }
        );
        await Trainees.findOneAndUpdate(
          { _id: trainee._id },

          {
            $push: {
              demographics: { goals, height, injuryHistory, notes, weight, email },
            },
          }
        );
        return trainee;
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    addAppointment: async (
      parent,
      { startDate, endDate, location, traineeId },
      context
    ) => {
      if (context.user) {
        const appointment = await Schedules.create({
          startDate,
          endDate,
          location,
          trainerId: context.user._id,
          traineeId,
        });

        await Trainers.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { trainerSchedule: appointment._id } }
        );
        await Trainees.findOneAndUpdate(
          { _id: traineeId },
          { $addToSet: { traineeSchedule: appointment._id } }
        );

        return appointment;
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    addDemographics: async (
      parent,
      { traineeId, height, weight, goals, injuryHistory, notes, email },
      context
    ) => {
      if (context) {
        return Trainees.findOneAndUpdate(
          { _id: traineeId },
          {
            $addToSet: {
              demographics: { height, weight, goals, injuryHistory, notes, email  },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    removeTrainee: async (parent, { traineeId }, context) => {
      if (context) {
        const trainee = await Trainees.findOneAndDelete({
          _id: traineeId,
        });

        await Trainers.findOneAndUpdate(
          { _id: trainee.trainerId },
          { $pull: { trainees: trainee._id } }
        );

        console.log(trainee, "this is trainee in traineeSchedule");
        trainee.traineeSchedule.forEach(async (schedule) => {
          console.log(schedule._id, "trainee schedule id");
          await Trainers.findOneAndUpdate(
            { _id: trainee.trainerId },
            { $pull: { trainerSchedule: schedule._id } }
          );
        });

        return trainee;
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    addWorkouts: async (
      parent,
      {
        traineeId,
        scheduleId,
        muscleGroup,
        exerciseName,
        sets,
        reps,
        weight,
        distanceOrTime,
        equipmentReq,
        notes,
      },
      context
    ) => {
      if (context) {
        return Schedules.findOneAndUpdate(
          { _id: scheduleId },
          {
            $addToSet: {
              workouts: {
                muscleGroup,
                exerciseName,
                sets,
                reps,
                weight,
                distanceOrTime,
                equipmentReq,
                notes,
              },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw new AuthenticationError("You need to be logged in!");
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
      throw new AuthenticationError("You need to be logged in!");
    },

    updateAppointment: async (parent, { scheduleId, startDate, endDate, location }, context) => {
      if (context.user) {
        return Schedules.findOneAndUpdate(
          { _id: scheduleId },
          {
            $set: {
              startDate,
              endDate,
              location,
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    removeWorkouts: async (parent, { scheduleId, workoutId }, context) => {
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
      throw new AuthenticationError("You need to be logged in!");
    },

    updateWorkouts: async (
      parent,
      {
        workoutId,
        scheduleId,
        muscleGroup,
        exerciseName,
        sets,
        reps,
        weight,
        distanceOrTime,
        equipmentReq,
        notes,
      },
      context
    ) => {
      if (context) {
        return Schedules.findOneAndUpdate(
          { _id: scheduleId, "workouts._id": workoutId},
          {
            $set: {
              "workouts.$": {
                _id: workoutId,
                muscleGroup,
                exerciseName,
                sets,
                reps,
                weight,
                distanceOrTime,
                equipmentReq,
                notes,
              },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
