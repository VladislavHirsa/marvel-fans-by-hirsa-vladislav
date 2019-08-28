const mongoose = require('mongoose');


const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  location: {
    type: String
  },
  status: {
    type: String,
    required: true
  },
  social: {
    instagram: {
      type: String
    }
  },
  date: {
    type: Date,
    default: Date.now
  },
  interests: {
    type: String
  }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);