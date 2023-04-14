import React from "react";

const Timeline = () => {
  const events = [
    {
      date: "May 4th-24th",
      title: "Registration",
      link: "https://example.com/event1",
    },
    {
      date: "June 1st-5th",
      title: "Idea Submission",
      link: "https://example.com/event2",
    },
    {
      date: "June 4th-8th",
      title: "Hack Begins",
      link: "https://example.com/event3",
    },
    {
      date: "June 6th",
      title: "Results",
      link: "https://example.com/event4",
    },
  ];

  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 bg-[#24263B] pt-12 pb-16">
      <h1 className="lg:text-6xl lg:pb-16 md:text-4xl md:pb-6 text-[#22C3FF] pb-4 text-center font-poppins font-bold text-3xl">EVENT TIMELINE</h1>
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute h-full border-2 border-[#22C3FF] left-1/2 transform -translate-x-1/2 hidden lg:block"></div>

        {/* Timeline circles */}
        <div className="absolute top-0 w-6 h-6 rounded-full bg-[#22C3FF] left-1/2 mt-0 hidden lg:block" style={{ transform: "translate(-50%, -50%)" }}></div>
        <div className="absolute top-1/4 w-6 h-6 rounded-full bg-[#22C3FF] left-1/2 mt-1/4 hidden lg:block" style={{ transform: "translate(-50%, -50%)" }}></div>
        <div className="absolute top-1/2 w-6 h-6 rounded-full bg-[#22C3FF] left-1/2 mt-1/2 hidden lg:block" style={{ transform: "translate(-50%, -50%)" }}></div>
        <div className="absolute top-3/4 w-6 h-6 rounded-full bg-[#22C3FF] left-1/2 mt-3/4 hidden lg:block" style={{ transform: "translate(-50%, -50%)" }}></div>

        {/* Event boxes */}
        {events.map((event, index) => (
          <div key={index} className={`${index % 2 === 0 ? "lg:mr-auto" : "lg:ml-auto"} mb-8 rounded-lg shadow-lg bg-[#23354E] lg:w-2/5 ml-50`}>
            <div className="relative px-6 py-4">
              
              <p className="lg:text-3xl lg:pt-2 md:text-2xl md:pt-2 text-[#ffffff] pt-2 text-lg font-poppins font-semibold">{event.title}</p>
              <p className="lg:text-xl lg:pt-2 md:text-0.5xl md:pt-2 text-[#ffffff] pt-2 text-lg font-poppins font-semibold">{event.date}</p>
              <a href={event.link} className="lg:text-0.5xl md:text-0.25xl font-bold mb-8 text-center justify-center text-1xl text-[#22C3FF] hover:text-[#D4DFC7]">
                Link
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
