import React, { useState, useEffect } from "react";
import eva_bg_small_lef from '../assets/images/eva_bg_small_lef.png';
import eva_bg_small_rig from '../assets/images/eva_bg_small_rig.png';

function Counter(props) {
    const [countdown, setCountdown] = useState(props.initialCountdown);
    useEffect(() => {
        const timer =
        countdown > 0 &&
        setInterval(() => setCountdown(countdown - 1), 1000);
        return () => clearInterval(timer);
    }, [countdown]);

    const days = Math.floor(countdown / 86400).toLocaleString('en-US',{minimumIntegerDigits:2,useGrouping:false});

    const hours = Math.floor((countdown % 86400) / 3600).toLocaleString('en-US',{minimumIntegerDigits:2,useGrouping:false});

    const minutes = Math.floor((countdown % 3600) / 60).toLocaleString('en-US',{minimumIntegerDigits:2,useGrouping:false});

    const seconds = Math.floor(countdown % 60).toLocaleString('en-US',{minimumIntegerDigits:2,useGrouping:false});

    return(
        <div id="landing" className="bg-[#27273F] lg:pb-36 lg:pt-8 md:pb-8 md:pt-8 pb-8">
            <section>
                <div className="lg:items-center lg:justify-center md:items-center md:justify-center items-center justify-center">
                    <div className="lg:items-center lg:justify-center md:items-center md:justify-center items-center justify-center" style={{ position: "relative", top: "-30px" }}>
                        <img className="lg:pt-24 lg:pb-8 lg:w-auto md:pt-24 md:pb-8 md:w-auto pt-16 w-auto px-8 mx-auto" alt="Poster1" src={require('../assets/images/hackman_logo.png')} />
                    </div>
                    <div>
                        <img className="lg:float-left lg:ml-48 lg:w-[15%] md:float-left md:ml-8 md:w-[10%] float-left w-24" src={eva_bg_small_lef} alt="Registration eva" />
                        <img className="lg:float-right lg:mr-48 lg:w-[15%] md:float-right md:mr-8 md:w-[10%] float-right w-24" src={eva_bg_small_rig} alt="Registration eva" />
                    </div>
                    <h1 className="lg:pt-20 lg:text-5xl md:pt-14 md:text-3xl font-bold text-center justify-center text-2xl pt-8 pb-4 text-[#D4DFC7]">JUNE 4th-5th</h1>
                    <h2 className="lg:text-3xl md:text-2xl font-bold mb-8 text-center justify-center text-1xl text-[#22C3FF]">&lt;BreakIt&gt;  &lt;MakeIt&gt;  &lt;OwnIt&gt;</h2>
                </div>
            </section>
            <div className="flex flex-wrap justify-center">
                <div className="lg:flex lg:flex-col lg:items-center lg:mr-6 lg:rounded-lg lg:p-4 lg:h-auto lg:w-44 md:flex md:flex-col md:items-center md:mr-4 md:rounded-lg md:p-4 md:h-auto md:w-36 flex flex-col items-center w-16 mr-4 rounded-lg p-2 h-16 bg-[#23354E]">
                    <div className="lg:text-7xl lg:p-6 md:text-7xl md:p-4 text-3xl font-bold text-[#FFFFFF]">{days}</div>
                    <div className="lg:text-2xl md:text-2xl text-sm font-bold text-[#FFFFFF]">Days</div>
                </div>
                <div className="lg:flex lg:flex-col lg:items-center lg:mr-6 lg:rounded-lg lg:p-4 lg:h-auto lg:w-44 md:flex md:flex-col md:items-center md:mr-4 md:rounded-lg md:p-4 md:h-auto md:w-36 flex flex-col items-center w-16 mr-4 rounded-lg p-2 h-16 bg-[#23354E]">
                    <div className="lg:text-7xl lg:p-6 md:text-7xl md:p-4 text-3xl font-bold text-[#FFFFFF]">{hours}</div>
                    <div className="lg:text-2xl md:text-2xl text-sm font-bold text-[#FFFFFF]">Hours</div>
                </div>
                <div className="lg:flex lg:flex-col lg:items-center lg:mr-6 lg:rounded-lg lg:p-4 lg:h-auto lg:w-44 md:flex md:flex-col md:items-center md:mr-4 md:rounded-lg md:p-4 md:h-auto md:w-36 flex flex-col items-center w-16 mr-4 rounded-lg p-2 h-16 bg-[#23354E]">
                    <div className="lg:text-7xl lg:p-6 md:text-7xl md:p-4 text-3xl font-bold text-[#FFFFFF]">{minutes}</div>
                    <div className="lg:text-2xl md:text-2xl text-sm font-bold text-[#FFFFFF]">Minutes</div>
                </div>
                <div className="lg:flex lg:flex-col lg:items-center lg:rounded-lg lg:p-4 lg:h-auto lg:w-44 md:flex md:flex-col md:items-center md:rounded-lg md:p-4 md:h-auto md:w-36 flex flex-col items-center w-16 rounded-lg p-2 h-16 bg-[#23354E]">
                    <div className="lg:text-7xl lg:p-6 md:text-7xl md:p-4 text-3xl font-bold text-[#FFFFFF]">{seconds}</div>
                    <div className="lg:text-2xl md:text-2xl text-sm font-bold text-[#FFFFFF]">Seconds</div>
                </div>
            </div>
        </div>
    );
}

export default Counter;
