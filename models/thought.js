const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema({
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new mongoose.Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => new Date(timestamp).toLocaleString(), // Format timestamp on query
    },
  });
  

const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    username: {
        type: String,
        required: true,
    },
    reactions: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Reaction',
        },
    ],
},
{
    toJSON: {
        virtuals: true,
    },
    id: false,
});

reactionsSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

module.exports = { thoughtSchema, reactionSchema };
