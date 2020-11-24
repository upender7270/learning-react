import React from "react";
import { observer } from "mobx-react";
import { observable } from "mobx";

import "./index.css";

@observer
class Cell extends React.Component {
  constructor(props) {
    super(props);
  }

  @observable shouldShowHiddenCells = true;
  @observable isClickedOnCell = false;

  componentDidMount() {
    const { hiddenCellsDisplayTime } = this.props;
    setTimeout(
      () => (this.shouldShowHiddenCells = false),
      hiddenCellsDisplayTime
    );
  }

  onCellClick = e => {
    const { cellData, onCellClick } = this.props;
    this.isClickedOnCell = true;

    if (cellData.isHidden) {
      onCellClick(false);
    } else {
      onCellClick(true);
    }
  };

  render() {
    const { cellData, theme, cellWidthAndHeight } = this.props;
    const { shouldShowHiddenCells, isClickedOnCell } = this;

    const isActive =
      cellData.isHidden && (shouldShowHiddenCells || isClickedOnCell);

    const isFailed = cellData.isHidden === false && isClickedOnCell === true;

    const isPointerEventsDisabled =
      shouldShowHiddenCells || isClickedOnCell
        ? "pointer-events-none"
        : "pointer-events-auto";

    return (
      <div
        className={`m-1 flex justify-center items-center ${
          theme === "light" ? "bg-gray-700" : "bg-blue-900"
        } ${isPointerEventsDisabled}`}
        style={{
          width: cellWidthAndHeight,
          height: cellWidthAndHeight
        }}
        onClick={this.onCellClick}
        id={cellData.id}
      >
        <div
          className={`animations-active ${
            theme === "light" ? "bg-green-600" : "bg-teal-400"
          } ${isActive ? "w-full h-full" : "w-0 h-0 "}`}
        ></div>
        <div
          className={`animations-failed bg-red-600 ${
            isFailed ? "w-full h-full" : "w-0 h-0 "
          }`}
        ></div>
      </div>
    );
  }
}
export default Cell;
