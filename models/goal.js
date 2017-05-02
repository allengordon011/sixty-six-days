import mongoose from 'mongoose'
import User from './user'

const goalSchema = mongoose.Schema({
  goal: {type: String, required: true},
  completed: {type: Boolean, default: false},
  difficulty: {type: Number, default: 0},
  sticker: {type: String, default: ''},
  _creator: {type: String, ref: 'User'}
});

module.exports = mongoose.model('Goal', goalSchema)
