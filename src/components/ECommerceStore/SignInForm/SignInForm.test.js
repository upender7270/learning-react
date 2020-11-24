import React from "react";
import { render } from "@testing-library/react";

import SignInForm from ".";

describe("SignInForm", () => {
  it("should render typed username", () => {
    const username = "test-user";
    const { getByPlaceholderText } = render(
      <SignInForm username={username} onChangeUsername={() => {}} />
    );

    const usernameField = getByPlaceholderText("Username");

    expect(usernameField.value).toBe(username);
  });

  it("should render typed password", () => {
    const password = "test-password";
    const { getByPlaceholderText } = render(
      <SignInForm password={password} onChangePassword={() => {}} />
    );

    const passwordField = getByPlaceholderText("Password");

    expect(passwordField.value).toBe(password);
  });

  it("should render given error message", () => {
    const { getByText } = render(
      <SignInForm errorMessage="Invalid username" />
    );

    getByText(/invalid username/i);
  });
});
