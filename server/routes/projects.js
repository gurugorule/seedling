const express = require('express');
const Project = require('../models/Project');

const router = express.Router();

// Get all projects for user
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find({ userId: req.user.id })
      .populate('userId', 'name email')
      .exec();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching projects' });
  }
});

// Create project
router.post('/', async (req, res) => {
  try {
    const { title, description } = req.body;
    const project = new Project({
      title,
      description,
      userId: req.user.id
    });
    await project.save();
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ message: 'Error creating project' });
  }
});

// Update project
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    const project = await Project.findOneAndUpdate(
      { _id: id, userId: req.user.id },
      { title, description },
      { new: true }
    );
    
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    
    res.json(project);
  } catch (error) {
    res.status(500).json({ message: 'Error updating project' });
  }
});

// Delete project
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findOneAndDelete({ _id: id, userId: req.user.id });
    
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Error deleting project' });
  }
});

module.exports = router;