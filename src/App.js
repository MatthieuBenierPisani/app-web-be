import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/BeforeLogin/LoginComponent";
import SignUp from "./components/BeforeLogin/SignUpComponent";
import ForgottenPassword from "./components/BeforeLogin/ForgottenPassword";

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (<Router>
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/se-connecter" component={Login} />
            <Route path="/s'inscrire" component={SignUp} />
            <Route path="/mot-de-passe-oublie" component={ForgottenPassword} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;