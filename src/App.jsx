import React, { useEffect, useState } from "react";

export default function App() {
  const [seconds, setSeconds] = useState(0);

  // const [minutes, setMinutes] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  let timerId;
  useEffect(() => {
    if (isTimerRunning) {
      timerId = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 100);
    } else {
      // clearInterval(timerId);
    }

    return () => clearInterval(timerId);
  }, [isTimerRunning]);

  const handleStartStop = () => {
    setIsTimerRunning((prev) => !prev);
  };

  const handleReset = () => {
    setSeconds(0);

    // setMinutes(0);
    setIsTimerRunning(false);
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      <p>
        Time: {Math.floor(seconds / 60)}:{seconds < 10 ? 0 : ""}
        {seconds > 59 ? seconds % 60 : seconds}{" "}
      </p>
      <div>
        <button onClick={handleStartStop}>
          {isTimerRunning ? "Stop" : "Start"}
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}
