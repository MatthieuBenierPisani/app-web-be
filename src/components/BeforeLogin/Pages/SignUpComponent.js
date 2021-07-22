import React, { Component, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import logo from "../assets/be_logo.png";
import Login from './LoginComponent';

const SignUpForm = () => {
    const [formSubmit, setFormSubmit] = useState(false);
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleRegister = async (e) => {
      e.preventDefault();
        await axios({
          method: "post",
          url: `localhost:4000/users`,
          data: {
            firstname,
            lastname,
            email,
            password,
          },
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin' : '*',
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            "proxy": "http://localhost:4000",
            'Accept': '*/*',
            },
        })
          .then((res) => {
            console.log(res);
            if (res.data.errors) {
                /*
              pseudoError.innerHTML = res.data.errors.pseudo;
              emailError.innerHTML = res.data.errors.email;
              passwordError.innerHTML = res.data.errors.password;
              */
             alert('Error dans le call api');
            } else {
              setFormSubmit(true);
            }
          })
          .catch((err) => console.log(err));
      };

    return (
        <>
        {formSubmit ? (
            <>
            <Login />
            <span></span>
            <h4 className="success">
                Enregistrement réussi, veuillez-vous connecter
            </h4>
            </>
        ) : (
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <form action="" onSubmit={handleRegister}>
                        <div className="img-padding">
                            <img src={logo} width="350" style={{float: "right"}}/>
                        </div>
                        <div className="h3">
                        <h3 style={{color: "#084A83", fontFamily: "Roboto", fontWeight: "600"}}>Inscription <br /> <span style={{fontWeight: "200", fontFamily: "Roboto", fontSize: "19px"}}>
                            à la plateforme Click&Collect BetterEarth</span></h3>
                        </div>
                        <div className="form-group">
                            <input 
                            type="text"
                            name="firstname"
                            id="firstname"
                            onChange={(e) => setFirstname(e.target.value)}
                            value={firstname} 
                            className="form-control" 
                            placeholder="firstname" />
                        </div>
                        <div className="inBetween"></div>
                        <div className="form-group">
                            <input 
                            type="text"
                            name="lastname"
                            id="lastname"
                            onChange={(e) => setLastname(e.target.value)}
                            value={lastname} 
                            className="form-control" 
                            placeholder="lastname" />
                        </div>
                        <div className="inBetween"></div>
                        <div className="form-group">
                            <input 
                            type="email"
                            name="email"
                            id="email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email} 
                            className="form-control" 
                            placeholder="email" />
                        </div>
                        <div className="inBetween"></div>
                        <div className="form-group">
                            <input 
                            type="password"
                            name="password"
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password} 
                            className="form-control" 
                            placeholder="password"/>
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
        )}
        </>
    );
};

export default SignUpForm;