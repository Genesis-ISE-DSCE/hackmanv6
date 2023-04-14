import { Link } from 'react-router-dom';
import eva_bg from "../assets/images/eva_bg.png";

function About() {
    return(
        <div id="about" className="bg-[#24263B] lg:pt-12 lg:pb-16 lg:flex md:pt-12 md:pb-16 md:flex pb-20">
            <div className="lg:pl-20 lg:w-1/2 md:pl-20 md:w-1/2 p-4">
                <div className="lg:text-6xl lg:pb-2 md:text-4xl md:pb-2 text-[#22C3FF] pb-2 font-poppins font-bold text-3xl">HACKMAN</div>
                <div className="lg:text-xl lg:pt-2 md:text-md md:pt-2 text-[#22C3FF] pt-2 font-poppins font-semibold">Code is our canvas, innovation is our paint</div>
                <div className="lg:text-xl lg:pt-2 md:text-md md:pt-2 text-[#22C3FF] pt-2 pb-2 font-poppins font-semibold">Date : June 4th - 5th</div>
                <div className="text-[#ffffff] text-justify lg:text-xl md:text-lg text-sm">HackMan v.6 is an Inter College, extravagant 24-hours Hackathon, hosted by the Department of ISE, Dayananda Sagar College of Engineering (DSCE), Bangalore. We give the brightest of minds a chance to brainstorm as a team and come up with unique solutions, code it out and solve some of the pressing problems of our society. Over the first 4 versions we have seen some brilliant projects and we challenge you to top them off with your Out-of-the-box ideas. “You can't solve a problem on the same level that it was created. You have to rise above it to the next level.”</div>
                <div className="lg:flex lg:justify-center lg:float-left lg:pt-8 md:flex md:justify-center md:float-left md:pt-8 flex justify-center float-left pt-6">
                    <Link to={"/registeration"} className="lg:text-3xl shadow bg-[#D4DFC7] hover:bg-[#22C3FF] hover:text-white focus:shadow-outline focus:outline-none text-black font-bold py-2 px-4 rounded-lg text-sm" type="button">
                        REGISTER
                    </Link>              
                </div>
            </div>
            <div className="lg:w-1/2 lg:flex lg:items-center lg:justify-center md:w-1/2 md:flex md:items-center md:justify-center flex items-center">
                <img className="lg:block lg:w-[40%] md:w-[50%] hidden" src={eva_bg} alt="Registration eva" />
            </div>
        </div>
    );
}

export default About;