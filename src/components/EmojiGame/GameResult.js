import React from "react";

function GameResult(props) {
  return (
    <div
      className={`w-full py-2 text-white text-center text-2xl flex-1 flex justify-center items-center flex-col ${
        props.theme === "light" ? "bg-indigo-100" : "bg-gray-900"
      }`}
    >
      <p
        className={`text-4xl font-bold ${
          props.theme === "light" ? "text-blue-900" : "text-white"
        }`}
      >
        {props.score}
      </p>
      <p
        className={
          "font-bold py-3 text-3xl " +
          (props.isWon ? "text-green-500" : "text-red-500")
        }
      >
        {props.text}
      </p>
      <button
        className="bg-indigo-500 hover:bg-indigo-700 text-white py-2 px-4 rounded"
        onClick={props.playAgain}
      >
        Play Again
      </button>
    </div>
  );
}

export default GameResult;
