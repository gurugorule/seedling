const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  url: {
    type: String,
    default: ''
  },
  thumbnail: String,
  duration: Number,
  quality: {
    type: String,
    enum: ['HD', 'FHD', 'UHD_4K', 'UHD_8K'],
    default: 'HD'
  },
  status: {
    type: String,
    enum: ['DRAFT', 'PROCESSING', 'PUBLISHED', 'FAILED'],
    default: 'DRAFT'
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Video', videoSchema);