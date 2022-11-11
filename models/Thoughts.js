const { Schema, model } = require('mongoose');
const reactionsSchema = require('./Reactions')

const thoughtsSchema = new Schema(
  {
    
    thoughtName: {
      type: String,
      required: true,
      maxlength: 280,
      minlength: 1,
      
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    reactions: [reactionsSchema]
  },
  {
    toJSON: {
      getters: true,
    },
    id: true,
  }
);

thoughtsSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
})




const Thoughts = model('thoughts', thoughtsSchema)
module.exports = Thoughts;
