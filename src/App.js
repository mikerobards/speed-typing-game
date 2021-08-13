import React, { useState, useEffect, useRef } from "react"

function App() {
  const STARTING_TIME = 5
  const [text, setText] = useState("")
  const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME)
  const [isRunning, setIsRunning] = useState(false)
  const [wordCount, setWordCount] = useState(0)
  const textboxRef = useRef(null)

  const handleChange = (e) => {
    const { value } = e.target
    setText(value)
  }

  const startGame = () => {
    setIsRunning(true)
    setTimeRemaining(STARTING_TIME)
    setText("")
    setWordCount(0)
    textboxRef.current.disabled = false
    textboxRef.current.focus()
  }

  const endGame = () => {
    setIsRunning(false)
    setWordCount(wordCounter(text))
  }

  const wordCounter = (str) => {
    const wordsArr = str.trim().split(" ")
    return wordsArr.filter(word => word !== "").length
  }

  useEffect(() => {
    if (timeRemaining > 0 && isRunning) {
      setTimeout(() => {
        setTimeRemaining(time => time - 1)
      }, 1000)
    } else if (timeRemaining === 0) {
      endGame()
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
        disabled={!isRunning}
        ref={textboxRef}
      />
      <h4>Time Remaining: {timeRemaining}</h4>
      <button onClick={startGame} disabled={isRunning}>Start!</button>
      <h1>Word Count: {wordCount}</h1>
    </div>
  );
}

export default App;


