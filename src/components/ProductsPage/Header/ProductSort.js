import React from "react";
import { observer } from "mobx-react";

import { sortBy } from "../../../constants/ProductPageConstants";

@observer
class ProductSort extends React.Component {
  onSelectSortBy = e => {
    const { onSelectSortBy } = this.props;
    onSelectSortBy(e.target.value);
  };

  render() {
    return (
      <label className="text-center">
        Sort price by:{"  "}
        <select
          onChange={this.onSelectSortBy}
          className="rounded-md bg-white border border-gray-400 hover:border-gray-700 focus:outline-none sort-price-selection-button"
        >
          <option hidden>Select</option>
          {sortBy.map(eachOption => (
            <option
              value={eachOption.value}
              key={eachOption.id}
              className="focus:outline-none"
            >
              {eachOption.label}
            </option>
          ))}
        </select>
      </label>
    );
  }
}
export default ProductSort;
