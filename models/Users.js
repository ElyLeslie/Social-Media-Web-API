const { Schema, model } = require('mongoose');
// const friendsSchema = require('./Friends');
// const thoughtsSchema = require('./Thoughts')

// Schema to create Student model
const validateEmail = function(email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email)
};
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      max_length: 50,
    },
    email: {
      type: String,
      required: "Please insert your email",
      validate: [validateEmail, "Your email address must be valid."],
        match: [
      /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/,
      "Please insert your valid email address",
    ],
      unique: true,
    },
    thoughts: [{
      type: Schema.Types.ObjectId,
      ref: "Thought",
    }],
    friends: [{
      type: Schema.Types.ObjectId, 
      ref: 'User'
    }],
  },

  {
    toJSON: {
        virtuals: true,
        getters: true,
    },
  }
);

// Virtual information in this case does not get saved to database, but displays the computational elements.
userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

const Users = model('user', userSchema);

module.exports = Users;