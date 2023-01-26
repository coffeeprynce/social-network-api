const { Schema, model } = require('mongoose');



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
    thoughts: [{
      type: Schema.Types.ObjectId,
      ref: 'thought'
    }],
    
    friends: [{
      type: Schema.Types.ObjectId,
      ref: 'user'
    }],

  },
  {
    toJSON: {
      getters: true,

    },
  }
);


const User = model('user', userSchema);

module.exports = User;