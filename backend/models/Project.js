// models/project.js
const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  teamname: { type: String, required: true },
  teamid: { type: String, required: true },
  tech: { type: [String], required: true },
  pptlink: { type: String },
  github: { type: String },
  problem: { type: String, required: true },
  solution: { type: String, required: true },
  usp: { type: String },
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
