const { Schema, model } = require('mongoose');
const User = require('./User');

const applicationSchema = new Schema(
  {
    published: {
      type: Boolean,
      default: false,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    buildSuccess: {
      type: Boolean,
      default: true,
    },
    description: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 500,
    },
    tags: [
      {
        tagBody: {
          type: String,
          required: true,
          minlength: 1,
        },
        username: {
          type: String,
          required: true,
        },
      },
    ],
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property `getTags` that gets the amount of tags associated with an application
applicationSchema
  .virtual('getTags')
  .get(function () {
    return this.tags.length;
  });

// Initialize the Application model
const Application = model('Application', applicationSchema);

module.exports = Application;
