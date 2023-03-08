const { Schema, model } = require('mongoose');

const exercisesSchema = new Schema({
    muscleGroup: {
      type: String,
      required: true,
    },
    exerciseName: {
        type: String,
        required: true,
    },
  });
  
  const Exercises = model('Exercises', exercisesSchema);
  
  module.exports = Exercises;