import React from "react";

const Navbar = (props) => {
  return (
    <div>
      <header
        className={`text-${props.mode == "white" ? "black" : "white"} bg-${
          props.mode
        } body-font`}
      >
        <div className="container mx-auto flex flex-wrap p-5 flex-row items-center">
          <a className="flex title-font font-medium items-center mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">{props.title}</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5">Home</a>
            <a className="mr-5">About</a>
          </nav>
          <button
            onClick={props.toggleMode}
            className="inline-flex items-center border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0"
          >
            {props.modeText}
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
