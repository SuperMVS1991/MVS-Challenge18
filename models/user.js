const { Schema, model } = require('mongoose');
const { thought } = require('../models');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Please enter a valid e-mail address'],
    },
    thoughts: [
        {
        type: Schema.Types.ObjectId,
        ref: 'thought',
        },
    ],
    friends: [
        {
        type: Schema.Types.ObjectId,
        ref: 'User',
        },
    ],
    },
    {
    toJSON: {
        virtuals: true,
    },
    id: false,
    });

userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});
const User = model('User', userSchema);

module.exports = User;