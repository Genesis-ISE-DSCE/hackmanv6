import React, { useState, useEffect } from "react";

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

  return (
    <><div id="landing">
          <section style={{ backgroundColor: "#27273F" }}>
              <div className="items-center justify-center">
                  <div className="items-center justify-center" style={{ position: "relative", top: "-30px" }}>
                      <img className="sm:px-[20%] px-[10%] pt-28" alt="Poster1" src={require('../assets/images/hackman_logo.png')} />
                  </div>
                  <h1 className="font-bold mb-8 text-center justify-center sm:text-5xl text-3xl mb-0" style={{ color: '#D4DFC7' }}>JUNE 4th-5th</h1>
                  <h2 className="font-bold mb-8 text-center justify-center sm:text-3xl text-1xl mb-0" style={{ color: '#22C3FF' }}>&lt;BreakIt&gt;  &lt;MakeIt&gt;  &lt;OwnIt&gt;</h2>
                
              </div>
          </section>
      </div><div className="flex flex-wrap justify-center" style={{ background: "#27273F" }}>
              <div className="flex flex-col items-center mr-6 rounded-lg p-2 bg-gray-200 sm:w-1/8" style={{ background: "#23354E" }}>
                  <div className="text-4xl sm:text-12xl font-bold text-7xl p-8" style={{ color: '#FFFF' }}>{days}</div>
                  <div className="text-2xl font-bold text-2xl" style={{ color: '#FFFF' }}>Days</div>
              </div>
              <div className="flex flex-col items-center mr-6 rounded-lg p-2 bg-gray-200 sm:w-1/8 sm:mt-0" style={{ background: "#23354E" }}>
                  <div className="text-4xl sm:text-12xl font-bold text-7xl p-8" style={{ color: '#FFFF' }}>{hours}</div>
                  <div className="text-2xl font-bold text-2xl" style={{ color: '#FFFF' }}>Hours</div>
              </div>
              
              <div className="flex flex-col items-center mr-6 rounded-lg p-2 bg-gray-200 sm:w-1/8" style={{ background: "#23354E" }}>
                  <div className="text-4xl sm:text-12xl font-bold text-7xl p-8" style={{ color: '#FFFF' }}>{minutes}</div>
                  <div className="text-2xl font-bold text-2xl" style={{ color: '#FFFF' }}>Minutes</div>
              </div>
              <div className="flex flex-col items-center mr-6 rounded-lg p-2 bg-gray-200 sm:w-1/8 sm:mt-0" style={{ background: "#23354E" }}>
                  <div className="text-4xl sm:text-12xl font-bold text-7xl p-8" style={{ color: '#FFFF' }}>{seconds}</div>
                  <div className="text-2xl font-bold text-2xl" style={{ color: '#FFFF' }}>Seconds</div>
              </div>
          </div></>
  );
}

export default Counter;
