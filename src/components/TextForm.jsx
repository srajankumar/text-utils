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

  return (
    <div
      className={`text-${props.mode == "white" ? "black" : "white"} bg-${
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
                props.mode == "white" ? "bg-black" : "bg-gray-400"
              } w-full bg-gray-100 border border-transparent bg-opacity-10 rounded focus:${
                props.mode == "white"
                  ? "border-indigo-900"
                  : "border-indigo-500"
              } text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
              // className="w-full bg-gray-100 bg-opacity-10 rounded border border-gray-300 focus:border-indigo-300 focus:bg-transparent text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="flex pt-6 lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0">
            <button
              onClick={handleUppercase}
              className="text-white mr-2 bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              UPPERCASE
            </button>
            <button
              onClick={handleLowercase}
              className="text-white mr-2 bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              lowercase
            </button>{" "}
            <button
              onClick={handleCopy}
              className="text-white mr-2 bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Copy
            </button>
            <button
              onClick={handleExtraSpaces}
              className="text-white mr-2 bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              space
            </button>
            <button
              onClick={handleClear}
              className="text-white mr-2 bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Clear
            </button>
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
