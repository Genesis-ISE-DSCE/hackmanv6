import React,{useState,useEffect} from 'react'
import Axios from "axios"
import '../index.css'

const TeamNames = () => {
    const [teamNames,setTeamNames] = useState([]);


    useEffect(()=>{
        Axios.get("http://localhost:4000/api/v1/teamNames")
        .then((res)=>{
            setTeamNames(res.data)
            console.log(res.data)
        })
        .catch((err)=>(
            console.log(err)
        ))
    },[])
  return (
    <div>
        <div className="flex animate-rotate-left-to-right">
            {
                teamNames.map((item)=>(
                    <p className="ml-12   ">{item.teamName}</p>
                ))
            }
        </div>
        <div className="marquee">
      <span className="animate-marquee">Your marquee text here</span>
    </div>
    </div>
  )
}

export default TeamNames