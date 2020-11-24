import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

class ToastMessage extends React.Component {
  render() {
    return (
      <div className="text-white bg-yellow-600 h-16 flex items-center justify-center p-2">
        <span>
          <IoMdCheckmarkCircleOutline
            fill="green"
            style={{ height: "20px", width: "20px" }}
          />
        </span>
        <p className="text-center pl-2 text-sm">Product added to your cart!</p>
      </div>
    );
  }
}

export default ToastMessage;
