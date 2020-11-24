import React from "react";
import { observer } from "mobx-react";

import { API_FETCHING, API_SUCCESS, API_FAILED } from "@ib/api-constants";

import LoadingView from "./LoadingView";
import FailureView from "./FailureView";

@observer
class LoadingWrapperWithFailure extends React.Component {
  render() {
    const {
      apiStatus,
      renderSuccessUI: RenderSuccessUI,
      onRetry,
      apiError,
      containerStyles,
      loaderProps
    } = this.props;

    switch (apiStatus) {
      case API_FETCHING:
        return (
          <LoadingView
            containerStyles={containerStyles}
            loaderProps={loaderProps}
          />
        );
      case API_SUCCESS:
        return <RenderSuccessUI />;
      case API_FAILED:
        return (
          <FailureView
            onRetry={onRetry}
            apiError={apiError}
            containerStyles={containerStyles}
          />
        );
      default:
        return null;
    }
  }
}

export default LoadingWrapperWithFailure;
