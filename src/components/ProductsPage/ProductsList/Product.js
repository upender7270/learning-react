import React from "react";
import { observer } from "mobx-react";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ToastMessage from "./ToastMessage";

@observer
class Product extends React.Component {
  onAddToCartClick = () => {
    const {
      product: { id },
      onAddToCartClick
    } = this.props;

    toast(<ToastMessage />, {
      position: toast.POSITION.BOTTOM_CENTER,
      className: "m-0 toast-styles"
    });
    onAddToCartClick(id);
  };

  render() {
    const { product } = this.props;

    const decimalPartOfPrice = (product.price - Math.floor(product.price))
      .toFixed(2)
      .split(".");

    const integralPartOfPrice = parseInt(product.price);

    const eachInstallment = (product.price / product.installments).toFixed(2);

    return (
      <div
        className="flex flex-col hover-desktop border border-transparent border-solid md:w-46 lg:w-30 xl:w-23 m-2 items-center p-2 relative"
        id={product.id}
      >
        {product.isFreeShipping ? (
          <p className="absolute top-10 right-0 bg-black p-1 text-xs text-white">
            Free shipping
          </p>
        ) : null}
        <img
          src={product.image}
          alt={product.title}
          className="w-4/5 object-contain mb-2"
        />
        <p className="h-45px text-center">{product.title}</p>
        <div className="w-4 border-t-2 rounded border-yellow-600 mt-2px mb-4"></div>
        <p>
          <span className="text-xs mr-1">{product.currencyFormat}</span>
          <span className="text-xl">{integralPartOfPrice}</span>.
          <span className="text-xs">{decimalPartOfPrice[1]}</span>
        </p>
        <p className="text-sm text-gray-700 mb-4 h-5">
          {product.installments === 0
            ? ""
            : `or ${product.installments} x ${product.currencyFormat}
            ${eachInstallment}`}
        </p>
        <button
          className="w-full py-3 text-white bg-black text-center rounded text-sm focus:outline-none"
          onClick={this.onAddToCartClick}
        >
          Add to cart
        </button>
      </div>
    );
  }
}
export default Product;
