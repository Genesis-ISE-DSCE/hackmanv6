import React, { useState } from 'react';
import dropdown from '../assets/images/dropdown.png';
import '../App.css';

const Faq = () => {
  // State to keep track of the expanded/collapsed state of each question
  const [expanded, setExpanded] = useState(false);

  // Array of FAQ questions and answers
  const faqList = [
    {
      question: 'Who can attend Hackman v6.0?',
      answer: 'The only restriction is that you must be a student! You should have a valid current University / College ID. Build your team and register.'
    },
    {
      question: 'How much is the Registration fee?',
      answer: 'The registration fees for Hackman v6.0 is ₹400 per team in the team.'
    },
    {
      question: 'How many people can I have in my team?',
      answer: 'You can have a maximum of 3 members and a minimum of 1 in a team!'
    }
    ,
    {
      question: 'How long is the event?',
      answer: 'Everybody gets an approx. of 22 hours to work on their hacks. Including inauguration and prize distributions etc, the entire event lasts for about 24 hours. You are free to leave the venue before 7 PM on day one and come back the next morning after 6 AM.      '
    },
    {
      question: 'Where will the Hackathon be held?',
      answer: 'Department of Information Science and Engineering (Building no. 19), Dayananda Sagar College of Engineering, Kumaraswamy Layout, Bengaluru - 560078'
    }
    ,
    {
      question:  'Will there be food?',
      answer: 'Yes. Two lunches, dinner and breakfast will be provided.'    }
  ];

  // Function to toggle the expanded/collapsed state of a question
  const toggleExpand = (index) => {
    setExpanded((prevState) => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  return (
    <div id="sponsors" className="bg-[#24263B] pt-12 pb-16">
    <div className="lg:text-6xl lg:pb-12 md:text-4xl md:pb-4 text-[#22C3FF] pb-4 text-center font-poppins font-bold text-3xl">FAQ's</div>
    <div className="faq-section lg:mx-12 md:mx-8 mx-4 text-6xl">
      {faqList.map((faq, index) => (
        <div key={index} className="faq-question">
          <button onClick={() => toggleExpand(index)} className="faq-question-button">
            {faq.question}
            <img className="w-4 ml-2" src={dropdown} alt="Drop down" />
            {expanded[index]}
          </button>
          {expanded[index] && <p className="faq-answer">{faq.answer}</p>}
        </div>
      ))}
    </div>
    </div>
  );
};

export default Faq;
