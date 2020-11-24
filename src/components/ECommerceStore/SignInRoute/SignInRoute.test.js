import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { Router, Route, withRouter } from "react-router-dom";
import { Provider } from "mobx-react";
import { createMemoryHistory } from "history";

import {
	E_COMMERCE_SIGN_IN_PATH,
	E_COMMERCE_PRODUCTS_PATH,
} from "../../../constants/RouteConstants";
import AuthAPI from "../../../services/AuthService/index.api";
import AuthStore from "../../../stores/AuthStore";
import getUserSignInResponse from "../../../fixtures/getUserSignInResponse.json";

import SignInRoute from ".";

const LocationDisplay = withRouter(({ location }) => (
	<div data-testid='location-display'>{location.pathname}</div>
));

describe("SignInRoute Tests", () => {
	let authAPI;
	let authStore;

	beforeEach(() => {
		authAPI = new AuthAPI();
		authStore = new AuthStore(authAPI);
	});

	afterEach(() => {
		jest.resetAllMocks();
	});

	it("should render username empty error message", () => {
		const { getByText, getByRole } = render(
			<Router history={createMemoryHistory()}>
				<SignInRoute authStore={authStore} />
			</Router>
		);
		const signInButton = getByRole("button", { name: "Sign in" });

		fireEvent.click(signInButton);

		getByText(/Please enter username/i);
	});

	it("should render password empty error message", () => {
		const { getByText, getByPlaceholderText, getByRole } = render(
			<Router history={createMemoryHistory()}>
				<SignInRoute authStore={authStore} />
			</Router>
		);
		const username = "test-user";
		const usernameField = getByPlaceholderText("Username");
		const signInButton = getByRole("button", { name: "Sign in" });

		fireEvent.change(usernameField, { target: { value: username } });
		fireEvent.click(signInButton);

		getByText(/Please enter password/i);
	});

	it("should submit sign-in on press enter", () => {
		const { getByLabelText, getByPlaceholderText, getByRole } = render(
			<Router history={createMemoryHistory()}>
				<SignInRoute authStore={authStore} />
			</Router>
		);
		const username = "test-user";
		const password = "test-password";

		const usernameField = getByPlaceholderText("Username");
		const passwordField = getByPlaceholderText("Password");
		const signInButton = getByRole("button", { name: "Sign in" });

		fireEvent.change(usernameField, { target: { value: username } });
		fireEvent.change(passwordField, { target: { value: password } });
		fireEvent.keyPress(signInButton, { key: "Enter", code: "Enter" });

		waitFor(() => getByLabelText("audio-loading"));
	});

	it("should render signInRoute loading state", async () => {
		const { getByLabelText, getByPlaceholderText, getByRole } = render(
			<Router history={createMemoryHistory()}>
				<SignInRoute authStore={authStore} />
			</Router>
		);
		const username = "test-user";
		const password = "test-password";

		const usernameField = getByPlaceholderText("Username");
		const passwordField = getByPlaceholderText("Password");
		const signInButton = getByRole("button", { name: "Sign in" });

		const mockLoadingPromise = new Promise(function (resolve, reject) {});
		const mockSignInAPI = jest.fn();
		mockSignInAPI.mockReturnValue(mockLoadingPromise);
		authAPI.signInAPI = mockSignInAPI;

		fireEvent.change(usernameField, { target: { value: username } });
		fireEvent.change(passwordField, { target: { value: password } });
		fireEvent.click(signInButton);

		getByLabelText("audio-loading");
		getByRole("button", { disabled: true });
	});

	it("should render signInRoute success state", async () => {
		const history = createMemoryHistory();
		const route = E_COMMERCE_SIGN_IN_PATH;
		history.push(route);

		const {
			getByPlaceholderText,
			getByRole,
			queryByRole,
			queryByLabelText,
			getByTestId,
		} = render(
			<Provider authStore={authStore}>
				<Router history={history}>
					<Route path={E_COMMERCE_SIGN_IN_PATH}>
						<SignInRoute />
					</Route>
					<Route path={E_COMMERCE_PRODUCTS_PATH}>
						<LocationDisplay />
					</Route>
				</Router>
			</Provider>
		);

		const username = "test-user";
		const password = "test-password";

		const usernameField = getByPlaceholderText("Username");
		const passwordField = getByPlaceholderText("Password");
		const signInButton = getByRole("button", { name: "Sign in" });

		const mockSuccessPromise = new Promise(function (resolve, reject) {
			resolve(getUserSignInResponse);
		});
		const mockSignInAPI = jest.fn();
		mockSignInAPI.mockReturnValue(mockSuccessPromise);
		authAPI.signInAPI = mockSignInAPI;

		fireEvent.change(usernameField, { target: { value: username } });
		fireEvent.change(passwordField, { target: { value: password } });
		fireEvent.click(signInButton);

		await waitFor(() => {
			expect(
				queryByRole("button", { name: "Sign in" })
			).not.toBeInTheDocument();
			expect(getByTestId("location-display")).toHaveTextContent(
				E_COMMERCE_PRODUCTS_PATH
			);
		});
	});

	it("should render signInRoute failure state", async () => {
		const { getByText, getByPlaceholderText, getByRole, debug } = render(
			<Router history={createMemoryHistory()}>
				<SignInRoute authStore={authStore} />
			</Router>
		);

		const username = "test-user";
		const password = "test-password";

		const usernameField = getByPlaceholderText("Username");
		const passwordField = getByPlaceholderText("Password");
		const signInButton = getByRole("button", { name: "Sign in" });

		const mockFailurePromise = new Promise(function (resolve, reject) {
			reject(new Error("server-error"));
		});

		const mockSignInAPI = jest.fn();
		mockSignInAPI.mockReturnValue(mockFailurePromise);
		authAPI.signInAPI = mockSignInAPI;

		fireEvent.change(usernameField, { target: { value: username } });
		fireEvent.change(passwordField, { target: { value: password } });
		fireEvent.click(signInButton);

		await waitFor(() => {
			getByText(/server-error/i);
		});
	});
});
