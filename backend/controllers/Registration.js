const Registration = require('../models/Registration');
const CustomError = require("../utilis/CustomError")
// const htmlContent = require('../utilis/Email.js')
const sgMail = require('@sendgrid/mail')


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
  const teamId = `hackman${Date.now()}`;
  const teamNumber = await Registration.estimatedDocumentCount() +1;

  

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

    
    res.status(201).json({ registeration: registeration});
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


exports.sendEmails = async(req,res)=>{

  const {email, teamId,teamName}=req.body

  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const msg = {
  to: email, 
  from: 'genesis.hackman@gmail.com', 
  subject: 'Registration Confirmation - HACKMAN v6.0',
  html: ` <p>Dear Participant,</p>
  <p>Your team ${teamName} has sucessfully registered for HACKMAN v6.0! We are delighted to have you as a participant in this exciting event.</p>
  <p>Please note that your team ID for the event is: <strong>${teamId}</strong>.</p>
  <p>To stay updated with the latest information, updates, and guidelines regarding HACKMAN v6.0, please visit our official website: <a href="https://www.hackman.in/">https://www.hackman.in/</a> and follow us on Instagram <a href="https://www.instagram.com/WEAREHACKMAN">@WEAREHACKMAN</a>. You will find comprehensive details about the event, including the agenda, rules, and FAQs.</p>
  <p>In addition to the website, we would like to draw your attention to the following essential documents that you should familiarize yourself with:</p>
  <ul>
    <li>Terms & Conditions: <a href="https://docs.google.com/document/d/15pbRd7dQHS9YJpX38rQ4fQU10ND1DDdRWnFVLW5LoVs/edit?usp=sharing">https://docs.google.com/document/d/15pbRd7dQHS9YJpX38rQ4fQU10ND1DDdRWnFVLW5LoVs/edit?usp=sharing</a></li>
    <li>Code of Conduct: <a href="https://docs.google.com/document/d/18VNYKuQwPtmTV4oOvJd9w_K_I4RFbIoWgPX6yIZgBR8/edit?usp=sharing">https://docs.google.com/document/d/18VNYKuQwPtmTV4oOvJd9w_K_I4RFbIoWgPX6yIZgBR8/edit?usp=sharing</a></li>
    <li>Instructions: <a href="https://docs.google.com/document/d/1g7knadlcujSKsZiWHXIFr48dR9u8Pcc5Jl5wGR0U2Qk/edit?usp=sharing">https://docs.google.com/document/d/1g7knadlcujSKsZiWHXIFr48dR9u8Pcc5Jl5wGR0U2Qk/edit?usp=sharing</a></li>
  </ul>
  <p>These documents contain crucial information regarding the event, participant guidelines, and other important details. We encourage you to review them thoroughly to ensure a smooth and successful participation experience.</p>
  <p>If you have any queries or require further assistance, please feel free to reach out to our support team at <a href="mailto:genesis.hackman@gmail.com">genesis.hackman@gmail.com</a>. We are here to help and ensure that you have a remarkable experience throughout the HACKMAN v6.0 event.</p>
  <p>Once again, thank you for joining us in HACKMAN v6.0. We look forward to your active participation and wish you the best of luck in the upcoming challenges!</p>
  <p>Best regards,</p>
  <p>Team HACKMAN,<br>Dept of ISE, DSCE<br>Bangalore - 560078</p>
  `,
  
}
sgMail
  .send(msg)
  .then(() => {
    console.log(`Email sent`)
  })
  .catch((error) => {
    console.error(error)
  })
// }
}