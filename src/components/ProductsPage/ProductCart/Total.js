import React from "react";
import { observer } from "mobx-react";

@observer
class Total extends React.Component {
  render() {
    const { total } = this.props;
    return (
      <div className="flex justify-between mt-4">
        <h3 className="text-gray-500">SUBTOTAL</h3>
        <p className="text-yellow-600">₹ {total}</p>
      </div>
    );
  }
}

export default Total;
