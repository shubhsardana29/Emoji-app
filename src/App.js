import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "ð": "Smiling",
  "ðģ": "disbelief",
  "ð": "sad",
  "âĪïļ": "love",
  "ð": "annoyance",
  "ð­": "crying",
  "ð": "tears of joy",
  "ðĄ": "angry",
  "ðī": "sleeping",
  "ðĪ": "fever",
  "ðĨģ": "party",
  "ð": "smirking",
  "ðĪ": "money-mouth",
  "ðĪŠ": "zany",
  "ðĨķ": "freezing"
};
var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function emojiInputChangeHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we don't have this in our Database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <input onChange={emojiInputChangeHandler}></input>
      <h2> {meaning} </h2>
      <h3>Emojis we know</h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
