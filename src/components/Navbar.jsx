import React from "react";

const Navbar = (props) => {
  return (
    <div>
      <header
        className={`text-${props.mode === "white" ? "black" : "white"} bg-${
          props.mode
        } body-font`}
      >
        <div className="container mx-auto flex justify-between flex-wrap p-5 flex-row items-center">
          <a
            href="/"
            className="flex title-font font-medium items-center mb-4 md:mb-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 7V5h13v2m-6-2v14m2 0H8m7-6v-1h6v1m-3-1v7m-1 0h2"
              />
            </svg>
            <span className="ml-3 text-xl">{props.title}</span>
          </a>
          <button
            onClick={props.toggleMode}
            className="inline-flex mb-4 items-center border-0 px-3 focus:outline-none rounded text-base"
          >
            {props.modeText}
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
