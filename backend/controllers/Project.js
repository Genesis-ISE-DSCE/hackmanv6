const Registration = require('../models/Registration');
const Project = require('../models/Project');
const CustomError = require("../utilis/CustomError");

exports.formattedData = async (req, res) => {
    try {
        const formatted=[]
        const registrations = await Registration.find();
        registrations.forEach((x)=>{
            
            const teamId = x.teamId
            const extract = teamId.split('#')[1]
            const teamName = x.teamName
            const teamMembers = [x.name,...x.teamMembers]
            let count =1;
            teamMembers.forEach((member)=>{
                
                const uid = `${extract}-${count} ${member}`
                const insert={teamId, teamName, member, uid}
                formatted.push(insert)
                count++;
                
            })
  

        })
        
        console.log(formatted.length)
      res.status(200).json({formatted})
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error', err: err });
    }
  };



exports.createProject = async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();
    res.status(201).json(project);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getProjectById = async (req, res) => {
  try {
    const project = await Project.findOne({ teId: req.params.teamId });
    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }
    res.json(project);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
