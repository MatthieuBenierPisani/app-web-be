import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/BeforeLogin/Pages/LoginComponent";
import SignUp from "./components/BeforeLogin/Pages/SignUpComponent";
import ForgottenPassword from "./components/BeforeLogin/Pages/ForgottenPassword";

import Account from "./components/AfterLogin/Pages/Account";
import ChangePassword from "./components/AfterLogin/Pages/ChangePassword";
import DeleteAccount from "./components/AfterLogin/Pages/DeleteAccount";

import FoireAuxQuestions from "./components/AfterLogin/Pages/FAQ";
import Contact from "./components/AfterLogin/Pages/Contact";
import Home from "./components/AfterLogin/Pages/Home";

import Header from "./components/AfterLogin/Pages/Header";
import Footer from "./components/AfterLogin/Pages/Footer";

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
            <Route path="/supprimer-le-compte" component={DeleteAccount} />
          </Switch>
    </Router>
  );
}

export default App;