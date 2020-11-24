import React from "react";
import { observer } from "mobx-react";

@observer
class GameResult extends React.Component {
  render() {
    const { selectedTheme, level, playAgain } = this.props;
    return (
      <div className="w-full py-16 text-white text-center text-2xl flex justify-center items-center flex-col">
        <p
          className={`text-4xl font-bold ${
            selectedTheme === "light" ? "text-blue-900" : "text-white"
          }`}
        >
          {level}
        </p>
        <p className="font-bold py-3 text-3xl text-green-500">
          Congratulations! You completed all the levels.
        </p>
        <button
          className="bg-indigo-500 hover:bg-indigo-700 text-white py-2 px-4 rounded"
          onClick={playAgain}
        >
          Play Again
        </button>
      </div>
    );
  }
}
export default GameResult;
