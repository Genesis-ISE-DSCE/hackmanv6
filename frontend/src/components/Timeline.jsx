import React from "react";

const Timeline = () => {
  const events = [
    {
      date: "May 24th : 7:30 AM - 8:30 AM",
      title: "Team Check-in",
    },
    {
      date: "May 24th : 9:00 AM - 10:30 AM",
      title: "Inauguration + Quick Guide",
    },
    {
      date: "May 24th : 11:00 AM",
      title: "Get, Set, Hackman v6.0!",
    },
    {
      date: "May 24th : 2:00 PM - 3:00 AM",
      title: "Feast Hour (Lunch)",
    },
    {
      date: "May 24th : 3:00 PM",
      title: "Engaged Mode Activated!",
    },
    {
      date: "May 24th : 5:30 PM - 6:00 PM",
      title: "Refreshment Break",
    },
    {
      date: "May 24th : 6:00 PM",
      title: "Resume Action!",
    },
    {
      date: "May 24th : 8:30 PM - 9:30 PM",
      title: "Dinner Dash",
    },
    {
      date: "May 24th : 9:30 PM",
      title: "Keep Momentum!",
    },
    {
      date: "May 24th : 11:00 PM - 11:30 PM",
      title: "Networking Bonanza",
    },
    {
      date: "May 25th : 12:30 AM - 1:30 AM",
      title: "Game Zone",
    },
    {
      date: "May 25th : 1:30 AM",
      title: "Dark Mode On!",
    },
    {
      date: "May 25th : 3:30 AM - 4:30 AM",
      title: "Night Owl Shenanigans",
    },
    {
      date: "May 25th : 4:30 AM",
      title: "Final Stretch",
    },
    {
      date: "May 25th : 7:00 AM - 8:00 AM",
      title: "Rejuvenate",
    },
    {
      date: "May 25th : 8:00 AM - 9:00 AM",
      title: "Breakfast Boost",
    },
    {
      date: "May 25th : 9:00 AM - 10:00 AM",
      title: "Evaluation Excursion - Phase 1",
    },
    {
      date: "May 25th : 10:00 AM - 10:30 AM",
      title: "Tactical Adjustments",
    },
    {
      date: "May 25th : 10:30 AM - 12:00 PM",
      title: "Evaluation Excursion - Phase 2",
    },
    {
      date: "May 25th : 12:00 PM - 12:30 PM",
      title: "Victors' Celebration",
    },
  ];

  return (
    <div id = "schedule" className="mx-auto px-4 sm:px-6 lg:px-8 bg-[#24263B] lg:pt-12 lg:pb-16 md:pt-12 md:pb-16 pt-8 pb-2">
      <h1 className="lg:text-6xl lg:pb-16 md:text-4xl md:pb-6 text-[#22C3FF] pb-4 text-center font-poppins font-bold text-3xl">Event Schedule</h1>
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute h-full border-2 border-[#22C3FF] left-1/2 transform -translate-x-1/2 hidden lg:block"></div>

        {/* Timeline circles */}
        <div className="absolute top-0 w-6 h-6 rounded-full bg-[#22C3FF] left-1/2 mt-0 hidden lg:block" style={{ transform: "translate(-50%, -50%)" }}></div>
        <div className="absolute top-1/6 w-6 h-6 rounded-full bg-[#22C3FF] left-1/2 mt-1/4 hidden lg:block" style={{ transform: "translate(-50%, -50%)" }}></div>
        <div className="absolute top-2/6 w-6 h-6 rounded-full bg-[#22C3FF] left-1/2 mt-1/2 hidden lg:block" style={{ transform: "translate(-50%, -50%)" }}></div>
        <div className="absolute h-full border-2 border-[#22C3FF] left-1/2 transform -translate-x-1/2"></div>

        {/* Timeline for small and medium devices */}
        <div className="max-w-xl mx-auto flex flex-col items-center lg:hidden">
          {events.map((event, index) => (
            <div key={event.id} className="mb-8 relative bg-[#23354E] rounded-lg mx-8 sm:w-1/2 w-60">
              <div className="flex items-center mb-4">

                <div className="relative px-6 w-full text-center py-4">

                  <p className="lg:text-xl lg:pt-2 md:text-xl md:pt-2 text-[#ffffff] pt-2 text-md font-poppins font-semibold">{event.title}</p>
                  <p className="lg:text-md lg:pt-2 md:text-md md:pt-2 text-[#ffffff] pt-2 text-xs font-poppins font-semibold">{event.date}</p>
                  <a
                    href={event.link}
                    className="lg:text-0.5xl md:text-0.25xl font-bold mb-8 text-center justify-center text-1xl text-[#22C3FF] hover:text-[#24263B]"
                  >
                    {/* Link &gt; */}
                  </a>
                </div>
              </div>
            </div>

          ))}
        </div>

        {/* Event boxes */}
        {events.map((event, index) => (
          <div
            key={index}
            className={`${index % 2 === 0 ? "lg:mr-auto" : "lg:ml-auto"
              } mb-8 rounded-lg shadow-lg bg-[#23354E] lg:w-1/4 ml-60 mr-60 hidden lg:block pt-2`}
          >
            <div className="relative px-4 py-3">
              <p className="lg:text-xl lg:pt-0 md:text-2xl md:pt-2 text-[#ffffff] pt-2 text-lg font-poppins font-semibold">{event.title}</p>
              <p className="lg:text-md lg:pt-2 md:text-0.5xl md:pt-2 text-[#ffffff] pt-2 text-lg font-poppins font-semibold">{event.date}</p>
              <a href={event.link} className="lg:text-0.5xl md:text-0.25xl font-bold mb-8 text-center justify-center text-1xl text-[#22C3FF] hover:text-[#D4DFC7]">
                {/* Link &gt; */}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
