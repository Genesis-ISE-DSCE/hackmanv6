import React from 'react'
import { useNavigate } from 'react-router-dom'
import MyTableComponent from '../components/Admin/MyTableComponent'

const Admin = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div className='flex items-center justify-center py-4 '>
        <p className='text-4xl'>Admin Pannel</p>
        <button 
          className="position left-8  absolute lg:text-xl shadow bg-[#22C3FF] hover:bg-[#D4DFC7] hover:text-black focus:shadow-outline focus:outline-none text-black font-bold py-2 px-4 rounded text-sm"
          onClick={()=>{navigate("/")}}>Home
        </button>
        <button 
          className="position right-8  absolute lg:text-xl shadow bg-[#22C3FF] hover:bg-[#D4DFC7] hover:text-black focus:shadow-outline focus:outline-none text-black font-bold py-2 px-4 rounded text-sm"
          onClick={()=>{navigate("/mass-mail")}}>Mail
        </button>
      </div>
      <MyTableComponent />
    </div>
  )
}

export default Admin