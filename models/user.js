const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    goals: [{
        goal: String,
        completed: {type: Boolean, default: false},
        difficulty: {type: Number, default: 0},
        sticker: {type: String, default: ''}
    }]
});

UserSchema.methods.isValidPassword = function(password) {
    return bcrypt.compare(password, this.password);
    };

UserSchema.statics.hashPassword = function(password) {
    return bcrypt.hash(password, 10);
}

const User = mongoose.model('User', UserSchema);

module.exports = {
    User
}
