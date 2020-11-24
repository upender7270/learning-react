import React from "react";
import { observer } from "mobx-react";

import { sizes } from "../../../constants/ProductPageConstants";

import Size from "./Size";

@observer
class SizeFilter extends React.Component {
  render() {
    const { onSelectSize } = this.props;

    return (
      <div className="w-1/4 px-4">
        <p className="my-4 font-bold">Sizes:</p>
        {sizes.map(eachSize => (
          <Size
            key={eachSize.id}
            size={eachSize.size}
            onSelectSize={onSelectSize}
          />
        ))}
      </div>
    );
  }
}

export default SizeFilter;
