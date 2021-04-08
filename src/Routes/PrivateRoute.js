import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
const PrivateRoute = ({
  component: Component,
  auth: { isAuthenticated, loading },
  ...rest
}) => {
  let route = <Redirect to="/" />;
  if (isAuthenticated) {
    route = <Route {...rest} render={(props) => <Component {...props} />} />;
  }
  return route;
};

const mapStateToProps = (state) => ({
  auth: state.AuthReducer,
});

export default connect(mapStateToProps)(PrivateRoute);
