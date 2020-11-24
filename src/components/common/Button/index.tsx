import React from "react";
import { APIStatus, API_INITIAL, API_FETCHING } from "@ib/api-constants";

import Loader from "../Loader";

interface ButtonProps {
  text: string;
  onClick: () => void;
  onKeyPress: () => void;
  apiStatus: APIStatus;
  className: string;
  textTypo: React.ElementType;
  textClassName?: string;
  disabled: boolean;
  renderLoader: Function;
  id?: string;
}

class Button extends React.Component<ButtonProps> {
  static defaultProps = {
    apiStatus: API_INITIAL,
    disabled: false,
    renderLoader: () => (
      <Loader color="white" height={20} width={20} className="m-auto" />
    ),
    textTypo: "span",
    textClassName: "",
    className: ""
  };

  isFetching = () => {
    const { apiStatus } = this.props;
    return apiStatus === API_FETCHING;
  };

  renderContentBasedOnStatus = () => {
    const {
      text,
      textTypo: ButtonText,
      textClassName,
      renderLoader
    } = this.props;

    if (this.isFetching()) {
      return renderLoader();
    }
    return <ButtonText className={textClassName}>{text}</ButtonText>;
  };

  render() {
    const { onClick, disabled, className, id, onKeyPress } = this.props;
    return (
      <button
        onClick={onClick}
        disabled={disabled || this.isFetching()}
        className={`${className} text-white focus:outline-none ${
          this.isFetching() ? "cursor-wait opacity-50" : "cursor-pointer"
        }`}
        id={id}
        type="button"
        onKeyPress={onKeyPress}
      >
        {this.renderContentBasedOnStatus()}
      </button>
    );
  }
}

export default Button;
