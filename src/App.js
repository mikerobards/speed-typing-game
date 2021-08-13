import React, { useState, useEffect } from "react"

function App() {
  const [text, setText] = useState("")
  const [timeRemaining, setTimeRemaining] = useState(15)
  const [isRunning, setIsRunning] = useState(false)

  const handleChange = (e) => {
    const { value } = e.target
    setText(value)
  }

  const wordCount = (str) => {
    const wordsArr = str.trim().split(" ")
    return wordsArr.filter(word => word !== "").length
  }

  useEffect(() => {
    if (timeRemaining > 0 && isRunning) {
      setTimeout(() => {
        setTimeRemaining(time => time - 1)
      }, 1000)
    } else {
      setIsRunning(false)
    }
  }, [timeRemaining, isRunning])


  return (
    <div>
      <h1>Test your Typing Speed!</h1>
      <textarea
        name="textarea"
        value={text}
        onChange={handleChange}
        placeholder="start typing here!"
      />
      <h4>Time Remaining: {timeRemaining}</h4>
      <button onClick={() => setIsRunning(true)}>Start!</button>
      <h1>Word Count: {!isRunning && wordCount(text)}</h1>
      <p>setIsRunning: {isRunning === true ? <span>True</span> : <span>False</span>}</p>

    </div>
  );
}

export default App;


