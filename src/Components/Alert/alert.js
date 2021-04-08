import React from "react";
import { Fragment } from "react";
import { Alert } from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const alert = ({ alerts }) => {
  console.log("dfdf", alerts);
  return alerts.map((alert) => (
    <Alert key={alert.id} color="danger">
      {alert.msg}
    </Alert>
  ));
};

alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.AlertReducer,
});

export default connect(mapStateToProps)(alert);
