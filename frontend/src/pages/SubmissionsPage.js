import React, {useState, useEffect} from 'react';
import Submissions from "../components/Submissions";
import eva_bg_small_lef from "../assets/images/eva_bg_small_lef.png";
import {useNavigate} from 'react-router-dom';
import Axios from "axios";

function SubmissionsPage() {
    const navigate = useNavigate();
    const [showPopup, setShowPopup] = useState(false);
    const [isSubmit, setIsSubmit] = useState(false);
    const [formErrors, setFormErrors] = useState({});
    const [formData, setFormData] = useState({
        teamname: "",
        teamid: "",
        problem: "",
        solution: "",
        usp: "",
        tech: "",
        pptlink: "",
        github: ""
    });

    const handleOk = () => {
        navigate('/');
    }

    function handleClick() {
        const subData = {
            teamname: formData.teamname,
            teamid: formData.teamid,
            problem: formData.problem,
            solution: formData.solution,
            usp: formData.usp,
            tech: formData.tech,
            pptlink: formData.pptlink,
            github: formData.github
        }
        const err = (validate(formData));
        setFormErrors(err);
        if (Object.keys(err).length === 0){
            setIsSubmit(true);
            console.log(subData);
            setShowPopup(true);
            // Axios.post("", subData)
            // .then((res)=>{
            //     // const response = res.data.registeration;
            //     setShowPopup(true)
            //     // console.log(data)
            //     })
            // // .catch((err)=>{setShowError(err)});
          }
    }

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit){
            console.log(formData);
        }
      }, [formErrors, isSubmit, formData]);

    const validate = (formData) => {
        const errors = {};
        if(!formData.teamname){
          errors.teamname = "Team name is required!!";
        }
        if(!formData.teamid){
          errors.teamid = "Team ID is required!!";
        }
        if(!formData.problem){
          errors.problem = "Problem Statement is required!!";
        }
        if(!formData.solution){
          errors.solution = "Solution is required!!";
        }
        if(!formData.usp){
          errors.usp = "USP is required!!";
        }
        if(!formData.tech){
          errors.tech = "Tech used is required!!";
        }
        if(!formData.pptlink){
          errors.pptlink = "PPT link is required!!";
        }
        if(!formData.github){
          errors.github = "Github link is required!!";
        }
        return errors;
      }

    return (
        <div>
            <Submissions formData={formData} setFormData={setFormData} formErrors={formErrors} />
            <div className='bg-[#24263B]'>
                <div className="lg:mx-96 md:mx-48 mx-8 pb-16">
                    <div className="flex justify-center">
                        <button onClick={handleClick} className="lg:text-xl shadow bg-[#22C3FF] hover:bg-[#D4DFC7] hover:text-black focus:shadow-outline focus:outline-none text-black font-bold py-2 px-4 rounded text-sm" type="submit">
                        Submit
                        </button>
                    </div>
                </div>
            </div>

            {showPopup && (
            <div className="popup bg-[#23354E] lg:w-[540px] lg:pt-12 md:w-[480px] md:pt-8 w-[320px] pt-0 rounded-xl">
                <img className="lg:float-left lg:w-48 lg:h-auto md:float-left md:w-40 md:h-auto justify-center w-20 h-auto" src={eva_bg_small_lef} alt="Registration eva" />
            <div>
                <p className="font-poppins lg:text-2xl md:text-xl text-md text-center pt-2">Submission Successful !!</p>
                <p className="font-poppins lg:text-sm md:text-sm text-xs text-center">Thankyou for participating in Hackman v6.</p>
            </div>
            <div className='lg:pt-20 lg:pb-8 md:pt-16 md:pb-6 pt-2'>
                <button onClick={handleOk} className="lg:text-xl shadow hover:bg-[#D4DFC7] hover:text-black focus:shadow-outline focus:outline-none text-black font-bold py-2 px-4 rounded text-sm" type="button">
                OK
                </button>
            </div>
            </div>
      )}
        </div>
    );
}

export default SubmissionsPage;