const Project = require('../modules/Project');

const project = (req, res) => {
  const data = req.body;
  const newProject = new Project({
    team_id: data.team_id,
    ppt_link: data.ppt_link,
    theme: data.theme,
    github_link: data.github_link,
    hosted_web_app_link: data.hosted_web_app_link,
    description: data.description,
    challenges: data.challenges
  });

  newProject.save((err, project) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error in project information, please try again.');
    } else {
      console.log(project);
      res.send('Project creation successful!');
    }
  });
};
// A method to retrieve all the project information
const getProjects = (req, res) => {
  Registration.find({}, (err, projects) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error retrieving project information.');
    } else {
      res.json(projects);
    }
  });
};

module.exports = {
  project,
  getProjects
};

