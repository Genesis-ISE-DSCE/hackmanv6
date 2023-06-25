import eva_lightleft from "../assets/images/eva_lightbgleft.png";
import eva_lightright from "../assets/images/eva_lightbgright.png";

function Submissions({formData, setFormData, formErrors}) {
    const handleChange=(event)=>{
        event.preventDefault();
        const name =event.target.name;
        const value = event.target.value;
        setFormData((values)=>({...values,[name]:value}))
    }
    return (
        <div className="bg-[#24263B] pt-12">
            <div>
                <img className="lg:float-left lg:w-auto lg:h-auto md:float-left md:w-40 md:h-auto float-left w-20 h-auto" src={eva_lightleft} alt="Registration eva" />
                <img className="lg:float-right lg:w-auto lg:h-auto md:float-right md:w-40 md:h-auto float-right w-20 h-auto" src={eva_lightright} alt="Registration eva" />
            </div>
            <div className="lg:text-6xl lg:pt-28 md:text-4xl md:pt-16 text-[#22C3FF] pt-12 text-center font-poppins font-bold text-3xl">SUBMISSIONS</div>
            {/* <div className="lg:text-xl lg:pt-2 md:text-md md:pt-2 text-center text-[#ffffff] pt-2  font-poppins font-semibold">Basic Details</div> */}

            <form className="lg:w-full md:w-full w-full">
                <div className="lg:mx-96 md:mx-48 mx-8">
                <div className="lg:w-full lg:pt-12 md:w-full md:items-center md-center md:pt-8 items-center pt-10 place-content-center">
                    <div className="pb-2">
                        <label className="lg:text-2xl md:text-2xl text-sm text-white font-poppins font-semibold mb-1 pr-4" for="inline-teamname">Team Name :</label>
                    </div>
                    <div className="">
                        <input className="w-full bg-[#23354E] appearance-none border-2 border-[#23354E] rounded focus:text-gray-900 text-[#D4DFC7] leading-tight focus:outline-none focus:bg-white focus:border-[#22C3FF]-500" id="inline-teamname" name="teamname" value={formData.teamname || ""} onChange={handleChange} type="text" placeholder="Enter the team name" required></input>
                    </div>
                    <p className="text-red-600">{formErrors.teamname}</p>
                </div>

                <div className="lg:w-full lg:pt-8 md:w-full md:items-center md-center md:pt-6 items-center pt-6 place-content-center">
                    <div className="pb-2">
                        <label className="lg:text-2xl md:text-2xl text-sm text-white font-poppins font-semibold mb-1 pr-4" for="inline-teamid">Team ID :</label>
                    </div>
                    <div className="">
                        <input className="w-full bg-[#23354E] appearance-none border-2 border-[#23354E] rounded focus:text-gray-900 text-[#D4DFC7] leading-tight focus:outline-none focus:bg-white focus:border-[#22C3FF]-500 h-10 p-2" id="inline-teamid" name="teamid" value={formData.teamid || ""} onChange={handleChange} type="text" placeholder="Enter the team id" required></input>
                    </div>
                    <p className="text-red-600">{formErrors.teamid}</p>
                </div>

                <div className="lg:w-full lg:pt-8 md:w-full md:items-center md-center md:pt-6 items-center pt-6 place-content-center">
                    <div className="pb-2">
                        <label className="lg:text-2xl md:text-2xl text-sm text-white font-poppins font-semibold mb-1 pr-4" for="inline-problem">Problem Statement :</label>
                    </div>
                    <div className="">
                        <input className="w-full bg-[#23354E] appearance-none border-2 border-[#23354E] rounded focus:text-gray-900 text-[#D4DFC7] leading-tight focus:outline-none focus:bg-white focus:border-[#22C3FF]-500" id="inline-problem" name="problem" value={formData.problem || ""} onChange={handleChange} type="text" placeholder="Enter the problem statement" required></input>
                    </div>
                    <p className="text-red-600">{formErrors.problem}</p>
                </div>

                <div className="lg:w-full lg:pt-8 md:w-full md:items-center md-center md:pt-6 items-center pt-6 place-content-center">
                    <div className="pb-2">
                        <label className="lg:text-2xl md:text-2xl text-sm text-white font-poppins font-semibold mb-1 pr-4" for="inline-solution">Proposed Solution :</label>
                    </div>
                    <div className="">
                        <input className="w-full bg-[#23354E] appearance-none border-2 border-[#23354E] rounded focus:text-gray-900 text-[#D4DFC7] leading-tight focus:outline-none focus:bg-white focus:border-[#22C3FF]-500" id="inline-solution" name="solution" value={formData.solution || ""} onChange={handleChange} type="text" placeholder="Enter the proposed solution" required></input>
                    </div>
                    <p className="text-red-600">{formErrors.solution}</p>
                </div>

                <div className="lg:w-full lg:pt-8 md:w-full md:items-center md-center md:pt-6 items-center pt-6 place-content-center">
                    <div className="pb-2">
                        <label className="lg:text-2xl md:text-2xl text-sm text-white font-poppins font-semibold mb-1 pr-4" for="inline-usp">Unique Selling Proposition :</label>
                    </div>
                    <div className="">
                        <input className="w-full bg-[#23354E] appearance-none border-2 border-[#23354E] rounded focus:text-gray-900 text-[#D4DFC7] leading-tight focus:outline-none focus:bg-white focus:border-[#22C3FF]-500" id="inline-usp" name="usp" value={formData.usp || ""} onChange={handleChange} type="text" placeholder="Enter the unique selling proposition" required></input>
                    </div>
                    <p className="text-red-600">{formErrors.usp}</p>
                </div>

                <div className="lg:w-full lg:pt-8 md:w-full md:items-center md-center md:pt-6 items-center pt-6 place-content-center">
                    <div className="pb-2">
                        <label className="lg:text-2xl md:text-2xl text-sm text-white font-poppins font-semibold mb-1 pr-4" for="inline-tech">Tech Used :</label>
                    </div>
                    <div className="">
                        <input className="w-full bg-[#23354E] appearance-none border-2 border-[#23354E] rounded focus:text-gray-900 text-[#D4DFC7] leading-tight focus:outline-none focus:bg-white focus:border-[#22C3FF]-500" id="inline-tech" name="tech" value={formData.tech || ""} onChange={handleChange} type="text" placeholder="Enter the technology used" required></input>
                    </div>
                    <p className="text-red-600">{formErrors.tech}</p>
                </div>
                
                <div className="lg:w-full lg:pt-8 md:w-full md:items-center md-center md:pt-6 items-center pt-6 place-content-center">
                    <div className="pb-2">
                        <label className="lg:text-2xl md:text-2xl text-sm text-white font-poppins font-semibold mb-1 pr-4" for="inline-pptlink">Project PPT Link :</label>
                    </div>
                    <div className="">
                        <input className="w-full bg-[#23354E] appearance-none border-2 border-[#23354E] rounded focus:text-gray-900 text-[#D4DFC7] leading-tight focus:outline-none focus:bg-white focus:border-[#22C3FF]-500" id="inline-pptlink" name="pptlink" value={formData.pptlink || ""} onChange={handleChange} type="text" placeholder="Enter the presentation link" required></input>
                    </div>
                    <p className="text-red-600">{formErrors.pptlink}</p>
                </div>

                <div className="lg:w-full lg:pt-8 md:w-full md:items-center md-center md:pt-6 items-center pt-6 pb-16 place-content-center">
                    <div className="pb-2">
                        <label className="lg:text-2xl md:text-2xl text-sm text-white font-poppins font-semibold mb-1 pr-4" for="inline-github">Github Link :</label>
                    </div>
                    <div className="">
                        <input className="w-full bg-[#23354E] appearance-none border-2 border-[#23354E] rounded focus:text-gray-900 text-[#D4DFC7] leading-tight focus:outline-none focus:bg-white focus:border-[#22C3FF]-500" id="inline-github" name="github" value={formData.github || ""} onChange={handleChange} type="text" placeholder="Enter the github link" required></input>
                    </div>
                    <p className="text-red-600">{formErrors.github}</p>
                </div>

                </div>

                

            </form>
        </div>
    )
}

export default Submissions;