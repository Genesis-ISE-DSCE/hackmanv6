const express = require('express');
const router = express.Router();
const registrationController = require('../controllers/Registration');

// GET all registrations
router.get('/', registrationController.getRegistrations);

// POST new registration
router.post('/', registrationController.register);

module.exports = router;
