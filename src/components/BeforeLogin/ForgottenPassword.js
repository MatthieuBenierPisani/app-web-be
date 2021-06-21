import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "./assets/be_logo.png";

export default class ForgottenPassword extends Component {
    render() {
        return (
            <form>
                <div className="img-padding">
                    <img src={logo} width="350" style={{float: "right"}}/>
                </div>
                <div className="h3">
                <h3 style={{color: "#084A83", fontFamily: "Roboto", fontWeight: "600"}}>Récupération <br /> <span style={{fontWeight: "200", fontFamily: "Roboto", fontSize: "19px"}}>
                    de votre mot de passe</span></h3>
                </div>
                <div className="form-group">
                    <input type="email" className="form-control" placeholder="Email" />
                </div>
                <div className="inBetween"></div>
                <button type="submit" className="btn btn-primary btn-block">Envoyer un mail de récupération</button>
                <div className="inBetween"></div>
                <div className="centered">
                    <Link className="forgot-password" to={"/se-connecter"}>Retourner à la page de connexion</Link>
                </div>
            </form>
        );
    }
}