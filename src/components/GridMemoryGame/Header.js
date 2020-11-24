import React from "react";
import { observer } from "mobx-react";

import levels from "../../config/level";

@observer
class Header extends React.Component {
  render() {
    const {
      selectedTheme,
      level,
      topLevel,
      onChangeSelectedTheme
    } = this.props;
    return (
      <div className="flex flex-col items-center justify-left">
        <p
          className={`text-xl mb-12 ${
            selectedTheme === "light" ? "text-black" : "text-white"
          }`}
        >
          Top Level: <span>{topLevel}</span>
        </p>
        <div
          className="flex items-center justify-between mb-4 px-1"
          style={{
            width: levels.length === level ? "300" : levels[level].fieldSize
          }}
        >
          <p
            className={`text-xl ${
              selectedTheme === "light" ? "text-black" : "text-white"
            }`}
          >
            Level: <span>{level}</span>
          </p>
          <p
            className={`text-xl border px-2 py-1 ${
              selectedTheme === "light"
                ? "text-black border-black"
                : "text-white border-white"
            }`}
            onClick={onChangeSelectedTheme}
          >
            Mode: {selectedTheme === "light" ? "Light" : "Dark"}
          </p>
        </div>
      </div>
    );
  }
}
export default Header;
