// define the schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  team_id: {
    type: String,
    required: true,
    unique: true
  },
  ppt_link: {
    type: String,
    required: true,
    unique: true
  },
  theme: {
    type: String,
    required: true
  },
  github_link: {
    type: String,
    required: true
  },
  hosted_web_app_link: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  challenges: {
    type: String,
    required: true
  }
});

const Project = mongoose.model('Project', ProjectSchema);

module.exports = Project;