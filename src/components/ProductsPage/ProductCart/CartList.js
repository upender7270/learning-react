import React from "react";
import { observer } from "mobx-react";

import CartItem from "./CartItem";

@observer
class CartList extends React.Component {
  render() {
    const { cartItems, onRemoveCartItem, getProductDetailsById } = this.props;
    return (
      <div className="mt-8 overflow-y-auto flex-1">
        {cartItems.length === 0 ? (
          <p className="text-white text-sm my-auto h-3/4 flex items-center justify-center">
            Add some products in the cart
          </p>
        ) : (
          cartItems.map(eachItem => (
            <CartItem
              cartItem={eachItem}
              key={eachItem.id}
              onRemoveCartItem={onRemoveCartItem}
              getProductDetailsById={getProductDetailsById}
            />
          ))
        )}
      </div>
    );
  }
}

export default CartList;
