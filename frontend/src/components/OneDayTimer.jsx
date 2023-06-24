import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import axios from 'axios';
import ima from "../assets/images/hackman_logo.png"

function OneDayTimer() {
  const [countdown, setCountdown] = useState(null);
  const [timerStarted, setTimerStarted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [text,setText] = useState(false);

  useEffect(() => {
    let intervalId;

    if (timerStarted) {
      fetchServerTime()
        .then((serverTime) => {
          const remainingTime = calculateRemainingTime(serverTime);
          setCountdown(remainingTime);
          startInterval();
        })
        .catch((error) => {
          console.error("Error fetching server time:", error);
        });
    } else {
      clearInterval(intervalId);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [timerStarted]);

  const fetchServerTime = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/v1/getServerTime");
      const serverTime = new Date(response.data.serverTime);
      return serverTime;
    } catch (error) {
      console.error("Error fetching server time:", error);
      throw new Error("Failed to fetch server time");
    }
  };

  const calculateRemainingTime = (serverTime) => {
    const currentTime = new Date();

    if (isNaN(serverTime) || isNaN(currentTime)) {
      return 0; // Return 0 if either time is not valid
    }

    const timeDifference = serverTime - currentTime;
    const remainingTime = Math.max(24 * 60 * 60 - Math.floor(timeDifference / 1000), 0);
    return remainingTime;
  };

  const startTimer = () => {
    setShowConfetti(true);
    setText(true)
    fetchServerTime()
      .then((serverTime) => {
        const remainingTime = calculateRemainingTime(serverTime);
        setCountdown(remainingTime);
        setTimerStarted(true);

        setTimeout(() => {
          setShowConfetti(false);
          setTimerStarted(false);
        }, 60000); // Stop confetti after 1 minute
      })
      .catch((error) => {
        console.error("Error fetching server time:", error);
      });
  };

  const startInterval = () => {
    const intervalId = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    setTimeout(() => {
      clearInterval(intervalId);
      setShowConfetti(false);
      setTimerStarted(false);
    }, countdown * 1000 + 60000); // Stop timer and confetti after countdown reaches 0 and 1 minute has passed
  };

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600).toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });
    const minutes = Math.floor((time % 3600) / 60).toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });
    const seconds = Math.floor(time % 60).toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });

    return { hours, minutes, seconds };
  };

  const { hours, minutes, seconds } = formatTime(countdown);

  return (
    <div className="">
      <div
        id="landing"
        className=" bg-[#24263B] lg:pb-32 lg:pt-24 md:pb-8 md:pt-8 pb-8 pt-16 h-screen flex flex-col items-center justify-center"
      >
        <div className="mb-24">
            <img className="w-96 scale-125" src={ima} alt="" />
        </div>
        <div className="scale-150 flex flex-wrap justify-center">
          <div className="lg:flex lg:flex-col lg:items-center lg:mr-6 lg:rounded-lg lg:p-4 lg:h-auto lg:w-44 md:flex md:flex-col md:items-center md:mr-4 md:rounded-lg md:p-4 md:h-auto md:w-36 flex flex-col items-center w-16 mr-4 rounded-lg p-2 h-16 bg-[#23354E]">
            <div className="lg:text-7xl lg:p-6 md:text-7xl md:p-4 text-3xl font-bold text-[#FFFFFF]">
              {hours}
            </div>
            <div className="lg:text-2xl md:text-2xl text-sm font-bold text-[#FFFFFF]">
              Hours
            </div>
          </div>
          <div className="lg:flex lg:flex-col lg:items-center lg:mr-6 lg:rounded-lg lg:p-4 lg:h-auto lg:w-44 md:flex md:flex-col md:items-center md:mr-4 md:rounded-lg md:p-4 md:h-auto md:w-36 flex flex-col items-center w-16 mr-4 rounded-lg p-2 h-16 bg-[#23354E]">
            <div className="lg:text-7xl lg:p-6 md:text-7xl md:p-4 text-3xl font-bold text-[#FFFFFF]">
              {minutes}
            </div>
            <div className="lg:text-2xl md:text-2xl text-sm font-bold text-[#FFFFFF]">
              Minutes
            </div>
          </div>
          <div className="lg:flex lg:flex-col lg:items-center lg:mr-6 lg:rounded-lg lg:p-4 lg:h-auto lg:w-44 md:flex md:flex-col md:items-center md:mr-4 md:rounded-lg md:p-4 md:h-auto md:w-36 flex flex-col items-center w-16 mr-4 rounded-lg p-2 h-16 bg-[#23354E]">
            <div className="lg:text-7xl lg:p-6 md:text-7xl md:p-4 text-3xl font-bold text-[#FFFFFF]">
              {seconds}
            </div>
            <div className="lg:text-2xl md:text-2xl text-sm font-bold text-[#FFFFFF]">
              Seconds
            </div>
          </div>
        </div>
        {!timerStarted && (
          <button
            className="scale-150 mt-24 px-4 py-2 bg-blue-500 text-white font-bold rounded"
            onClick={startTimer}
          >
            Start Hackathon
          </button>
        )}{
            text && (
               <p className="mt-24 py-2 text-4xl text-white font-semibold">Let The Hack Begins</p>
              )
        }
      </div>
      {showConfetti && <Confetti />}
    </div>
  );
}

export default OneDayTimer;
