const express = require('express');
const router = express.Router();
const { createRegistration, getAllRegistrations, getTeamNames } = require('../controllers/Registration');

router.post('/registration', createRegistration);
router.get('/registration', getAllRegistrations);
router.get('/', getTeamNames);

module.exports = router;
