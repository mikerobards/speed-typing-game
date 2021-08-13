import React, { useState } from "react"

function App() {
  const [text, setText] = useState("")

  const handleChange = (e) => {
    const { value } = e.target
    setText(value)
  }

  const wordCount = (str) => {
    const wordsArr = str.trim().split(" ")
    return wordsArr.filter(word => word !== "").length
  }
  // console.log(wordCount(text))

  return (
    <div>
      <h1>Test your Typing Speed!</h1>
      <textarea
        name="textarea"
        value={text}
        onChange={handleChange}
        placeholder="start typing here!"
      />
      <h4>Time Remaining: </h4>
      <button onClick={() => wordCount(text)}>Start!</button>
      <h1>Word Count: { }</h1>

    </div>
  );
}

export default App;


