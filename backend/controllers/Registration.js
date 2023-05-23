const Registration = require('../models/Registration');

exports.createRegistration = async (req, res) => {
  const { name, email, phone, college, teamName, teamMembers, theme } = req.body;

  // Generate uniqueId using current timestamp
  const teamId = `hackman${Date.now()}`;

  // Convert teamMembers string to array
  // const teamMembersArray = teamMembers.split(',').map((member) => member.trim());

  try {
   const registeration= await Registration.create({
      teamId,
      name,
      email,
      phone,
      college,
      teamName,
      teamMembers,
      theme
    });

    
    res.status(201).json({ message: 'Registration created successfully', registeration});
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' ,err:err});
  }
};


exports.getAllRegistrations = async (req, res) => {
  try {
    const registrations = await Registration.find();
    res.json(registrations);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error', err:err });
  }
};

exports.getTeamNames = async (req, res) => {
  try {
    const registrations = await Registration.find({}, 'teamName');
    const teamNames = registrations.map((registration) => registration.teamName);
    res.json(teamNames);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};