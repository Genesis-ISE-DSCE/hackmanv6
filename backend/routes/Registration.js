const express = require('express');
const router = express.Router();
const { createRegistration, getAllRegistrations, getAllTeamNames, sendEmails, sendMassEmails } = require('../controllers/Registration');
const { isLoggedIn } = require("../middlewares/Admin");
const {formattedData} = require("../controllers/Project")

// GET all registrations
router.route('/registration').post(createRegistration);

router.route('/teamNames').get(getAllTeamNames)

router.route('/sendMail').post(sendEmails)
router.route('/sendMassMail').post(sendMassEmails)

// POST new registration
router.route('/registration').get(isLoggedIn, getAllRegistrations);

//testers
router.route('/format').get(formattedData)

module.exports = router;
