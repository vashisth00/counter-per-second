import React, { useState, useEffect } from "react";

function App() {
  // Declare a state variable "counter" with an initial value of 0
  const [counter, setCounter] = useState(0);

  // Declare a state variable "isRunning" with an initial value of false
  const [isRunning, setIsRunning] = useState(false);

  // Declare an effect that increments the counter by 1 every second
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning) {
      interval = setInterval(() => {
        setCounter(counter + 1);
      }, 1000);
    }
    // Return a cleanup function to stop the interval when the component unmounts or the "isRunning" state changes
    return () => {
      clearInterval(interval);
    };
  }, [counter, isRunning]); // Only re-run the effect when "counter" or "isRunning" changes

  // Declare a function to toggle the "isRunning" state
  function toggleRunning() {
    setIsRunning(!isRunning);
  }

  // Declare a function to reset the "counter" state to 0
  function resetCounter() {
    setCounter(0);
  }

  return (
    <div>
      {/* Display the counter */}
      <p>Counter: {counter}</p>
      {/* Display the Start/Pause button and bind the toggleRunning function to the onClick event */}
      <button onClick={toggleRunning}>{isRunning ? "Pause" : "Start"}</button>
      {/* Display the Reset button and bind the resetCounter function to the onClick event */}
      <button onClick={resetCounter}>Reset</button>
    </div>
  );
}

export default App;
