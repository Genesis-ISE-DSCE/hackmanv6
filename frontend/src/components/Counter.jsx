import React, { useState, useEffect } from "react";

function Counter(props) {
  const [countdown, setCountdown] = useState(props.initialCountdown);

  useEffect(() => {
    const timer =
      countdown > 0 &&
      setInterval(() => setCountdown(countdown - 1), 1000);

    return () => clearInterval(timer);
  }, [countdown]);

  const days = Math.floor(countdown / 86400);
  const hours = Math.floor((countdown % 86400) / 3600);
  const minutes = Math.floor((countdown % 3600) / 60);
  const seconds = Math.floor(countdown % 60);

  return (
    <div className="flex justify-center items-center" style={{background:"#002147"}}>
      <div className="flex flex-col items-center mr-4 rounded-lg p-2 bg-gray-200" style={{background:"#537d90"}}>
        <div className="text-4xl font-bold text-7xl p-8" style={{color:'#FFFF'}}>{days}</div>
        <div className="text-2xl font-bold text-2xl" style={{color:'#FFFF'}}>Days</div>
      </div>
      <div className="flex flex-col items-center mr-4 rounded-lg p-2 bg-gray-200" style={{background:"#537d90"}}>
        <div className="text-4xl font-bold text-7xl p-8" style={{color:'#FFFF'}}>{hours}</div>
        <div className="text-2xl font-bold text-2xl" style={{color:'#FFFF'}}>Hours</div>
      </div>
      <div className="flex flex-col items-center mr-4 rounded-lg p-2 bg-gray-200" style={{background:"#537d90"}}>
        <div className="text-4xl font-bold text-7xl p-8" style={{color:'#FFFF'}}>{minutes}</div>
        <div className="text-2xl font-bold text-2xl" style={{color:'#FFFF'}}>Minutes</div>
      </div>
      <div className="flex flex-col items-center mr-4 rounded-lg p-2 bg-gray-200" style={{background:"#537d90"}}>
        <div className="text-4xl font-bold text-7xl p-8" style={{color:'#FFFF'}}>{seconds}</div>
        <div className="text-2xl font-bold text-2xl" style={{color:'#FFFF'}}>Seconds</div>
      </div>
    </div>
  );
}

export default Counter;
