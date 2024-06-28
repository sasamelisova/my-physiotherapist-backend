const mongoose = require('mongoose');
const ExerciseSchema = require('./Exercise');

const TherapySessionSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  exercises: [ExerciseSchema]
});

module.exports = mongoose.model('TherapySession', TherapySessionSchema);

