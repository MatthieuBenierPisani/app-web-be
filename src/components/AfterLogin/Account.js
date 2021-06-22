import React from 'react';
import Header from './Header';
import Footer from './Footer';

import './Account.css';

const Account = () => {
    return (
        <div>
            <Header/>
            <div style={{paddingTop: "120px"}}></div>
            <h2>Account</h2>
            <div className="account">
                <nav className="account-nav">
                    <ul className="side-box-menu">
                        <li className="menu-item selected">
                            <a href="/mon-compte" className="menu-link">Informations personnelles</a>
                        </li>
                        <li className="menu-item">
                            <a href="/mon-compte" className="menu-link">Changer le mot de passe</a>
                        </li>
                        <li className="menu-item">
                            <a href="/mon-compte" className="menu-link">Supprimer le compte</a>
                        </li>
                    </ul>
                </nav>
                <main className="main-box">
                    <h1 className="main-header">Informations personnelles</h1>
                    <section>
                        <form className="account-form">
                            <div className="form-layout-grid">
                                <div className="form-column">
                                    <div className="form-group-container">
                                        <label for="email" className="form-label">Email</label>
                                        <div className="container-box">
                                            <input for="email" name="email" type="email" aria-invalid="false" aria-required="false" id="email" className="container-box-input-element"></input>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </section>
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default Account;