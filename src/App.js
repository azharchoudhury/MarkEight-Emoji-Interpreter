import "./styles.css";
import React, { useState } from "react";

export default function App() {
  var headingText = "Emoji Interpreter";
  var bgColor = "green";
  var userName = "neogrammer";

  const emojiDictionary = {
    "😀": "Grinning Face",
    "😃": "Grinning Face with Big Eyes",
    "😄": "Grinning Face with Smiling Eyes",
    "😁": "Beaming Face with Smiling Eyes",
    "😆": "Grinning Squinting Face",
    "😅": "Grinning Face with Sweat",
    "🤣": "Rolling on the Floor Laughing",
    "😂": "Face with Tears of Joy",
    "🙂": "Slightly Smiling Face",
    "🙃": "Upside-Down Face",
    "😉": "Winking Face",
    "😊": "Smiling Face with Smiling Eyes",
    "😇": "Smiling Face with Halo",
    "🥰": "Smiling Face with Hearts",
    "😍": "Smiling Face with Heart-Eyes",
    "🤩": "Star-Struck",
    "😘": "Face Blowing a Kiss",
    "😗": "Kissing Face",
    "🙈": "See-No-Evil Monkey",
    "🙉": "Hear-No-Evil Monkey",
    "🙊": "Speak-No-Evil Monkey",
    "💥": "Collision",
    "💫": "Dizzy",
    "💦": "Sweat Droplets",
    "💑": "Couple with Heart",
    "🤟": "Love-You Gesture",
    "🤘": "Sign of the Horns",
    "🤙": "Call Me Hand",
    "👈": "Backhand Index Pointing Left",
    "👉": "Backhand Index Pointing Right",
    "👆": "Backhand Index Pointing Up",
    "🖕": "Middle Finger",
    "👇": "Backhand Index Pointing Down"
  };

  var emojisWeHave = Object.keys(emojiDictionary);

  var [meaning, setMeaning] = useState("");

  /*
  function inputChangeHandler(event) {
    // userInput = event.target.value;
    // setUserInput(userInput);
    setUserInput(event.target.value);
  }
  */

  function inputChangeHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    setMeaning(meaning);
  }

  if (meaning === undefined) {
    meaning = "Sorry! We don't have it in out database";
  }

  function emojiClickHandler(emoticon) {
    var meaning = emojiDictionary[emoticon];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1
        style={{
          backgroundColor: bgColor,
          color: "white",
          padding: "2rem",
          marginBottom: "1rem"
        }}
      >
        {headingText}
      </h1>
      <h1>
        Welcome <span style={{ color: "blue" }}>{userName}</span>
      </h1>

      <input
        placeholder="Enter an emoji to see what it means"
        onChange={inputChangeHandler}
        style={{
          padding: "0.5rem",
          width: "350px",
          maxWidth: "400px",
          textAlign: "center",
          fontSize: "1.25rem",
          margin: "1.5rem"
        }}
      ></input>

      <div>
        <h2 style={{ color: "green", margin: "1rem" }}>Meaning:</h2>
        <div
          style={{
            color: "navy",
            fontWeight: "bold",
            outline: "2px solid black",
            padding: "1rem",
            width: "350px",
            maxWidth: "400px",
            margin: "auto"
          }}
        >
          {meaning}
        </div>

        <h3 style={{ margin: "2rem" }}>
          Click on an emoji to know what it expresses
        </h3>

        <div style={{ margin: "auto", maxWidth: "600px", display: "block" }}>
          {emojisWeHave.map(function (emoji) {
            return (
              <span
                key={emoji}
                onClick={() => emojiClickHandler(emoji)}
                style={{
                  fontSize: "2rem",
                  padding: "1rem",
                  margin: "2rem",
                  cursor: "pointer"
                }}
              >
                {emoji}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
