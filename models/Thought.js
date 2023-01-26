const { Schema, model, Types } = require('mongoose');

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 80,
        minlength: 4,

      
    },
  userName: {
    type: String,
    required: true,
  }
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const thoughtSchema = new Schema(
  {
    userName: {
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
   reactions: [reactionSchema]
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