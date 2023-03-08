const { Schema, model } = require('mongoose');


const traineesSchema = Schema({
    firstName:{
        type: String,
        required: true,
    },
    lastName:{
        type: String,
        required: true,
    },
    demographics: [
        {
            dob:{
                type: Date,
                required: true,
                get: (timestamp) => dateFormat(timestamp)
            },
            height:{ 
                type: Number,
                required: true,
            },
            weight:{
                type: Number,
                required: true,
            },
            goals:{
                type: String,
                required: true,
            },
            injuryHistory:{
                type: String,
                required: true,
            },
            notes:{
                type: String,
                required: true,
            }
        }
    ],
    traineeSchedule:[
        {
         type: Schema.Types.ObjectId,
         ref: 'Schedules',
    }
],
});

const Trainees = model('Trainees', traineesSchema);

module.exports = Trainees;