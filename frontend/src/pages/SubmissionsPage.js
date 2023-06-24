import React, {useState, useEffect} from 'react';
import Submissions from "../components/Submissions";

function SubmissionsPage() {
    const [isSubmit, setIsSubmit] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
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
        if(isChecked) {
            setIsSubmit(true);
        }
    }

    return (
        <div>
            <Submissions formData={formData} setFormData={setFormData} />
        </div>
    );
}

export default SubmissionsPage;