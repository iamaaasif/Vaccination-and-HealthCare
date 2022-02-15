import React from "react";
import { Redirect, Route } from "react-router-dom";

function PrivateRoute({ path, component, exact, isAuthenticated }) {
  if (isAuthenticated) {
    return <Route path={path} component={component} exact={exact} />;
  } else {
    return <Redirect to="/login" />;
  }
}

export default PrivateRoute;
