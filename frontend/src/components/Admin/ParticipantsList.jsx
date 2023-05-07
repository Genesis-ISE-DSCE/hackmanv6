import React,{useEffect,useState,useMemo} from 'react'
import Axios from "axios"
import ParticipantItem from "./ParticipantItem"

const ParticipantsList =() => {
  const [participants,setParticipants]=useState();
  const [show,setShow]=useState(false)
   
  useEffect(()=>{
 Axios.get("http://localhost:4000/api/v1/registration")
    // Axios.get("https://hackmanv6.onrender.com/api/v1/registration")
    .then((res)=>{
      console.log(res.data)
      setParticipants(res.data);
      setShow(true);
    })
    .catch((err)=>{
      console.log(err);
    })
  },[]);

  return (
    <div>
    <div>
      <div className="mx-10 flex items-center">
        <p className="w-44 ">Team Name</p>
        <p className="ml-20 w-44 ">Team Code</p>
        <p className="ml-20 w-44 ">Team Leader</p>
        <p className="ml-20 w-44 ">College</p>
        <p className="ml-20 w-44 ">Team Members</p>
        <p className="ml-20 w-44 ">Email</p>
        <p className="ml-20 w-44 ">Phone</p>
        <p className="ml-20 w-44 ">Theme</p>
      </div>
      <div>
        {show && participants.map((item)=>(
          <ParticipantItem   teamName={item.teamName} teamId={item.teamId} teamLeader={item.name} teamMembers={item.teamMembers} college={item.college} email={item.email} phone={item.phone} theme={item.theme} idea="Not submitted" project="Not Submitted" />
        ))}
      </div>
    </div>
    </div>
  )
}

export default ParticipantsList