import React, { useState, useEffect } from "react"

function App() {
  const [text, setText] = useState("")
  const [timeRemaining, setTimeRemaining] = useState(5)

  const handleChange = (e) => {
    const { value } = e.target
    setText(value)
  }

  const wordCount = (str) => {
    const wordsArr = str.trim().split(" ")
    return wordsArr.filter(word => word !== "").length
  }

  useEffect(() => {
    if (timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining(time => time - 1)
      }, 1000)
    }
  }, [timeRemaining])

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
      <button onClick={() => wordCount(text)}>Start!</button>
      <h1>Word Count: { }</h1>

    </div>
  );
}

export default App;


