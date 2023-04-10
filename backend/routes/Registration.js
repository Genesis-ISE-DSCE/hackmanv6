const express = require('express');
const router = express.Router();
const registrationController = require('../controllers/Registration');

// GET all registrations
router.get('/registration', registrationController.getRegistrations);

// POST new registration
router.post('/registration', registrationController.register);

module.exports = router;
