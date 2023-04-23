const express = require('express');
const router = express.Router();
const registrationController = require('../controllers/Registration');

// GET all registrations
router.post('/registration', registrationController.createRegistration);

// POST new registration
router.get('/registration', registrationController.getAllRegistrations);

module.exports = router;
