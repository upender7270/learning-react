import React from "react";

function Wrapper(props) {
  return <div className="min-h-screen flex flex-col">{props.children}</div>;
}

export default Wrapper;
