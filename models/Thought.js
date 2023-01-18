const { Schema, model } = require('mongoose');


const thoughtSchema = new Schema(
  {
    thoughtName: {
      type: String,
      required: true,
    },
    thoughtDate: {
      type: Date,
      default: Date.now(),
    },
    body: {
        type: String,
        required: true,
        maxlength: 50,
        minlength: 4,
        default: 'unnamed thoughts',

      
    },
    users: [
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
  }
);

const Thought = model('thought', thoughtSchema);

module.exports = Thought;