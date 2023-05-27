const express = require('express');
const router = express.Router();
const {createRegistration,getAllRegistrations,getAllTeamNames} = require('../controllers/Registration');
const {isLoggedIn}=require("../middlewares/Admin")

// GET all registrations
router.route('/registration').post(createRegistration);

router.route('/teamNames').get(getAllTeamNames)

// POST new registration
router.route('/registration').get(isLoggedIn,getAllRegistrations);

module.exports = router;
