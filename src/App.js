import React, { useState, useEffect, useRef } from "react"
import useChange from "./useChange";
function App() {
  const { handleChange, text, timeRemaining, isRunning, wordCount, startGame, textBoxRef } = useChange()

  return (
    <div>
      <h1>Test your Typing Speed!</h1>
      <textarea
        name="textarea"
        value={text}
        onChange={handleChange}
        placeholder="start typing here!"
        disabled={!isRunning}
        ref={textBoxRef}
      />
      <h4>Time Remaining: {timeRemaining}</h4>
      <button onClick={startGame} disabled={isRunning}>Start!</button>
      <h1>Word Count: {wordCount}</h1>
    </div>
  );
}

export default App;


