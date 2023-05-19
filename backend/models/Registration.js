// define the schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RegistrationSchema = new Schema({
  
  teamId: {
    type: String,
    required: true,
    unique: true
  },
  teamNumber: {
    type: Number,
    // required: true,
  },
  admin: {
    type: mongoose.Schema.ObjectId,
    ref: "Admin",
    // required: true,
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
    teamEmail: [
      {
        type: String,
        // maxlength: 4,
        required: true
      }],
      teamPhone: [
        {
          type: String,
          // maxlength: 4,
          required: true
        }],
      transactionID: {
        type: String,
        required: true
      },
      upiID: {
        type: String,
        required: true
      }
});

const Registration = mongoose.model('Registration', RegistrationSchema);

module.exports = Registration;
