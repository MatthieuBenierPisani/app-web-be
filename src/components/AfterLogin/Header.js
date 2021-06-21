import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import './Header.css';
import svg from './so.svg';

const Header = () => {
    return (
      <div className="header">
        <div className="header-wrapper">
          <div className="header-inner">
            <div className="wrapper">
              <ul>
                <li>
                  <Link to={"/accueil"}>Se déconnecter <img src={svg} style={{width: "22px"}}/></Link>
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

export default Header;