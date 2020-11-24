import React from "react";

import Loader from "../Icons/Loader";

class LoadingView extends React.Component {
  static defaultProps = {
    loaderProps: { fillColor: "#00BFFF" }
  };
  render() {
    const {
      containerStyles,
      loaderProps: { fillColor }
    } = this.props;
    return (
      <div
        className="flex flex-col justify-center items-center h-full bg-gray-200"
        style={containerStyles}
      >
        <Loader fill={fillColor} />
      </div>
    );
  }
}

export default LoadingView;
