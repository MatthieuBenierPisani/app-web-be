import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SignUp from "./SignUpComponent";

export default class Login extends Component {
    render() {
        return (
            <form>
                <h3>Connexion à la plateforme Click&Collect BetterEarth</h3>

                <div className="form-group">
                    <input type="email" className="form-control" placeholder="Identifiant" />
                </div>
                <div className="inBetween"></div>
                <div className="form-group">
                    <input type="password" className="form-control" placeholder="Mot de passe" />
                </div>
                <div className="inBetween"></div>
                <Link className="forgot-password" to={"/s'inscrire"}>Se créer un compte</Link>
                <div className="inBetween"></div>
                <button type="submit" className="btn btn-primary btn-block">Se connecter</button>
            </form>
            
        );
    }
}