import React from "react";
import { Container } from "reactstrap";
import Login from "../Components/Login/login";
import Register from "../Components/Register/register";
import { Switch, Route } from "react-router-dom";
import NotFound from "../Components/notfound";
import Alert from "../Components/Alert/alert";
import Home from "../Components/Home/home";
import EmployeeComp from "../Components/Employee/employee";
import PrivateRoute from "./PrivateRoute";

const routes = (props) => {
  return (
    <Container>
      <Alert />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/employees" component={EmployeeComp} />
        <PrivateRoute exact path="/home" component={Home} />
        {/* <Route exact path="/home" component={Home} /> */}
        <Route exact path="/register" component={Register} />
        <Route component={NotFound} />
      </Switch>
    </Container>
  );
};

export default routes;
