import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import "./index.scss";
import Home from "./Containers/Home/Home";
import Signup from "./Containers/Signup/Signup";
import Login from "./Containers/Login/Login";
import Reset from "./Containers/Reset/Reset";
import Profile from "./Containers/Profile/Profile";

import * as serviceWorker from "./serviceWorker";

import store from "./store";

const routing = (
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/reset" component={Reset} />
        <Route exact path="/profile" component={Profile} />
      </div>
    </Router>
  </Provider>
);

ReactDOM.render(routing, document.getElementById("root"));
