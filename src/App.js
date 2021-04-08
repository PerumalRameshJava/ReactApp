import React, { Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "../src/Components/Navbar/navbar";
import Routes from "../src/Routes/routes";
import { Provider } from "react-redux";
import store from "./store";

const App = (props) => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <NavBar />
        <main style={{ marginBottom: "100px" }}></main>
        <Switch>
          <Route component={Routes} />
        </Switch>
      </Fragment>
    </Router>
  </Provider>
);

export default App;
