import React from "react";
import { observer } from "mobx-react";
import { observable, action } from "mobx";

import {
  getCookieConsent,
  setCookieConsent
} from "../../../utils/StorageUtils";

@observer
class CookieConsent extends React.Component {
  static defaultProps = {
    containerClassName: "p-4 bg-black text-white text-xs",
    policyText: "We use cookies to improve your website experience",
    buttonText: "OK",
    renderButton: "button",
    buttonClassName: "px-3 bg-white text-black rounded"
  };

  @observable shouldShowConsent;

  componentDidMount() {
    if (getCookieConsent()) {
      this.shouldShowConsent = false;
    } else {
      this.shouldShowConsent = true;
    }
  }

  @action.bound
  onClickOk() {
    setCookieConsent("22b1bf88-86b2-11ea-b78f-00ad244834bf", 30);
    this.shouldShowConsent = false;
  }

  render() {
    const {
      containerClassName,
      policyText,
      buttonClassName,
      buttonText,
      renderButton: Button
    } = this.props;
    if (this.shouldShowConsent) {
      return (
        <div
          className={`fixed bottom-0 w-full flex flex-col sm:flex-row justify-center items-center ${containerClassName}`}
        >
          <p className="mb-4 sm:mr-4 sm:mb-0">{policyText}</p>
          <Button className={`${buttonClassName}`} onClick={this.onClickOk}>
            {buttonText}
          </Button>
        </div>
      );
    }
    return null;
  }
}

export default CookieConsent;
