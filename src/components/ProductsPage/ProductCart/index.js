import React from "react";
import { observer } from "mobx-react";
import { observable, action } from "mobx";

import Cart from "../../common/Icons/Cart";

import CartList from "./CartList";
import Total from "./Total";
import CheckoutButton from "./CheckoutButton";

@observer
class ProductCart extends React.Component {
  @observable shouldDisplayCart = false;

  @action.bound
  showCartItems() {
    this.shouldDisplayCart = true;
  }

  @action.bound
  hideCartItems() {
    this.shouldDisplayCart = false;
  }

  renderCart = () => {
    const {
      cartItems,
      noOfItemsInCart,
      onRemoveCartItem,
      subTotal,
      getProductDetailsById,
      clearCart
    } = this.props;

    const openCartClassName = this.shouldDisplayCart
      ? "cart-container-open"
      : null;

    return (
      <div className={`flex cart-container relative ${openCartClassName}`}>
        <button
          className="h-10 p-3 text-white bg-gray-800 focus:outline-none active:outline-none leading-none"
          onClick={this.hideCartItems}
        >
          X
        </button>
        <div className="cart-items p-4 bg-gray-800 flex flex-col w-full">
          <div className="flex items-center justify-center">
            <div className="h-10 mr-4">
              <Cart width={40} height={40} />
              <p className="text-center text-sm text-yellow-600 relative cart-position">
                {noOfItemsInCart}
              </p>
            </div>
            <h2 className="text-white font-bold text-xl">Cart</h2>
          </div>
          <CartList
            cartItems={cartItems}
            onRemoveCartItem={onRemoveCartItem}
            getProductDetailsById={getProductDetailsById}
          />
          <div className="absolute bottom-0 right-0 p-4 total-checkout bg-gray-800 shadow-inner">
            <Total total={subTotal} />
            <CheckoutButton total={subTotal} clearCart={clearCart} />
          </div>
        </div>
      </div>
    );
  };

  renderCartBag = () => {
    const { noOfItemsInCart } = this.props;

    const cartBagDisplayClass = this.shouldDisplayCart
      ? "hide-cart-bag"
      : "show-cart-bag";

    return (
      <div
        className={`bg-gray-800 height-cart-icon p-2 cursor-pointer ${cartBagDisplayClass}`}
        onClick={this.showCartItems}
      >
        <Cart width={40} height={40} />
        <p className="text-center text-sm text-yellow-600 relative cart-position">
          {noOfItemsInCart}
        </p>
      </div>
    );
  };

  render() {
    return (
      <div className="fixed top-0 right-0 z-10">
        {this.renderCart()}
        {this.renderCartBag()}
      </div>
    );
  }
}

export default ProductCart;
