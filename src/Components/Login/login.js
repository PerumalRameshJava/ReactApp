import React, { Fragment, useState } from "react";
import Styles from "./login.module.css";
import { Container, Form, FormGroup, Input, Label, Button } from "reactstrap";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/authActions";
import { addAlert } from "../../actions/alertAction";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    revealPassword: false,
  });

  const { email, password, revealPassword } = { ...formData };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log({ ...formData });
    login(email, password);
  };

  const onTogglePassword = () => {
    setFormData((prevState) => ({
      ...prevState,
      revealPassword: !revealPassword,
    }));
  };

  if (isAuthenticated) {
    return <Redirect to="/home" />;
  }
  return (
    <Fragment>
      <h2 style={{ fontWeight: "lighter" }}>
        <span style={{ fontWeight: "bold" }}>Stay </span>Connected. Login now!
      </h2>
      <Form onSubmit={onSubmit}>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            className={Styles.inputBoxStyle}
            bsSize="large"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            id="exampleEmail"
            placeholder="Enter Email"
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            className={Styles.inputBoxStyle}
            type={revealPassword ? "text" : "password"}
            name="password"
            value={password}
            id="examplePassword"
            onChange={handleChange}
            placeholder="Enter Password"
          />
          <span className={Styles.customPasswordEye} onClick={onTogglePassword}>
            {revealPassword ? (
              <FontAwesomeIcon
                id="ic"
                className={Styles.eyeanime}
                icon={faEye}
              />
            ) : (
              <FontAwesomeIcon
                id="ic"
                className={Styles.eyeanime}
                icon={faEyeSlash}
              />
            )}
          </span>
        </FormGroup>
        <Button className={Styles.button} type="submit">
          Submit
        </Button>
      </Form>
      <Link className={Styles.signUpLink} to="/register">
        Don't have an account? Sign up here
      </Link>
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  addAlert: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStatetoProps = (state) => ({
  isAuthenticated: state.AuthReducer.isAuthenticated,
});
export default connect(mapStatetoProps, { login, addAlert })(Login);
