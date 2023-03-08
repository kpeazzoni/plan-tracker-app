const { Schema, model } = require('mongoose');

const scheduleSchema = new Schema({
    date: {
        type: Date,
        required: true,
    },
    startTime: {
        type: String,
        required: true,
    },
    endTime: {
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
    exercises: [
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
            distance: { type: String },
            equipmentReq: { type: String },
            notes: { type: String },
        },
    ],
});

const Schedules = model('Schedules', scheduleSchema);

module.exports = Schedules;