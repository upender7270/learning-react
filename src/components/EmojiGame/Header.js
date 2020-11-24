import React from "react";

function Header(props) {
  const text = props.theme === "light" ? "Dark" : "Light";
  return (
    <header
      className={
        "px-5 py-3 w-full " +
        (props.theme === "dark"
          ? "bg-gray-800 text-white"
          : "bg-white text-black")
      }
    >
      <div className="flex flex-row items-center">
        <h1 className="w-1/2 sm:w-2/5 text-2xl sm:text-3xl">Emoji Game</h1>
        <nav className="w-1/2 sm:w-3/5 flex justify-end items-center">
          <div className="hidden sm:flex items-center">
            <p className="font-bold mx-3">
              Score: <span className="text-xl">{props.currentScore}</span>
            </p>
            <p className="font-bold mx-3">
              Top Score: <span className="text-xl">{props.highScore}</span>
            </p>
          </div>
          <button
            onClick={props.onChangeTheme}
            className={
              "border border-solid p-2 ml-3 focus:outline-none cursor-default " +
              (props.theme === "dark" ? "border-white" : "border-black")
            }
          >
            {text.toUpperCase()} THEME
          </button>
        </nav>
      </div>
      <div className="sm:hidden flex flex-col text-center mt-3">
        <p className="font-bold">
          Score: <span className="text-xl">{props.currentScore}</span>
        </p>
        <p className="font-bold">
          Top Score: <span className="text-xl">{props.highScore}</span>
        </p>
      </div>
    </header>
  );
}

export default Header;
