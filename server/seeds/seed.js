const db = require('../config/connection');
const { Exercises } = require('../models');
const exerciseSeeds = require('./exerciseSeeds.json');

db.once('open', async () => {
  try {
    await Exercises.deleteMany({});
    await Exercises.create(exerciseSeeds);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
