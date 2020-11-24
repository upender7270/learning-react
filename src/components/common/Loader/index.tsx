import React from "react";
import ReactLoader from "react-loader-spinner";

interface LoaderProps {
  height?: number;
  width?: number;
  type?: string;
  color?: string;

  [x: string]: any;
}

class Loader extends React.Component<LoaderProps> {
  static defaultProps = {
    type: "Oval",
    color: "#2196f3",
    height: 30,
    width: 30
  };

  render() {
    const { height, width, type, color, ...other } = this.props;
    return (
      <ReactLoader
        type={type}
        color={color}
        height={height}
        width={width}
        {...other}
      />
    );
  }
}

export default Loader;
