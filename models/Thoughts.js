const { Schema, model } = require('mongoose');
const { format_time } = require('../utils/data');
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
      default: Date.now(),
      get: format_time,
      required: true,
    },
    reactions: [reactionsSchema]
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
    id: false,
  }
);

thoughtsSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
})




const Thoughts = model('thoughts', thoughtsSchema)
module.exports = Thoughts;
