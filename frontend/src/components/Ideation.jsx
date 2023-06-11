import eva_lightleft from "../assets/images/eva_lightbgleft.png";
import eva_lightright from "../assets/images/eva_lightbgright.png";
import Navbar from '../components/Navbar';

function Ideation() {
    return (
        <div className="bg-[#24263B] h-screen pt-12">
            <Navbar currentPage='ideation'/><div>
                <img className="lg:float-left lg:w-auto lg:h-auto md:float-left md:w-40 md:h-auto float-left w-20 h-auto" src={eva_lightleft} alt="Registration eva" />
                <img className="lg:float-right lg:w-auto lg:h-auto md:float-right md:w-40 md:h-auto float-right w-20 h-auto" src={eva_lightright} alt="Registration eva" />
            </div>
            <div className="lg:text-6xl lg:pt-28 md:text-4xl md:pt-16 text-[#22C3FF] pt-12 text-center font-poppins font-bold text-3xl">IDEATION</div>
            <div className="lg:text-xl lg:pt-2 md:text-md md:pt-2 text-center text-[#ffffff] pt-2  font-poppins font-semibold">Everything begins with an Idea</div>

            <form className="lg:w-full md:w-full w-full">
                <div className="lg:mx-96 md:mx-48 mx-8">
                <div className="lg:w-full lg:pt-12 md:w-full md:items-center md-center md:pt-8 items-center pt-10 place-content-center">
                    <div className="pb-2">
                        <label className="lg:text-2xl md:text-2xl text-sm text-white font-poppins font-semibold mb-1 pr-4" for="inline-teamid">Team ID :</label>
                    </div>
                    <div className="">
                        <input className="w-full bg-[#23354E] appearance-none border-2 border-[#23354E] rounded focus:text-gray-900 text-[#D4DFC7] leading-tight focus:outline-none focus:bg-white focus:border-[#22C3FF]-500" id="inline-teamid" name="teamid" type="text" placeholder="Enter your team id"></input>
                    </div>
                    <p className="text-red-600"></p>
                </div>

                <div className="lg:w-full lg:pt-8 md:w-full md:items-center md-center md:pt-6 items-center pt-6 place-content-center">
                    <div className="pb-2">
                        <label className="lg:text-2xl md:text-2xl text-sm text-white font-poppins font-semibold mb-1 pr-4" for="inline-teamname">Team Name :</label>
                    </div>
                    <div className="">
                        <input className="w-full bg-[#23354E] appearance-none border-2 border-[#23354E] rounded focus:text-gray-900 text-[#D4DFC7] leading-tight focus:outline-none focus:bg-white focus:border-[#22C3FF]-500 h-10 p-2" id="inline-teamname" name="teamname" type="text" placeholder="Enter your team name"></input>
                    </div>
                    <p className="text-red-600"></p>
                </div>

                <div className="lg:w-full lg:pt-8 md:w-full md:items-center md-center md:pt-6 items-center pt-6 place-content-center">
                    <div className="pb-2">
                        <label className="lg:text-2xl md:text-2xl text-sm text-white font-poppins font-semibold mb-1 pr-4" for="inline-presentationlink">Presentation Link :</label>
                    </div>
                    <div className="">
                        <input className="w-full bg-[#23354E] appearance-none border-2 border-[#23354E] rounded focus:text-gray-900 text-[#D4DFC7] leading-tight focus:outline-none focus:bg-white focus:border-[#22C3FF]-500 h-10 p-2" id="inline-presentationlink" name="presentationlink" type="text" placeholder="Enter your presentation link"></input>
                    </div>
                    <p className="text-red-600"></p>
                </div>
                </div>
            </form>
        </div>
    );
}

export default Ideation;