const db = require('../config/connection');
const { Exercises, Schedules, Trainees, Trainers } = require('../models');
const exerciseSeeds = require('./exerciseSeeds.json');
const scheduleSeeds = require('./scheduleSeeds.json');
const traineeSeeds = require('./traineeSeeds.json');
const trainerSeeds = require('./trainerSeeds.json');

db.once('open', async () => {
  try {
    await Exercises.deleteMany({});
    await Schedules.deleteMany({});
    await Trainers.deleteMany({});
    await Trainees.deleteMany({});

    await Exercises.insertMany(exerciseSeeds);
    const schedules = await Schedules.insertMany(scheduleSeeds);
    const trainers = await Trainers.insertMany(trainerSeeds);
    const trainees = await Trainees.insertMany(traineeSeeds);

    for (newTrainer of trainers) {
      newTrainer.newSeed = true;
      await newTrainer.save();

      newTrainer.newSeed = false;
      await newTrainer.save();
    }

    for (newTrainee of trainees) {
      // randomly add a trainer to each new trainee's 'trainerId' field
      const tempTrainer = trainers[Math.floor(Math.random() * trainers.length)];
      newTrainee.trainerId = tempTrainer._id;

      // reference the trainee in the trainer's 'trainees' array
      tempTrainer.trainees.push(newTrainee._id);
      await tempTrainer.save();

      await newTrainee.save();
    }

    for (newSchedule of schedules) {
      // randomly add a trainer to each schedule
      const tempTrainer = trainers[Math.floor(Math.random() * trainers.length)];
      newSchedule.trainerId = tempTrainer._id;

      // reference the schedule in the trainer's 'trainerSchedule' array
      tempTrainer.trainerSchedule.push(newSchedule._id);
      await tempTrainer.save();

      // randomly add a trainee id from the trainers 'trainees' array to each schedule
      const tempTraineeId = tempTrainer.trainees[Math.floor(Math.random() * tempTrainer.trainees.length)];
      newSchedule.traineeId = tempTraineeId;

      // filter through trainees to find one that matches the trainee id
      const tempTrainee = trainees.find((trainee)=> trainee._id === tempTraineeId );

      // reference the schedule in the trainee's 'traineeSchedule' array
      tempTrainee.traineeSchedule.push(newSchedule._id);
      await tempTrainee.save();

      await newSchedule.save();
    }

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
