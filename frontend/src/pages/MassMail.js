import React, { useState } from 'react'
import axios from 'axios'
const MassMail = () => {
    const [inputs,setInputs] =useState({})
    const handleSubmit=(event)=>{
        event.preventDefault()
        // console.log(inputs)
        axios.post("https://hackmanv6.onrender.com/api/v1/sendMassMail",inputs)
        .then((res)=>console.log(res))
        .catch((error)=>console.log(error))

    }
    const handleChange=(event)=>{
        const name=event.target.name
        const value = event.target.value
        setInputs(values => ({...values, [name]: value}))
    }
  return (
    <div>
        <div>
            <form onSubmit={handleSubmit}
            className="flex gap-4 flex-col">
                <input type="text" placeholder="Subject" name="subject" value={inputs.subject || ""} onChange={handleChange}/>
                <input type="text" placeholder="Body" name="body" value={inputs.body || ""} onChange={handleChange} />
                <button onClick={handleSubmit}>Send</button>
            </form>
        </div>
    </div>
  )
}

export default MassMail