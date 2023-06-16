import React, { useState } from 'react'
import axios from 'axios'
const MassMail = () => {
    const [inputs,setInputs] =useState({})
    const handleSubmit=(event)=>{
        event.preventDefault()
        console.log(inputs)

    }
    const handleChange=(event)=>{
        const name=event.target.name
        const value = event.taget.value
        setInputs(values => ({...values, [name]: value}))
    }
  return (
    <div>
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Subject" name="subject" value={inputs.subject || ""} onChange={handleChange}/>
                <input type="text" placeholder="Body" name="body" value={inputs.body || ""} onChnage={handleChange} />
                <button onClick={handleSubmit}>Send</button>
            </form>
        </div>
    </div>
  )
}

export default MassMail