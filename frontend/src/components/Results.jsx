import React, { useState } from "react";
import Confetti from "react-confetti";
import prize1 from "../assets/images/gold.png";
import prize2 from "../assets/images/silver.png";
import prize3 from "../assets/images/bronze.png";

function Results() {
    const [showConfetti] = useState(true);
    const screenWidth = window.innerWidth;
    const prize = (screenWidth) => {
        if (screenWidth < 768){
            return (
                <div className="lg:flex lg:justify-between">
                <div className="lg:flex lg:flex-col md:flex md:flex-col">
                    <img className="lg:w-80 lg:object-center mx-auto w-48" src={prize1} alt="Prize 1" />
                    <p className="text-[#D4DFC7] font-bold lg:text-2xl">Team : Invalid</p>
                    <p className="text-[#D4DFC7] font-bold lg:text-2xl">College : BIT</p>
                    {/* <p className="text-[#D4DFC7] font-bold lg:text-2xl">Project : </p> */}
                </div>
                <div className="lg:flex lg:flex-col md:flex md:flex-col">
                    <img className="lg:w-96 lg:object-center mx-auto w-48" src={prize2} alt="Prize 2" />
                    <p className="text-[#D4DFC7] font-bold lg:text-2xl">Team : 201CreatedChaos</p>
                    <p className="text-[#D4DFC7] font-bold lg:text-2xl">College : DSCE</p>
                    {/* <p className="text-[#D4DFC7] font-bold lg:text-2xl">Project : </p> */}
                </div>
                <div className="lg:flex lg:flex-col md:flex md:flex-col">
                    <img className="lg:w-80 lg:object-center mx-auto w-48" src={prize3} alt="Prize 3" />
                    <p className="text-[#D4DFC7] font-bold lg:text-2xl">Team : TechHeads</p>
                    <p className="text-[#D4DFC7] font-bold lg:text-2xl">College : DSATM</p>
                    {/* <p className="text-[#D4DFC7] font-bold lg:text-2xl">Project : </p> */}
                </div>
                </div>
            );
        }
        else {
            return (
                <div className="lg:flex lg:justify-between">
                <div className="lg:flex lg:flex-col md:flex md:flex-col">
                    <img className="lg:w-80 lg:object-center mx-auto w-48" src={prize2} alt="Prize 2" />
                    <p className="text-[#D4DFC7] font-bold lg:text-2xl">Team : 201CreatedChaos</p>
                    <p className="text-[#D4DFC7] font-bold lg:text-2xl">College : DSCE</p>
                    {/* <p className="text-[#D4DFC7] font-bold lg:text-2xl">Project : </p> */}
                </div>
                <div className="lg:flex lg:flex-col md:flex md:flex-col">
                    <img className="lg:w-96 lg:object-center mx-auto w-48" src={prize1} alt="Prize 1" />
                    <p className="text-[#D4DFC7] font-bold lg:text-2xl">Team : Invalid</p>
                    <p className="text-[#D4DFC7] font-bold lg:text-2xl">College : BIT</p>
                    {/* <p className="text-[#D4DFC7] font-bold lg:text-2xl">Project : </p> */}
                </div>
                <div className="lg:flex lg:flex-col md:flex md:flex-col">
                    <img className="lg:w-80 lg:object-center mx-auto w-48" src={prize3} alt="Prize 3" />
                    <p className="text-[#D4DFC7] font-bold lg:text-2xl">Team : TechHeads</p>
                    <p className="text-[#D4DFC7] font-bold lg:text-2xl">College : DSATM</p>
                    {/* <p className="text-[#D4DFC7] font-bold lg:text-2xl">Project : </p> */}
                </div>
            </div>
            );
        }
    }
    return (
        <div id = "results" className="mx-auto px-4 sm:px-6 lg:px-24 md:px-10 bg-[#24263B] lg:pt-4 lg:pb-16 md:pt-12 md:pb-16 pt-8 pb-2">
            <h1 className="lg:text-6xl lg:pb-10 md:text-4xl md:pb-6 text-[#22C3FF] pb-4 text-center font-poppins font-bold text-3xl">Results</h1>
            {prize(screenWidth)}
            {showConfetti && <Confetti />}
        </div>
    )
}

export default Results;