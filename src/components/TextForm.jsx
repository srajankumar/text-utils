import React, { useState } from "react";

const TextForm = (props) => {
  const [text, setText] = useState("");

  const handleUppercase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowercase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleCopy = () => {
    var text = document.getElementById("textBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    alert("Copied to Clipboard");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const handleClear = () => {
    let newText = "";
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleSpeechToText = () => {
    const recognition = new (window.SpeechRecognition ||
      window.webkitSpeechRecognition ||
      window.mozSpeechRecognition ||
      window.msSpeechRecognition)();

    // Check if SpeechRecognition is supported in the browser
    if (!recognition) {
      alert("Speech recognition is not supported in this browser.");
      return;
    }

    recognition.lang = "en-US"; // Set the language for speech recognition

    recognition.onstart = () => {
      console.log("Speech recognition started.");
      alert("Speak now...");
    };

    recognition.onresult = (event) => {
      const text = event.results[0][0].transcript;
      console.log("Recognized text: ", text);
      const textBox = document.getElementById("textBox");
      textBox.value = text;
      alert("Speech recognized and converted to text.");
    };

    recognition.onend = () => {
      console.log("Speech recognition ended.");
    };

    recognition.onerror = (event) => {
      console.error("Error occurred in speech recognition: ", event.error);
      alert("An error occurred in speech recognition.");
    };

    recognition.start();
  };

  return (
    <div
      className={`text-${props.mode === "white" ? "black" : "white"} bg-${
        props.mode
      } min-h-[89.3vh]`}
    >
      <section className="body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-semibold title-font mb-4">
              {props.heading}
            </h1>
          </div>
          <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
            <textarea
              type="text"
              id="textBox"
              name="full-name"
              value={text}
              onChange={handleOnChange}
              className={`${
                props.mode === "white"
                  ? "bg-black bg-opacity-10 focus:border-indigo-900"
                  : "bg-gray-400 bg-opacity-30 focus:border-indigo-500"
              } w-full border border-transparent rounded text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
            />
          </div>
          <div class="container lg:w-2/3 w-full py-5 px-8 sm:px-0 mx-auto">
            <div class="flex flex-wrap justify-between text-center">
              <div>
                <button
                  onClick={handleUppercase}
                  className="text-white bg-indigo-500 border-0 py-2 px-2 mx-1 w-28 my-2 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                >
                  UPPERCASE
                </button>
              </div>
              <div>
                <button
                  onClick={handleLowercase}
                  className="text-white bg-indigo-500 border-0 py-2 px-2 mx-1 w-28 my-2 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                >
                  lowercase
                </button>
              </div>
              <div>
                <button
                  onClick={handleCopy}
                  className="text-white bg-indigo-500 border-0 py-2 px-2 mx-1 w-28 my-2 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                >
                  Copy
                </button>
              </div>
              <div>
                <button
                  onClick={handleExtraSpaces}
                  className="text-white bg-indigo-500 border-0 py-2 px-2 mx-1 w-28 my-2 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                >
                  space
                </button>
              </div>
              <div>
                <button
                  onClick={handleSpeechToText}
                  className="text-white bg-indigo-500 flex border-0 py-[0.6rem] px-2 w-auto my-2 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12 14q-1.25 0-2.125-.875T9 11V5q0-1.25.875-2.125T12 2q1.25 0 2.125.875T15 5v6q0 1.25-.875 2.125T12 14Zm-1 7v-3.075q-2.6-.35-4.3-2.325T5 11h2q0 2.075 1.463 3.538T12 16q2.075 0 3.538-1.463T17 11h2q0 2.625-1.7 4.6T13 17.925V21h-2Z"
                    />
                  </svg>
                </button>
              </div>
              <div>
                <button
                  onClick={handleClear}
                  className="text-white bg-indigo-500 border-0 py-2 px-2 mx-1 w-28 my-2 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                >
                  Clear
                </button>
              </div>
            </div>
          </div>
          <div className="flex lg:w-2/3 pt-5 w-full flex-col mx-auto px-8 sm:space-y-0 space-y-4 sm:px-0">
            <h1 className="text-2xl font-semibold title-font mb-4">
              Your text summary
            </h1>
            <div className="flex flex-col w-full ">
              <parent className="text-md font-normal title-font">
                Your text contains {text.split(" ").length} words and{" "}
                {text.length} characters
              </parent>{" "}
              <p className="text-md font-normal title-font">
                {0.008 * text.split(" ").length} Minutes read
              </p>
              <h2 className="text-xl py-4 font-bold title-font">Preview</h2>
              <p className="text-md font-medium text-justify title-font">
                {text.length > 0
                  ? text
                  : "Enter something in the textbox to preview it here"}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TextForm;
