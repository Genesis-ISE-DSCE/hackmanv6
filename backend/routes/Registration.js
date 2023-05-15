const express = require('express');
const router = express.Router();
const {createRegistration,getAllRegistrations} = require('../controllers/Registration');
const {isLoggedIn}=require("../middlewares/Admin")

// GET all registrations
router.route('/registration').post(createRegistration);

// POST new registration
router.route('/registration').get(isLoggedIn,getAllRegistrations);

module.exports = router;
