// define the schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RegistrationSchema = new Schema({
  teamId: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: String,
    required: true
  },
  college: {
    type: String,
    required: true
  },
  teamName: {
    type: String,
    required: true
  },
  teamMembers: [
    {
      type: String,
      // maxlength: 4,
      required: true
    }],
  theme: {
    type: String,
    required: true
  }
});

const Registration = mongoose.model('Registration', RegistrationSchema);

module.exports = Registration;
