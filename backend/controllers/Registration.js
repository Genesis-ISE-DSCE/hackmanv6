const Registration = require('../models/Registration');
const CustomError = require("../utilis/CustomError")
const nodemailer = require("nodemailer")
const num = 6123;

exports.createRegistration = async (req, res,next) => {
  const { name, email, phone, college, teamName, teamMembers,teamEmail,teamPhone, transactionID ,upiID} = req.body;

if(!name){
  return(next(new CustomError("name is required",400)))
}
if(!email){
  return(next(new CustomError("email is required",400)))
}
if(!phone){
  return(next(new CustomError("phone is required",400)))
}
if(!college){
  return(next(new CustomError("college is required",400)))
}
if(!teamName){
  return(next(new CustomError("teamName is required",400)))
}
if(!teamMembers){
  return(next(new CustomError("teamMembers is required",400)))
}
if(!teamEmail){
  return(next(new CustomError("team email is required",400)))
}
if(!teamPhone){
  return(next(new CustomError("team phone is required",400)))
}
if(!transactionID){
  return(next(new CustomError("transactionId is required",400)))
}
if(!upiID){
  return(next(new CustomError("upiId is required",400)))
}

const user = await Registration.findOne({email});
console.log(user)
const team = await Registration.findOne({teamName});

if(user){
  return(next(new CustomError("email already rejistered",401)))
}

if(team){
  return(next(new CustomError("teamName already choosen please find other name",401)))
}
  // Generate uniqueId using current timestamp
  
const teamNumber = await Registration.countDocuments() +1;
// console.log(teamNumber);
const id = num+teamNumber;
// console.log(id);
const teamId = `Hackman#${id}`;


  try {
   const registeration= await Registration.create({
      teamId,
      name,
      email,
      phone,
      college,
      teamName,
      teamMembers,
      teamEmail,
      teamPhone,
      transactionID,
      upiID,
      teamNumber
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


exports.getAllTeamNames =async(req,res) =>{
  try{
    const data = await Registration.find()
    const teamnames=data.map((item)=>({teamName :item.teamName}))
    res.json(teamnames)
  }catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error', err:err });
  }
}
