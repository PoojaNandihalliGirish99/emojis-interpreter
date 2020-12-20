import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "♈": "Aries",
  "♉": "Taurus",
  "♊": "Gemini",
  "♋": "Cancer",
  "♌": "Leo",
  "♍": "Virgo",
  "♎": "Libra",
  "♏": "Scorpio",
  "♐": "Sagittarius",
  "♑": "Capricorn",
  "♒": "Aquarius",
  "♓": "Pisces",
  "⛎": "Ophiuchus"
};
var emojiListWeknow = Object.keys(emojiDictionary);

export default function App() {
  // const [likeCounter, setLikeCounter] = useState(0);

  const [meaning, setMeaning] = useState(" ");
  var label = "Type the zodiac emoji.";
  function inputEventHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "This is not a zodiac sign.";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Welcome</h1>
      <h4>Know the differnt zodiac signs and their name.</h4>
      <input
        onChange={inputEventHandler}
        placeholder={label}
        style={{
          padding: "0.5rem",
          margin: "0.5rem",
          width: "40%",
          backgroundColor: "blanchedalmond"
        }}
      ></input>
      <br />
      <h4>Tap on the emoji below.</h4>
      {emojiListWeknow.map(function (emoji) {
        return (
          <button
            onClick={() => emojiClickHandler(emoji)}
            style={{
              fontSize: "1.2rem",
              margin: "0.5rem 0.5rem",
              cursor: "pointer",
              listStyle: "none",
              borderRadius: "0rem",
              padding: "auto",
              backgroundColor: "darkkhaki"
            }}
            key={emoji}
          >
            {emoji}
          </button>
        );
      })}

      <br />
      <div
        style={{
          width: "50%",
          margin: "auto"
        }}
      >
        <h4 key={meaning}>The Zodiac name is - {meaning}</h4>
      </div>
    </div>
  );
}
// VISER = View -> Interact -> State in Event Handler -> Render
