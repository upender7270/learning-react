import React from "react";
import { observer } from "mobx-react";

@observer
class CheckoutButton extends React.Component {
  onCheckoutClick = () => {
    const { clearCart } = this.props;

    clearCart();

    return alert(
      "Thank you for shopping with us 😊.\nYour products will be delivered in 3 days to the address mentioned in your profile."
    );
  };
  render() {
    const { total } = this.props;
    const isDisabled = total === 0 ? true : "";
    return (
      <button
        disabled={isDisabled}
        className={`bg-black w-full py-2 text-white my-4 rounded ${
          isDisabled ? "cursor-not-allowed opacity-50" : ""
        } focus:outline-none`}
        onClick={this.onCheckoutClick}
      >
        CHECKOUT
      </button>
    );
  }
}

export default CheckoutButton;
