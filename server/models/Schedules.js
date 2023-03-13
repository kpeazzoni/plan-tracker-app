const { Schema, model } = require('mongoose');

const scheduleSchema = new Schema({
    startDate: {
        type: String,
        required: true,
    },
    endDate: {
        type: String,
        required: true,
    },
    location: {
        type: String,
    },
    trainerId: {
        type: Schema.Types.ObjectId,
        ref: 'Trainers',
    },
    traineeId: {
        type: Schema.Types.ObjectId,
        ref: 'Trainees',
    },
    workouts: [
        {
            muscleGroup: {
                type: String,
                required: true,
            },
            exerciseName: {
                type: String,
                required: true,
            },
            sets: { type: String },
            reps: { type: String },
            weight: { type: String },
            distanceOrTime: { type: String },
            equipmentReq: { type: String },
            notes: { type: String },
        },
    ],
});

const Schedules = model('Schedules', scheduleSchema);

module.exports = Schedules;