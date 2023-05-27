const nodemailer = require("nodemailer")
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'genesis.hackman@gmail.com',
      pass: 'Hackmangenesis23'
    }
  });
  var mailOptions = {
    from: 'genesis.hackman@gmail.com',
    to: 'dinesh35382@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });