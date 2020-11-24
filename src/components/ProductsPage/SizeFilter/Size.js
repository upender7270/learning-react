import React from "react";
import { observer } from "mobx-react";
import { observable } from "mobx";

@observer
class Size extends React.Component {
  @observable
  isSelected = false;

  onSelectSize = () => {
    const { size, onSelectSize } = this.props;
    this.isSelected = !this.isSelected;
    onSelectSize(size);
  };

  render() {
    const { size } = this.props;
    return (
      <button
        className={`rounded-full h-10 w-10 m-1 focus:outline-none hover-desktop ${
          this.isSelected ? "bg-black text-white" : "bg-gray-200 text-black"
        }`}
        onClick={this.onSelectSize}
      >
        {size}
      </button>
    );
  }
}

export default Size;
