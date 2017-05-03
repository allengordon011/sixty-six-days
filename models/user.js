const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
import Goal from './goal';

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    goals: [
        { type: Schema.Types.ObjectId, ref: 'Goal' }
    ]
});

userSchema.methods.isValidPassword = function(password) {
    return bcrypt.compare(password, this.password);
    };

userSchema.statics.hashPassword = function(password) {
    return bcrypt.hash(password, 10);
}

const User = mongoose.model('User', userSchema);

module.exports = {
    User
}
