const mongoose = require('mongoose');

const BadgeSchema = new mongoose.Schema({
  badgeName: {
    type: String,
    required: [true, 'must provide a name'],
    maxLength: [20, 'must not be more than 20 characters'],
  },
  category: {
    type: String,
    required: [true, 'must provide a category'],
    maxLength: [20, 'must not be more than 20 characters'],
  },
  requirements: {
    type: [
      {
        stargazer: [
          {
            number: {
              type: Number,
            },
            starred: {
              type: Boolean,
              default: false,
            },
            requirement: {
              type: String,
            },
          },
        ],
        junior: [
          {
            number: {
              type: Number,
            },
            starred: {
              type: Boolean,
              default: false,
            },
            requirement: {
              type: String,
            },
          },
        ],
        senior: [
          {
            number: {
              type: Number,
            },
            starred: {
              type: Boolean,
              default: false,
            },
            requirement: {
              type: String,
            },
          },
        ],
      },
    ],
    required: [true, 'must provide requirements'],
  },
});

module.exports = mongoose.model('Badge', BadgeSchema);
