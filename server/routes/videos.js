const express = require('express');
const Video = require('../models/Video');
const User = require('../models/User');

const router = express.Router();

// Get all videos for user
router.get('/', async (req, res) => {
  try {
    const videos = await Video.find({ userId: req.user.id })
      .populate('projectId')
      .exec();
    res.json(videos);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching videos' });
  }
});

// Create video
router.post('/', async (req, res) => {
  try {
    const { title, description, projectId } = req.body;
    
    // Check user's role and limits
    const user = await User.findById(req.user.id);
    const videoCount = await Video.countDocuments({ userId: req.user.id });

    if (user.role === 'FREE' && videoCount >= 5) {
      return res.status(403).json({ message: 'Free tier limit reached' });
    }

    const video = new Video({
      title,
      description,
      projectId,
      userId: req.user.id,
      status: 'PROCESSING'
    });
    
    await video.save();
    
    // Here you would trigger video processing
    // processVideo(video._id);

    res.status(201).json(video);
  } catch (error) {
    res.status(500).json({ message: 'Error creating video' });
  }
});

// Update video
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    const video = await Video.findOneAndUpdate(
      { _id: id, userId: req.user.id },
      { title, description },
      { new: true }
    );
    
    if (!video) {
      return res.status(404).json({ message: 'Video not found' });
    }
    
    res.json(video);
  } catch (error) {
    res.status(500).json({ message: 'Error updating video' });
  }
});

// Delete video
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const video = await Video.findOneAndDelete({ _id: id, userId: req.user.id });
    
    if (!video) {
      return res.status(404).json({ message: 'Video not found' });
    }
    
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Error deleting video' });
  }
});

module.exports = router;