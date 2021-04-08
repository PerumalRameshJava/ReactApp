import React, { Fragment, useState } from "react";
import Styles from "./navbar.module.css";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Navbartop = ({ isAuthenticated }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar style={{ backgroundColor: "royalblue" }} light expand="md">
        <NavbarBrand className={Styles.navLogo} href="/">
          People Management
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className={Styles.navLinks} navbar>
            {!isAuthenticated && (
              <NavItem>
                <NavLink className={Styles.navItems} href="/">
                  Login
                </NavLink>
              </NavItem>
            )}
            {!isAuthenticated && (
              <NavItem>
                <NavLink className={Styles.navItems} href="/register">
                  Register
                </NavLink>
              </NavItem>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

Navbartop.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.AuthReducer.isAuthenticated,
});

export default connect(mapStateToProps)(Navbartop);
