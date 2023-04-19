const express = require('express');
const router = express.Router();
const projectController = require('../controllers/Project');

// GET all project information
router.get('/', projectController.getProjects);

// POST new project information
router.post('/', projectController.project);

module.exports = router;