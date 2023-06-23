// models/project.js
const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  teamName: { type: String, required: true },
  teamId: { type: String, required: true },
  techUsed: { type: [String], required: true },
  pptLink: { type: String },
  githubLink: { type: String },
  problemStatement: { type: String, required: true },
  proposedSolution: { type: String, required: true },
  usp: { type: String },
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
