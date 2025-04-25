import React, { useEffect, useState } from "react";

export default function App() {
  const [seconds, setSeconds] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  let timerId;
  useEffect(() => {
    if (isTimerRunning) {
      timerId = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(timerId);
  }, [isTimerRunning]);

  const handleStartStop = () => {
    setIsTimerRunning((prev) => !prev);
  };

  const handleReset = () => {
    setSeconds(0);
    setIsTimerRunning(false);
  };

  const timeFormat = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const timerSeconds = seconds % 60;
    return `${minutes}:${timerSeconds < 10 ? 0 : ""}${timerSeconds}`;
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      <p>Time: {timeFormat(seconds)}</p>
      <div>
        <button onClick={handleStartStop}>
          {isTimerRunning ? "Stop" : "Start"}
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}
