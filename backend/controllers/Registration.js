const Registration = require('../models/Registration');

exports.createRegistration = async (req, res) => {
  const { name, email, phone, college, teamName, teamMembers, theme } = req.body;

  // Generate uniqueId using current timestamp
  const uniqueId = `hackman${Date.now()}`;

  // Convert teamMembers string to array
  const teamMembersArray = teamMembers.split(',').map((member) => member.trim());

  try {
    const registration = new Registration({
      uniqueId,
      name,
      email,
      phone,
      college,
      teamName,
      teamMembers: teamMembersArray,
      theme
    });

    await registration.save();
    res.status(201).json({ message: 'Registration created successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getAllRegistrations = async (req, res) => {
  try {
    const registrations = await Registration.find();
    res.json(registrations);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};