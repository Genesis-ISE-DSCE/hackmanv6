// business logic
const Registration = require('../models/Registration');

const register = (req, res) => {
  const teamMembers = req.body.teamMembers.split(',');
  const newRegistration = new Registration({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    college: req.body.college,
    teamName: req.body.teamName,
    teamMembers: teamMembers,
    theme: req.body.theme
  });

  newRegistration.save((err, registration) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error registering new user, please try again.');
    } else {
      console.log(registration);
      res.send('Registration successful!');
    }
  });
};


// A method to retrieve all the done registrations 

const getRegistrations = (req, res) => {
  Registration.find({}, (err, registrations) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error retrieving registrations.');
    } else {
      res.json(registrations);
    }
  });
};

module.exports = {
  register,
  getRegistrations
};
