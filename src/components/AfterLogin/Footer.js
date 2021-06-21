import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import './Footer.css';
import logo from './be_logo.png';

const Footer = () => {
    return (
    <div className="footer">
        <div className="footer-wrapper">
            <div className="footer-inner">
            <div className="wrapper-footer">
                <img src={logo}></img>
                    <ul>
                        <li>
                            <Link to={"/accueil"}>Se déconnecter</Link>
                        </li>
                        <li>
                            <Link to={"/mon-compte"}>Mon compte</Link>
                        </li>
                        <li>
                            <Link to={"/nous-contacter"}>Nous contacter</Link>
                        </li>
                        <li>
                            <Link to={"/faq"}>FAQ</Link>
                        </li>
                        <li>
                            <Link to={"/accueil"}>Accueil</Link>
                        </li>
                    </ul>
            </div>
            </div>
        </div>
      </div>
    )
  }

export default Footer;