import React, { useState } from "react";
import "./styles.css";
var emojiList = ["x", "y", "z"];

var emojiDictionary = {
  "♈": "Aries",
  "♉": "Taurus",
  "♊": "Gemini",
  "♋": "Cancer",
  "♌": "Leo"
  // "♍": "Virgo",
  // "♎": "Libra",
  // "♏": "Scorpio",
  // "♐": "Sagittarius",
  // "♑": "Capricorn",
  // "♒": "Aquarius",
  // "♓": "Pisces",
  // "⛎": "Ophiuchus"
};
var emojiListWeknow = Object.keys(emojiDictionary);

export default function App() {
  const [likeCounter, setLikeCounter] = useState(0);
  // const [userInput, setUserInput] = useState(" ");
  const [meaning, setMeaning] = useState(" ");

  function inputEventHandler(event) {
    // console.log(event.target.value);
    // setUserInput(event.target.value);
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "This is not a zodiac sign.";
    }
    setMeaning(meaning);
  }

  function likeClickHandler() {
    var updatedLikeCounter = likeCounter + 1;
    setLikeCounter(updatedLikeCounter);
  }
  function emojiClickHandler(emoji) {
    // console.log(emoji);
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <input onChange={inputEventHandler}></input>
      <br />
      <div>
        <ul>
          {emojiList.map((item) => {
            console.log("item");
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </div>
      <h3>Emoji's we know</h3>
      {emojiListWeknow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "1.2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}

      <br />
      <div>{meaning}</div>
      <button onClick={likeClickHandler}>Like me</button>
      {likeCounter}
    </div>
  );
}
// VISER = View -> Interact -> State in Event Handler -> Render
