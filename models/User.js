const { Schema, model } = require('mongoose');
const friendSchema = require('./Friend');


const userSchema = new Schema(
  {
    first: {
      type: String,
      required: true,
      max_length: 50,
    },
    last: {
      type: String,
      required: true,
      max_length: 50,
    },
    github: {
      type: String,
      required: true,
      max_length: 50,
    },
    thoughts: {
      type: String,
      required: true,
      max_length: 50,
    },
    
    friends: [friendSchema],

  },
  {
    toJSON: {
      getters: true,

    },
  }
);


const User = model('user', userSchema);

module.exports = User;