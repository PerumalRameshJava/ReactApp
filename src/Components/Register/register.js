import React, { Fragment, useState } from "react";
import Styles from "./register.module.css";
import { Container, Form, FormGroup, Input, Label, Button } from "reactstrap";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { register } from "../../actions/authActions";
import { addAlert } from "../../actions/alertAction";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Register = ({ register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
    revealPassword: false,
  });

  const { name, email, password, passwordConfirm, revealPassword } = {
    ...formData,
  };

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
    register(formData);
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
        <span style={{ fontWeight: "bold" }}>Stay </span>Connected. Register
        now!
      </h2>
      <Form onSubmit={onSubmit}>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            className={Styles.inputBoxStyle}
            bsSize="large"
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            id="name"
            placeholder="Enter Full Name"
          />
        </FormGroup>
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
            autoComplete={"Password"}
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
        <FormGroup>
          <Label for="examplePassword">Confirm Password</Label>
          <Input
            className={Styles.inputBoxStyle}
            type="password"
            name="passwordConfirm"
            value={passwordConfirm}
            id="examplePasswordConfirm"
            autoComplete={"ConfirmPassword"}
            onChange={handleChange}
            placeholder="Enter Password Again"
          />
        </FormGroup>
        <Button className={Styles.button} type="submit">
          Register
        </Button>
      </Form>
    </Fragment>
  );
};

Register.propTypes = {
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.AuthReducer.isAuthenticated,
});

export default connect(mapStateToProps, { register })(Register);
