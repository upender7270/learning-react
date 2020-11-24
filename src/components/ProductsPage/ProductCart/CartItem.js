import React from "react";
import { observer } from "mobx-react";

@observer
class CartItem extends React.Component {
  onRemoveCartItem = () => {
    const {
      onRemoveCartItem,
      cartItem: { id }
    } = this.props;

    onRemoveCartItem(id);
  };

  render() {
    const { productId, quantity } = this.props.cartItem;
    const {
      title,
      price,
      currencyFormat,
      style,
      image
    } = this.props.getProductDetailsById(productId);

    return (
      <>
        <hr />
        <div className="flex text-sm my-2 items-center relative">
          <button
            className="font-bold absolute top-0 right-0"
            onClick={this.onRemoveCartItem}
          >
            x
          </button>
          <img src={image} alt={title} className="w-12 object-contain" />
          <div className="ml-2 flex-1">
            <h3 className="text-white">{title}</h3>
            <p className="text-gray-500 text-xs">{style}</p>
            <p className="text-gray-500 text-xs">Quantity: {quantity}</p>
          </div>
          <p className="text-yellow-600 ml-auto">
            {currencyFormat} {price}
          </p>
        </div>
      </>
    );
  }
}

export default CartItem;
