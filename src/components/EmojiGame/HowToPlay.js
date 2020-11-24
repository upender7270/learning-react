import React from "react";

function HowToPlay(props) {
  return (
    <div
      className={`w-full px-4 ${
        props.theme === "light" ? "bg-white" : "bg-gray-700 text-white"
      }`}
    >
      <h2 className="text-2xl py-1 font-bold">How to play?</h2>
      <p className="pb-8 pl-4 text-xl">
        Get points by clicking on an image but don't click on any image more
        than once!
      </p>
    </div>
  );
}

export default HowToPlay;
