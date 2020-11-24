import React from "react";
import { observer } from "mobx-react";

import Product from "./Product";

@observer
class ProductList extends React.Component {
  render() {
    const { products, onAddToCartClick } = this.props;
    return (
      <div className="flex flex-wrap justify-start">
        {products.map(eachProduct => (
          <Product
            product={eachProduct}
            key={eachProduct.id}
            onAddToCartClick={onAddToCartClick}
          />
        ))}
      </div>
    );
  }
}

export default ProductList;
