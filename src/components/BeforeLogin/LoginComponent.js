import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "./assets/be_logo.png";

export default class Login extends Component {
    render() {
        return (
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <form>
                        <div className="img-padding">
                            <img src={logo} width="350" style={{float: "right"}}/>
                        </div>
                        <div className="h3">
                        <h3 style={{color: "#084A83", fontFamily: "Roboto", fontWeight: "600"}}>Connexion <br /> <span style={{fontWeight: "200", fontFamily: "Roboto", fontSize: "19px"}}>
                            à la plateforme Click&Collect BetterEarth</span></h3>
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" placeholder="Identifiant" />
                        </div>
                        <div className="inBetween"></div>
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Mot de passe" />
                        </div>
                        <div className="inBetween"></div>
                        <button type="submit" className="btn btn-primary btn-block">Se connecter</button>
                        <div className="inBetween"></div>
                        <div className="centered">
                            <Link className="forgot-password" to={"/mot-de-passe-oublie"}>Mot de passe oublié ?</Link>
                        </div>
                        <div className="inBetween"></div>
                        <button type="submit" className="btn btn-primary-two btn-block">
                            <Link to={"/s'inscrire"} style={{textDecoration: "none", color: "black"}}>Se créer un compte</Link>
                        </button>
                    </form>
                </div>
            </div>
            
        );
    }
}