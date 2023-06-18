const Registration = require('../models/Registration');
const CustomError = require("../utilis/CustomError");

exports.formattedData = async (req, res) => {
    try {
        const formatted=[]
        const registrations = await Registration.find();
        registrations.forEach((x)=>{
            
            const teamId = x.teamId
            const extract = teamId.split('#')[1]
            const teamName = x.teamName
            const teamMembers = [x.name,...x.teamMembers]
            let count =1;
            teamMembers.forEach((member)=>{
                
                const uid = `${extract}-${count} ${member}`
                const insert={teamId, teamName, member, uid}
                formatted.push(insert)
                count++;
                
            })
  

        })
        
        console.log(formatted.length)
      res.status(200).json({formatted})
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error', err: err });
    }
  };