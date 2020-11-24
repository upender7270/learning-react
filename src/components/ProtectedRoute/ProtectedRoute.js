import React from "react";
import { Route, Redirect } from "react-router-dom";

import { E_COMMERCE_SIGN_IN_PATH } from "../../constants/RouteConstants";
import { isLoggedIn } from "../../utils/AuthUtils";

export const ProtectedRoute = ({ component: Component, ...otherProps }) => {
  if (isLoggedIn()) {
    return <Route render={props => <Component {...otherProps} />} />;
  }
  return <Redirect to={E_COMMERCE_SIGN_IN_PATH} />;
};
