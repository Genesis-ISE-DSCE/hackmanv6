import React, { useState } from 'react';
import dropdown from '../assets/images/dropdown.png';
import '../App.css';

const Faq = () => {
  // State to keep track of the expanded/collapsed state of each question
  const [expanded, setExpanded] = useState(false);

  // Array of FAQ questions and answers
  const faqList = [
    {
      question: 'What is Hackman v6.0?',
      answer: 'Hackman v6.0 is a 24-hour hackathon event that brings together tech enthusiasts, programmers, designers, and other individuals interested in technology to collaborate and develop innovative projects.'
    },
    {
      question:  'Who can participate in Hackman v6.0?',
      answer: 'Any student pursuing engineering from any year with an interest in technology can participate in Hackman v6.0. This includes programmers, designers, data scientists, project managers, and other tech enthusiasts.'    
    },
    // {
    //   question: 'How much is the Registration fee?',
    //   answer: 'The registration fees for Hackman v6.0 is ₹400 per team in the team.'
    // },
    // {
    //   question: 'How many people can I have in my team?',
    //   answer: 'You can have a maximum of 3 members and a minimum of 1 in a team!'
    // }
    // ,
    // {
    //   question: 'How long is the event?',
    //   answer: 'Everybody gets an approx. of 22 hours to work on their hacks. Including inauguration and prize distributions etc, the entire event lasts for about 24 hours. You are free to leave the venue before 7 PM on day one and come back the next morning after 6 AM.      '
    // },
    // {
    //   question: 'Where will the Hackathon be held?',
    //   answer: 'Department of Information Science and Engineering (Building no. 19), Dayananda Sagar College of Engineering, Kumaraswamy Layout, Bengaluru - 560078'
    // }
    // ,
    // {
    //   question:  'Will there be food?',
    //   answer: 'Yes. Two lunches, dinner and breakfast will be provided.'    
    // }
    {
      question:  'What is the theme of Hackman v6.0?',
      answer: 'Hackman v6.0 has an open theme, meaning participants are free to work on any project they choose.'    
    },
    {
      question:  'How long is Hackman v6.0?',
      answer: 'Hackman v6.0 is a 24-hour hackathon event, giving participants a full day to work on their projects and bring their ideas to life.'    
    },
    {
      question:  'Will food, shelter and snacks be provided at Hackman v6.0?',
      answer: 'Yes, food, shelter and snacks will be provided for participants throughout the duration of Hackman v6.0 to help ensure they can stay focused on their projects.'    
    },
    {
      question:  'How will projects be judged at Hackman v6.0?',
      answer: 'Projects at Hackman v6.0 will be judged based on a set of criteria established by the event organizers, which may include factors such as creativity, technical complexity, feasibility, and potential impact.'    
    },
    {
      question:  'How many members can be on a team at Hackman v6.0?',
      answer: 'Teams at Hackman v6.0 can range in size from 2 to 4 members. This allows participants to collaborate with others and share the workload while still keeping the teams small enough to ensure efficient communication and decision-making.'    
    },
    {
      question:  'What should I bring to this hackathon?',
      answer: 'You should bring your laptop, any necessary chargers or accessories, and any other tools or resources you may need to work on your project. Optionally, you may also want to bring a change of clothes, toiletries, and any snacks or drinks you prefer.'    
    },
    {
      question:  'Do I need to have programming experience to participate?',
      answer: 'While programming experience is certainly helpful, it is not always required to participate in HACKMAN. We also welcome designers, data scientists, and other tech enthusiasts who can contribute to the development of a project in other ways.'    
    },
    {
      question:  'What are the benefits of participating in Hackman v6.0?',
      answer: 'It offers a variety of benefits, including the opportunity to learn new skills, network with like-minded individuals, gain exposure to new technologies and ideas, and potentially win prizes or recognition for your work.'    
    }
  ];

  // Function to toggle the expanded/collapsed state of a question
  const toggleExpand = (index) => {
    setExpanded((prevState) => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  return (
    <div id="faq" className="bg-[#24263B] lg:pt-12 lg:pb-16 md:pt-12 md:pb-16 pt-4 pb-4">
    <div className="lg:text-6xl lg:pb-12 md:text-4xl md:pb-4 text-[#22C3FF] pb-4 text-center font-poppins font-bold text-3xl">FAQ's</div>
    <div className="faq-section lg:mx-20 md:mx-8 mx-4 text-6xl">
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
