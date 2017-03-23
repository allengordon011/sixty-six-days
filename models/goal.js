import mongoose from 'mongoose'

const goalSchema = mongoose.Schema({
  goal: {type: String, required: true},
  completed: {type: Boolean, default: false},
  difficulty: {type: Number, default: 0},
  sticker: {type: String, default: ''}
});

module.exports = mongoose.model('Goal', goalSchema)
