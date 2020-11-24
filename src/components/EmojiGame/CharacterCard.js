import React from "react";

function CharacterCard(props) {
  return (
    <div
      className={
        "rounded-sm my-10 mx-5 w-64 h-64 shadow-custom " +
        (props.theme === "light" ? "bg-white" : "bg-blue-700 text-white")
      }
      onClick={() => props.handleClick(props.id)}
    >
      <div className="h-48 m-auto w-4/5">
        <img alt={props.name} src={props.image} />
      </div>

      <p className="text-center">{props.name}</p>
    </div>
  );
}

export default CharacterCard;
