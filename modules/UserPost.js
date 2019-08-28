const mongoose = require('mongoose');

const UserPostSchema = new mongoose.Schema({
    ownerPosts: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
      },
      
  postList: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
      },

      post_id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'post'
      },
        
      date: {
          type: Date,
          default: Date.now
      }
    }
    
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = UserPost = mongoose.model('userpost', UserPostSchema);