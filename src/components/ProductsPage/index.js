import React from "react";
import { observer, inject } from "mobx-react";
import { withRouter } from "react-router-dom";

import { E_COMMERCE_SIGN_IN_PATH } from "../../constants/RouteConstants";

import LoadingWrapperWithFailure from "../common/LoadingWrapperWithFailure";
import NoDataView from "../common/NoDataView";
import CookieConsent from "../common/CookieConsent";

import SizeFilter from "./SizeFilter";
import ProductList from "./ProductsList";
import Header from "./Header";
import ProductCart from "./ProductCart";
import "./index.css";

@inject("productStore", "authStore")
@observer
class ProductsPage extends React.Component {
	componentDidMount() {
		const { getProductList } = this.props.productStore;
		getProductList();
	}

	renderProductList = observer(() => {
		const {
			sortedAndFilteredProducts,
			onAddToCartClick,
		} = this.props.productStore;
		if (sortedAndFilteredProducts.length === 0) {
			return <NoDataView />;
		}
		return (
			<ProductList
				products={sortedAndFilteredProducts}
				onAddToCartClick={onAddToCartClick}
			/>
		);
	});

	onSignOutClick = () => {
		const { history } = this.props;
		const { userSignOut } = this.props.authStore;
		history.push(E_COMMERCE_SIGN_IN_PATH);
		userSignOut();
	};

	render() {
		const {
			getProductListAPIError,
			getProductListAPIStatus,
			getProductList,
			onSelectSize,
			totalNoOfProductsDisplayed,
			onSelectSortBy,
			noOfItemsInCart,
			cartItems,
			onRemoveCartItem,
			subTotal,
			getProductDetailsById,
			clearCart,
			sortedAndFilteredProducts,
		} = this.props.productStore;

		return (
			<>
				<div className='m-6 relative responsive-container'>
					<button
						className='border border-gray-800 p-1 rounded text-xs'
						onClick={this.onSignOutClick}
					>
						Sign Out
					</button>
					<ProductCart
						noOfItemsInCart={noOfItemsInCart}
						cartItems={cartItems}
						onRemoveCartItem={onRemoveCartItem}
						subTotal={subTotal}
						getProductDetailsById={getProductDetailsById}
						clearCart={clearCart}
					/>
					<div className='flex'>
						<SizeFilter onSelectSize={onSelectSize} />
						<div className='flex flex-col flex-1'>
							<Header
								productCount={totalNoOfProductsDisplayed}
								onSelectSortBy={onSelectSortBy}
							/>
							<LoadingWrapperWithFailure
								apiStatus={getProductListAPIStatus}
								apiError={getProductListAPIError}
								onRetry={getProductList}
								renderSuccessUI={this.renderProductList}
								containerStyles={{
									backgroundColor: "white",
									height: "80vh",
								}}
								loaderProps={{
									fillColor: "black",
								}}
							/>
						</div>
					</div>
				</div>
				<CookieConsent />
			</>
		);
	}
}

export default withRouter(ProductsPage);
