const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 3,
    max: 100,
  },
  email: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  password: {
    type: String,
    required: true,
    max: 1024,
    min: 6,
  },
  groups: {
    type: [Number],
    required: false
  },
  posts: {
    type: [Number],
    required: false
  },
  images: {
    type: [Number],
    required: false
  },
  friends: {
    type: [String],
    required: false
  },
  friendRequests: {
    type: [String],
    required: false
  }
});

module.exports = mongoose.model('User', userSchema);