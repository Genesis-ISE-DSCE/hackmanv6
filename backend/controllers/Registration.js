const Registration = require('../models/Registration');
const CustomError = require("../utilis/CustomError")
// const htmlContent = require('../utilis/Email.js')
const sgMail = require('@sendgrid/mail')


exports.createRegistration = async (req, res, next) => {
  const { name, email, phone, college, teamName, teamMembers, teamEmail, teamPhone, transactionID, upiID } = req.body;

  if (!name) {
    return (next(new CustomError("name is required", 400)))
  }
  if (!email) {
    return (next(new CustomError("email is required", 400)))
  }
  if (!phone) {
    return (next(new CustomError("phone is required", 400)))
  }
  if (!college) {
    return (next(new CustomError("college is required", 400)))
  }
  if (!teamName) {
    return (next(new CustomError("teamName is required", 400)))
  }
  if (!teamMembers) {
    return (next(new CustomError("teamMembers is required", 400)))
  }
  if (!teamEmail) {
    return (next(new CustomError("team email is required", 400)))
  }
  if (!teamPhone) {
    return (next(new CustomError("team phone is required", 400)))
  }
  if (!transactionID) {
    return (next(new CustomError("transactionId is required", 400)))
  }
  if (!upiID) {
    return (next(new CustomError("upiId is required", 400)))
  }

  const user = await Registration.findOne({ email });
  console.log(user)
  const team = await Registration.findOne({ teamName });

  if (user) {
    return (next(new CustomError("email already registered", 401)))
  }

  if (team) {
    return (next(new CustomError("teamName already choosen please find other name", 401)))
  }
  // Generate uniqueId using current timestamp






  const documentNumber = await Registration.countDocuments() +1;
  const num = 7001
// console.log(documentNumber);
const id = num+documentNumber;
// console.log(id);
const teamId = `Hackman#${id}`;
  const teamNumber = await Registration.estimatedDocumentCount() +1;



  try {
    const registeration = await Registration.create({
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


    res.status(201).json({ registeration: registeration });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error', err: err });
  }
};


exports.getAllRegistrations = async (req, res) => {
  try {
    const registrations = await Registration.find();
    res.json(registrations);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error', err: err });
  }
};


exports.getAllTeamNames = async (req, res) => {
  try {
    const data = await Registration.find()
    const teamnames = data.map((item) => ({ teamName: item.teamName }))
    res.json(teamnames)
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error', err: err });
  }
}


exports.sendEmails = async (req, res) => {

  const { email, teamId, teamName } = req.body

  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  const msg = {
    to: email,
    from: 'genesis.hackman@gmail.com',
    subject: 'Confirmation of Registration - HACKMAN v6.0',
    html: `     <p>Dear Participant,</p>
  <br>
  <p>Thank you for registering for HACKMAN v6.0! We are delighted to have you and your team <strong>${teamName}</strong> as a participant in this exciting event. This email serves as an acknowledgment of your successful registration.</p>
  <br>
  <p>Please make a note of your team ID: <strong> ${teamId} </strong>. Keep this information accessible for any future communication related to the event.</p>
  <br>
  <p>To stay updated with the latest information for HACKMAN v6.0, please visit our official website at <a href="https://www.hackman.in/">https://www.hackman.in/</a> and follow us on Instagram <a href="https://www.instagram.com/WEAREHACKMAN">@WEAREHACKMAN</a>.</p>
  <br>
  <p>Remember to join the WhatsApp group and invite your team members to join as well:</p>
  <a href="https://chat.whatsapp.com/CRWra3T7CzU3Rhb6iFnoAa">https://chat.whatsapp.com/CRWra3T7CzU3Rhb6iFnoAa</a>
  <br>
  <p>In addition to the website, we would like to bring your attention to the following important documents that you should familiarize yourself with. These documents contain vital information about the event, guidelines, and other important details.</p>
  <br>
  <p>Guidelines:</p>
  <a href="https://drive.google.com/drive/folders/1WxvOvz5Z2V3S5QfJm9bBUIwu282KHX-w?usp=sharing">https://drive.google.com/drive/folders/1WxvOvz5Z2V3S5QfJm9bBUIwu282KHX-w?usp=sharing</a>
  <br>
  <p>If you have any queries, please feel free to reach out to <a href="mailto:ise.genesis.dsce@gmail.com">ise.genesis.dsce@gmail.com</a>. We are here to help you. We eagerly anticipate your active participation and wish you the best of luck in the upcoming challenges!</p>
  <br>
  <p>Best regards,</p>
  <p>Team HACKMAN,</p>
  <p>Dept of ISE, DSCE</p>
  <p>Bangalore - 560078</p>

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

exports.sendMassEmails = async (req, res) => {
  const {body, subject} = req.body


  try {
    const registrations = await Registration.find();
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const merged=[]

    registrations.forEach((registration) => {
      const emails = [registration.email, ...registration.teamEmail];
      merged.push(emails)
    });
   
   const emailsToSend= merged.flat(1)
 
   sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  const msg = {
    to: emailsToSend,
    from: 'genesis.hackman@gmail.com',
    subject: subject,
    html: body

  }
  // console.log(msg.to.length)
  sgMail
    .send(msg)
    .then(() => {
      console.log(`Email sent`)
    })
    .catch((error) => {
      console.error(error)
    })

     

    res.status(200).json({ message: 'Emails sent successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};