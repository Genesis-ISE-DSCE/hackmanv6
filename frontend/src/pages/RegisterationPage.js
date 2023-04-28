import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import eva_bg_small_lef from "../assets/images/eva_bg_small_lef.png";
import Navbar from '../components/Navbar';
import Registeration from '../components/Registeration';
import Registeration2 from '../components/Registeration2';
import '../App.css';

function RegisterationPage() {
  const [page, setPage] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    teamName: "",
    teamMembers: [],
    theme: "",
  });

  function handleClick() {
    const regData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      college: formData.college,
      teamName: formData.teamName,
      teamMembers: formData.teamMembers,
      theme: formData.theme
    }
    console.log(regData);
    setShowPopup(true);
  }

  const handleOk = () => {
    navigate('/');
  }

  const ButtonDisplay = () => {
    if (page === 0){
      return (
        <div className="lg:mx-96 md:mx-48 mx-8">
          <div className="flex justify-center">
            <button onClick={() => {setPage((curPage) => curPage+1);}} className="lg:text-xl shadow bg-[#22C3FF] hover:bg-[#D4DFC7] hover:text-black focus:shadow-outline focus:outline-none text-black font-bold py-2 px-4 rounded text-sm" type="submit">
              Next
            </button>
          </div>
        </div>
      );
    }
    if (page === 1 ){
      return (
        <div className="lg:mx-96 md:mx-48 mx-8 pb-36">
          <div className="">
            <div className="flex justify-center float-left">
              <button onClick={() => {setPage((curPage) => curPage-1);}} className="lg:text-xl shadow bg-[#22C3FF] hover:bg-[#D4DFC7] hover:text-black focus:shadow-outline focus:outline-none text-black font-bold py-2 px-4 rounded text-sm" type="button">
                Back
              </button>              
            </div>
          </div>
                  
          <div className="">
            <div className="flex justify-center float-right">
              <button onClick={handleClick} className="lg:text-xl shadow bg-[#22C3FF] hover:bg-[#D4DFC7] hover:text-black focus:shadow-outline focus:outline-none text-black font-bold py-2 px-2 rounded text-sm" type="submit">
                Submit
              </button>
            </div>
          </div>
        </div>
      )
    }
  }

  const PageDisplay = () => {
    if (page === 0){
      return (
        <div>
          <Registeration formData={formData} setFormData={setFormData} />
        </div>
      );
    }
    else {
      return (
      <Registeration2 formData={formData} setFormData={setFormData} />
      );
    }
  }

    return (
      <div>
        <Navbar currentPage='registration'/>
        {PageDisplay(page)}
        <div className='bg-[#24263B] lg:pb-80 md:pb-16 pb-56'>{ButtonDisplay(page)}</div>
        {showPopup && (
        <div className="popup bg-[#23354E] lg:w-[540px] lg:pt-12 md:w-[480px] md:pt-8 w-[320px] pt-0 rounded-xl">
            <img className="lg:float-left lg:w-48 lg:h-auto md:float-left md:w-40 md:h-auto justify-center w-20 h-auto" src={eva_bg_small_lef} alt="Registration eva" />
          <div>
            <p className="font-poppins lg:text-2xl md:text-xl text-md text-center">Registration Successful !!</p>
            <p className="font-poppins lg:text-sm md:text-sm text-xs text-center">Check your mail for any further updates.</p>
          </div>
          <div className='lg:pt-20 lg:pb-8 md:pt-16 md:pb-6 pt-2'>
            <button onClick={handleOk} className="lg:text-xl shadow hover:bg-[#D4DFC7] hover:text-black focus:shadow-outline focus:outline-none text-black font-bold py-2 px-4 rounded text-sm" type="button">
              OK
            </button>
          </div>
        </div>
      )}

      </div>
    )
  }

export default RegisterationPage;