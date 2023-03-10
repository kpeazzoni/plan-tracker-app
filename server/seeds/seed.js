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

    await Exercises.create(exerciseSeeds);
    await Trainers.create(trainerSeeds);
    await Trainees.create(traineeSeeds);

    for (let i = 0; i < scheduleSeeds.length; i++) {
      const { _id,  } = await Schedules.create([...scheduleSeeds[i], ]);
      const user = await Trainer.findOneAndUpdate(
        { username: thoughtAuthor },
        {
          $addToSet: {
            thoughts: _id,
          },
        }
      );
    };

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
