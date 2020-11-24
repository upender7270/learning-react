import React from "react";
import { observer } from "mobx-react";

@observer
class FailureView extends React.Component {
  renderErrorMessage = apiError => {
    if (apiError !== null && apiError !== undefined) {
      return JSON.parse(apiError).originalError.message;
    }
    return "Something went wrong please try again";
  };

  render() {
    const { onRetry, apiError, containerStyles } = this.props;

    return (
      <div
        className="flex flex-col justify-center items-center h-full bg-gray-200"
        style={containerStyles}
      >
        <h2 className="m-6 text-2xl text-center">
          {this.renderErrorMessage(apiError)}
        </h2>
        <button
          onClick={onRetry}
          className="px-8 py-2 bg-blue-500 text-white text-2xl rounded"
        >
          Retry
        </button>
      </div>
    );
  }
}

export default FailureView;
