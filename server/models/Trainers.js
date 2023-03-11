const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const trainersSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Must match an email address!"],
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  trainees: [
    {type: Schema.Types.ObjectId,
    ref: 'Trainees',}
  ],
  trainerSchedule: [
    {
      type: Schema.Types.ObjectId,
      ref: "Schedules",
    },
  ],
});

trainersSchema.pre("save", async function (next) {
  if (this.isNew || this.newSeed || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

trainersSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};


const Trainers = model("Trainers", trainersSchema);

module.exports = Trainers;
