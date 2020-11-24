import { observable, action, computed, values, keys } from "mobx";

import { API_INITIAL } from "@ib/api-constants";
import { bindPromiseWithOnSuccess } from "@ib/mobx-promise";

import Product from "../models/Product";
import Cart from "../models/Cart";

class ProductStore {
	productAPIService;
	@observable productsMap;
	@observable getProductListAPIStatus;
	@observable getProductListAPIError;
	@observable sizeFilter;
	@observable sortBy;
	@observable cartProductsMap;

	constructor(productAPIService) {
		this.productAPIService = productAPIService;
		this.init();
	}
	init() {
		this.productsMap = new Map();
		this.getProductListAPIStatus = API_INITIAL;
		this.getProductListAPIError = null;
		this.sizeFilter = [];
		this.sortBy = "";
		this.cartProductsMap = new Map();
	}

	@computed
	get products() {
		return values(this.productsMap).map((product) => product);
	}

	@action.bound
	setGetProductListAPIStatus(status) {
		this.getProductListAPIStatus = status;
	}

	@action.bound
	setGetProductListAPIError(error) {
		this.getProductListAPIError = error;
	}

	@action.bound
	setProductListResponse(response) {
		response.forEach((product) =>
			this.productsMap.set(product.id, new Product(product))
		);
	}

	@action.bound
	getProductList() {
		const getProductsPromise = this.productAPIService.getProducts();
		return bindPromiseWithOnSuccess(getProductsPromise)
			.to(this.setGetProductListAPIStatus, this.setProductListResponse)
			.catch(this.setGetProductListAPIError);
	}

	@action.bound
	onSelectSize(size) {
		if (this.sizeFilter.includes(size)) {
			const indexOfSize = this.sizeFilter.indexOf(size);
			this.sizeFilter.splice(indexOfSize, 1);
		} else {
			this.sizeFilter.push(size);
		}
	}

	@action.bound
	onSelectSortBy(sortBy) {
		this.sortBy = sortBy;
	}

	@computed
	get sortProducts() {
		let sortedProducts;
		if (this.sortBy === "ASCENDING") {
			sortedProducts = this.products.slice().sort(function (a, b) {
				return a.price - b.price;
			});
		} else if (this.sortBy === "DESCENDING") {
			sortedProducts = this.products.slice().sort(function (a, b) {
				return b.price - a.price;
			});
		} else {
			sortedProducts = this.products;
		}
		return sortedProducts;
	}

	checkSize = (product) => {
		for (let i = 0; i < this.sizeFilter.length; i++) {
			if (product.availableSizes.includes(this.sizeFilter[i])) {
				return true;
			}
		}
	};

	filterProductsBySize = (sortedProducts) => {
		if (this.sizeFilter.length === 0) {
			return sortedProducts;
		}
		return sortedProducts.filter(this.checkSize);
	};

	@computed
	get sortedAndFilteredProducts() {
		const sortedProducts = this.sortProducts;
		return this.filterProductsBySize(sortedProducts);
	}

	@computed
	get totalNoOfProductsDisplayed() {
		return this.sortedAndFilteredProducts.length;
	}

	@action.bound
	onAddToCartClick(id) {
		const productId = parseInt(id);
		const cartId = productId + 300;
		if (this.cartProductsMap.has(cartId)) {
			this.cartProductsMap.get(cartId).incrementQuantity();
		} else {
			this.cartProductsMap.set(cartId, new Cart(cartId, productId, 1));
		}
	}

	@action.bound
	onRemoveCartItem(id) {
		this.cartProductsMap.delete(id);
	}

	@computed
	get cartItems() {
		return values(this.cartProductsMap).map((value) => value);
	}

	@computed
	get noOfItemsInCart() {
		let count = 0;
		for (let value of this.cartProductsMap.values()) {
			count += value.quantity;
		}
		return count;
	}

	getProductDetailsById = (id) => {
		return this.productsMap.get(id);
	};

	@computed
	get subTotal() {
		let total = 0;

		for (let value of this.cartProductsMap.values()) {
			const price = this.productsMap.get(value.productId).price;
			total += value.quantity * price;
		}

		return Math.round((total + Number.EPSILON) * 100) / 100;
	}

	@action.bound
	clearCart() {
		this.cartProductsMap.clear();
	}
}

export default ProductStore;
