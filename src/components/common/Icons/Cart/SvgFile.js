/**
 * @flow
 */

import React, { Component } from "react";

class Cart extends Component {
  static defaultProps = {
    width: 24,
    height: 24,
    fill: "none"
  };

  render() {
    const { width, height, fill } = this.props;
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill={fill}
        stroke="white"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-shopping-cart"
      >
        <circle cx={9} cy={21} r={1} />
        <circle cx={20} cy={21} r={1} />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg>
    );
  }
}

export default Cart;
