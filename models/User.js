const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: '',
            trim: true
        },
        email: {
            type: String,
            unique: true,
            required: '',
            match: /.+@.+\..+/
        },
        thoughts: [],
        friends: [],
    }
)