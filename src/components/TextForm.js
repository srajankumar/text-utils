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

  const handleClear = () => {
    let newText = "";
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-semibold title-font mb-4 text-gray-900">
              {props.heading}
            </h1>
            {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them man bun deep.
            </p> */}
          </div>
          <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
            <textarea
              type="text"
              id="full-name"
              name="full-name"
              value={text}
              onChange={handleOnChange}
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="container px-5 py-24 mx-auto">
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
            </button>
            <button
              onClick={handleClear}
              className="text-white mr-2 bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Clear
            </button>
          </div>
          <div className="flex lg:w-2/3 pt-5 w-full flex-col mx-auto px-8 sm:space-y-0 space-y-4 sm:px-0">
            <h1 className="text-2xl font-semibold title-font mb-4 text-gray-900">
              Your text summary
            </h1>
            <div className="flex flex-col w-full ">
              <parent className="text-md font-normal title-font text-gray-900">
                Your text contains {text.split(" ").length} words and{" "}
                {text.length} characters
              </parent>{" "}
              <p className="text-md font-normal title-font text-gray-900">
                {0.008 * text.split(" ").length} Minutes read
              </p>
              <h2 className="text-xl py-4 font-bold title-font text-gray-900">
                Preview
              </h2>
              <p className="text-md font-medium text-justify title-font text-gray-900">
                {text}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TextForm;
