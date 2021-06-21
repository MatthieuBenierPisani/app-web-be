import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "./assets/be_logo.png";

export default class SignUp extends Component {
    render() {
        return (
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <form>
                        <div className="img-padding">
                            <img src={logo} width="350" style={{float: "right"}}/>
                        </div>
                        <div className="h3">
                        <h3 style={{color: "#084A83", fontFamily: "Roboto", fontWeight: "600"}}>Inscription <br /> <span style={{fontWeight: "200", fontFamily: "Roboto", fontSize: "19px"}}>
                            à la plateforme Click&Collect BetterEarth</span></h3>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Identifiant" />
                        </div>
                        <div className="inBetween"></div>
                        <div className="form-group">
                            <input type="email" className="form-control" placeholder="Email" />
                        </div>
                        <div className="inBetween"></div>
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Mot de passe" />
                        </div>
                        <div className="inBetween"></div>
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Confirmer le mot de passe" />
                        </div>
                        <div className="inBetween"></div>
                        <button type="submit" className="btn btn-primary btn-block">Se créer un compte</button>
                        <div className="inBetween"></div>
                        <div className="centered">
                            <Link className="forgot-password" to={"/se-connecter"}>Vous avez déjà un compte ?</Link>
                        </div>
                        <div className="inBetween"></div>
                        <button type="submit" className="btn btn-primary-two btn-block">
                            <Link to={"/se-connecter"} style={{textDecoration: "none", color: "black"}}>Se connecter</Link>
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}