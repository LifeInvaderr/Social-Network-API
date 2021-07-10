const { Schema, model } = require('mongoose');

const ReactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280,
        },
        username: {
            type: String,
            required: 'this is required'
        },
        createdAt: {
            date: Date.now,
            // need to import code to format date
        }
    },
    {
        toJSON: {
            getters: true,
        },
        id: false
    }
)

module.exports = ReactionSchema;