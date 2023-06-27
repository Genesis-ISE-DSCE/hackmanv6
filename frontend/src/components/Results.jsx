import React, { useState } from "react";
import Confetti from "react-confetti";
import prize1 from "../assets/images/gold.png";
import prize2 from "../assets/images/silver.png";
import prize3 from "../assets/images/bronze.png";
import dropdown from '../assets/images/dropdown.png';
import { Link } from "react-router-dom";

function Results() {
  const [showConfetti] = useState(true);
  const screenWidth = window.innerWidth;
  const [expanded, setExpanded] = useState(false);

  const prjdscp = [
    {
      question: 'Invalid : TerraDapp',
      image: prize1,
      answer: (
        <>
          Decentralised Crowdfunding for environmental crisis Web Application: Our platform aims to facilitate environmental crisis campaigns, allowing users to submit their needs. Additionally, users can make donations through their preferred web3 wallets. Visit the  {" "}
          <Link to="https://github.com/hackman-v6/invalid" style={{ color: "blue", textDecoration: "underline" }}>Github repository</Link> for more information.
        </>
      )
    },
    {
      question: '201CreatedChaos : LegalEdge',
      image: prize2,
      answer: (
        <>A solution to provide an intuitive interface for lawyers and clients to interact, ease the process of appointment scheduling, and build a community of people going through legal problems. Visit the  {" "}
          <Link to="https://github.com/hackman-v6/201CreatedChaos" style={{ color: "blue", textDecoration: "underline" }}>Github repository</Link> for more information.
        </>
      )
    },
    {
      question: 'TechHeads : PraniCure',
      image: prize3,
      answer: (
        <>
        Animal Helpline App: An app that connects users and NGOs seamlessly with just a snap. If there is an animal in need of medical help, with our app the user can send the animal picture with location and our algorithm will broadcast it to the nearest NGOs.Visit the  {" "}
          <Link to="https://github.com/hackman-v6/TechHeads" style={{ color: "blue", textDecoration: "underline" }}>Github repository</Link> for more information.
        </>
      )
    },
  ];

  const toggleExpand = (index) => {
    setExpanded((prevState) => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  return (
    <div id="res" className="bg-[#24263B] lg:pt-12 lg:pb-16 md:pt-12 md:pb-16 lg:px-20 md:16 px-2 pt-4 pb-4">
      <div className="lg:text-6xl lg:pb-12 md:text-4xl md:pb-4 text-[#22C3FF] pb-4 text-center font-poppins font-bold text-3xl">Results</div>
      <div className="lg:mx-20 md:mx-8 mx-4 text-6xl">
        {/* Large Screen Layout */}
        <div className="hidden lg:flex justify-center">
          <div className="faq-question">
            <img src={prjdscp[1].image} alt="Prize" className="w-30 mx-auto mb-4" />
            <button onClick={() => toggleExpand(1)} className="res-question-button">
              {prjdscp[1].question}
              <img className="w-4 ml-2" src={dropdown} alt="Drop down" />
              {expanded[1]}
            </button>
            {expanded[1] && <p className="faq-answer">{prjdscp[1].answer}</p>}
          </div>
          <div className="faq-question">
            <img src={prjdscp[0].image} alt="Prize" className="w-50 mx-auto mb-4" />
            <button onClick={() => toggleExpand(0)} className="res-question-button">
              {prjdscp[0].question}
              <img className="w-4 ml-2" src={dropdown} alt="Drop down" />
              {expanded[0]}
            </button>
            {expanded[0] && <p className="faq-answer">{prjdscp[0].answer}</p>}
          </div>
          <div className="faq-question">
            <img src={prjdscp[2].image} alt="Prize" className="w-30 mx-auto mb-4" />
            <button onClick={() => toggleExpand(2)} className="res-question-button">
              {prjdscp[2].question}
              <img className="w-4 ml-2" src={dropdown} alt="Drop down" />
              {expanded[2]}
            </button>
            {expanded[2] && <p className="faq-answer">{prjdscp[2].answer}</p>}
          </div>
        </div>

        {/* Medium and Small Screen Layout */}
        <div className="lg:hidden flex flex-col items-center">
          {prjdscp.map((item, index) => (
            <div key={index} className="faq-question">
              <img src={item.image} alt="Prize" className="w-30 mx-auto mb-4" />
              <button onClick={() => toggleExpand(index)} className="res-question-button">
                {item.question}
                <img className="w-4 ml-2" src={dropdown} alt="Drop down" />
                {expanded[index]}
              </button>
              {expanded[index] && <p className="faq-answer">{item.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Results;
