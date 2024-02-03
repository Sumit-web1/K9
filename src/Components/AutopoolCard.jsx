import React, { useState, useEffect } from 'react';
import '../Style/Autopool.css';

function AutopoolCard() {
  const [timer, setTimer] = useState(0); // Initial timer value in seconds
  const [earnings, setEarnings] = useState(0);
  const [autopoolStarted, setAutopoolStarted] = useState(false);

  const levels = [
    { level: 1, earning: 0 },
    { level: 2, earning: 0 },
    { level: 3, earning: 0 },
    { level: 4, earning: 0 },
    { level: 5, earning: 0 },
    { level: 6, earning: 0 },
    { level: 7, earning: 0 },
    { level: 8, earning: 0 },
    { level: 9, earning: 0 },
  ];

  const startAutopool = () => {
    setAutopoolStarted(true);
    setTimer(1440); // Set the timer to 1 minute
  };

  useEffect(() => {
    let intervalId;

    if (autopoolStarted) {
      intervalId = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer > 0) {
            return prevTimer - 1;
          } else {
            setEarnings((prevEarnings) => prevEarnings + 5);
            setTimer(1400); // Reset the timer to 1 minute when it reaches 0
            return 0; // Reset to 0 to avoid any potential issues
          }
        });
      }, 1000);
    }

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [autopoolStarted]);

  return (
    <div>
      {levels.map((levelInfo) => (
        <div key={levelInfo.level} className='autopoolCard'>
          <h1>Level {levelInfo.level}</h1>
          <p id='autopoolEarning'>Earning: {levelInfo.earning + earnings}</p>
          <br />
          {autopoolStarted ? (
            <div className="startTimer" id='timer'>
              {formatTimer(timer)}
            </div>
          ) : (
            <div className="startTimer" onClick={startAutopool}>
              Start Autopool
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// Function to format the timer value into HH:MM:SS
function formatTimer(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

export default AutopoolCard;
