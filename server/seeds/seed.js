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

    // const schools = await School.insertMany(schoolData);
    // const classes = await Class.insertMany(classData);
    // const professors = await Professor.insertMany(professorData);
    await Exercises.insertMany(exerciseSeeds);
    const schedules = await Schedules.insertMany(scheduleSeeds);
    const trainers = await Trainers.insertMany(trainerSeeds);
    const trainees = await Trainees.insertMany(traineeSeeds);

    for (newSchedule of schedules) {
      // randomly add a trainer to each schedule
      const tempTrainer = trainers[Math.floor(Math.random() * trainers.length)];
      newSchedule.trainerId = tempTrainer._id;

      // reference schedule on trainer model, too
      tempTrainer.trainerSchedule.push(newSchedule._id);
      await tempTrainer.save();

      // randomly add a trainee to each schedule
      const tempTrainee = trainees[Math.floor(Math.random() * trainees.length)];
      newSchedule.traineeId = tempTrainee._id;

      // reference schedule on trainee model, too
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
