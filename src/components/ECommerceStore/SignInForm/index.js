import React from "react";
import { observer } from "mobx-react";

import Button from "../../common/Button";

@observer
class SignInForm extends React.Component {
  render() {
    const {
      apiStatus,
      username,
      onChangeUsername,
      password,
      onChangePassword,
      onEnterKeyPress,
      onSubmitForm,
      errorMessage
    } = this.props;
    return (
      <div className="flex justify-center items-center h-screen bg-gray-200">
        <form className="flex flex-col p-10 bg-white">
          <h2 className="font-bold mb-4">Sign in</h2>
          <input
            type="text"
            value={username}
            onChange={onChangeUsername}
            className="border border-gray-400 mb-3 w-48 h-10 pl-2 focus:outline-none rounded"
            placeholder="Username"
          />
          <input
            type="password"
            value={password}
            onChange={onChangePassword}
            className="border border-gray-400 mb-3 w-48 h-10 pl-2 focus:outline-none rounded"
            placeholder="Password"
            onKeyPress={onEnterKeyPress}
          />
          <Button
            text="Sign in"
            onClick={onSubmitForm}
            className="flex justify-center w-48 h-10 rounded bg-gray-900"
            apiStatus={apiStatus}
            onKeyPress={onEnterKeyPress}
          />
          {errorMessage !== "" && errorMessage !== undefined ? (
            <span className="text-red-700 mt-2 w-48 text-sm">
              {errorMessage}
            </span>
          ) : null}
        </form>
      </div>
    );
  }
}

export default SignInForm;
