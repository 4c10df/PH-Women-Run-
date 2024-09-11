import React, { useState, useEffect } from 'react';
import "../styles/countdown.css";

const Countdown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const eventDate = new Date(targetDate); // Parse the date in the custom format
    const difference = eventDate - now;

    return difference > 0
      ? {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        }
      : {};
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="countdown-container ">
      <div className="date">
        <p className="text-left text-[14px] leading-[24px]">Date: </p>
        <h3>{new Date(targetDate).toDateString()}</h3>
      </div>
      <div className="timer">
        {["days", "hours", "minutes", "seconds"].map((unit) => (
          <div key={unit} className="time-box">
            <p className="text-left text-[14px] leading-[24px]">
              {unit.charAt(0).toUpperCase() + unit.slice(1)}
            </p>
            <h3 className="time-value">{timeLeft[unit] || "00"}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countdown;
