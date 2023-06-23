const express = require('express');
const router = express.Router();
const projectController = require('../controllers/Project');

// Create a new project
router.post('/project', projectController.createProject);

// Get all projects
router.get('/project', projectController.getAllProjects);

// Get a project by ID
router.get('/project:id', projectController.getProjectById);

module.exports = router;
