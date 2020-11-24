import React from "react";
import { observer } from "mobx-react";

import levels from "../../config/level";

import Cell from "./Cell";
import "./index.css";

let timeOutId;
@observer
class GameField extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { resetGame, level } = this.props;
    timeOutId = setTimeout(() => resetGame(), 3000 * (level + 3));
  }

  componentWillUnmount() {
    clearTimeout(timeOutId);
  }

  render() {
    const { cells, level, theme, onCellClick } = this.props;

    const cellWidthAndHeight = levels[level].fieldSize / (3 + level) - 8;

    const hiddenCellsDisplayTime = 3000 + level * 1000;

    return (
      <div
        className="flex flex-row flex-wrap justify-center grid-field-animation"
        style={{
          width: levels[level].fieldSize
        }}
      >
        {cells.map(eachCell => (
          <Cell
            key={eachCell.id}
            cellData={eachCell}
            onCellClick={onCellClick}
            level={level}
            theme={theme}
            cellWidthAndHeight={cellWidthAndHeight}
            hiddenCellsDisplayTime={hiddenCellsDisplayTime}
          />
        ))}
      </div>
    );
  }
}
export default GameField;
