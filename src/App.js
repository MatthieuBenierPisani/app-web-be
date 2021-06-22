import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/BeforeLogin/LoginComponent";
import SignUp from "./components/BeforeLogin/SignUpComponent";
import ForgottenPassword from "./components/BeforeLogin/ForgottenPassword";
import Account from "./components/AfterLogin/Account";
import ChangePassword from "./components/AfterLogin/ChangePassword";
import FoireAuxQuestions from "./components/AfterLogin/FAQ";
import Contact from "./components/AfterLogin/Contact";
import Home from "./components/AfterLogin/Home";

import Header from "./components/AfterLogin/Header";
import Footer from "./components/AfterLogin/Footer";

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (

    <Router>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/se-connecter" component={Login} />
            <Route path="/s'inscrire" component={SignUp} />
            <Route path="/mot-de-passe-oublie" component={ForgottenPassword} />
            <Route path="/accueil" component={Home} />
            <Route path="/faq" component={FoireAuxQuestions} />
            <Route path="/nous-contacter" component={Contact} />
            <Route path="/mon-compte" component={Account} />
            <Route path="/changer-le-mot-de-passe" component={ChangePassword} />
          </Switch>
    </Router>
  );
}

export default App;