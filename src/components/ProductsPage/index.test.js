import React from "react";
import {
	render,
	fireEvent,
	waitFor,
	screen,
	waitForElementToBeRemoved,
} from "@testing-library/react";
import { Router, Route, withRouter } from "react-router-dom";
import { Provider } from "mobx-react";
import { createMemoryHistory } from "history";

import {
	E_COMMERCE_SIGN_IN_PATH,
	E_COMMERCE_PRODUCTS_PATH,
} from "../../constants/RouteConstants";
import ProductAPI from "../../services/ProductService/index";
import AuthAPI from "../../services/AuthService/index.api.js";
import ProductStore from "../../stores/ProductStore";
import AuthStore from "../../stores/AuthStore";
import getProducts from "../../fixtures/getProducts.json";

import ProductsRoute from "./index";

describe("ProductsRoute Tests", () => {
	let productAPI;
	let productStore;
	let fixtureResponse = getProducts.products;
	let authAPI;
	let authStore;

	beforeEach(() => {
		productAPI = new ProductAPI();
		productStore = new ProductStore(productAPI);
		authAPI = new AuthAPI();
		authStore = new AuthStore(authAPI);
	});

	afterEach(() => {
		jest.resetAllMocks();
	});

	it("should render products list in success state", async () => {
		const mockSuccessPromise = new Promise(function (resolve, reject) {
			resolve(getProducts.products);
		});
		const mockAPI = jest.fn();
		mockAPI.mockReturnValue(mockSuccessPromise);
		productAPI.getProducts = mockAPI;

		const { findAllByText } = render(
			<Provider productStore={productStore} authStore={authStore}>
				<Router history={createMemoryHistory()}>
					<ProductsRoute />
				</Router>
			</Provider>
		);

		expect(mockAPI).toBeCalledTimes(1);

		// using findAllByText

		expect(await findAllByText("16 Product(s) found.")).toHaveLength(1);

		for (const product of fixtureResponse) {
			expect(await findAllByText(product.title)).toHaveLength(1);
		}
	});
});

// Way 2: using testId

// expect(await getByTestId("products")).toHaveTextContent(
// 	"16 Product(s) found."
// );

// await waitFor(() => {
// 	expect(getByTestId("products")).toHaveTextContent(
// 		"16 Product(s) found."
// 	);
// });

// await expect(findAllByText("16 Product(s) found.")).resolves.toHaveLength(
// 	1
// );
