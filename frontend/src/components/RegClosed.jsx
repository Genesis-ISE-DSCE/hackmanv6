import eva_lightleft from "../assets/images/eva_lightbgleft.png";
import eva_lightright from "../assets/images/eva_lightbgright.png";
import Navbar from './Navbar';

function RegClosed() {
    return (
        <div className="bg-[#24263B] h-screen pt-12">
            <Navbar currentPage='regclosed'/><div>
                <img className="lg:float-left lg:w-auto lg:h-auto md:float-left md:w-40 md:h-auto float-left w-20 h-auto" src={eva_lightleft} alt="Registration eva" />
                <img className="lg:float-right lg:w-auto lg:h-auto md:float-right md:w-40 md:h-auto float-right w-20 h-auto" src={eva_lightright} alt="Registration eva" />
            </div>
            <div className="lg:text-6xl lg:pt-72 md:text-4xl md:pt-60 text-[#22C3FF] pt-48 text-center font-poppins font-bold text-2xl">REGISTRATIONS ARE CLOSED</div>
            <div className="lg:text-xl lg:pt-2 md:text-md md:pt-2 text-center text-[#ffffff] pt-2  font-poppins font-semibold">We'll see you next year!!</div> 
        </div>
    );
}

export default RegClosed;