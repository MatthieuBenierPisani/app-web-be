import React from 'react';
import Header from './Header';
import Footer from './Footer';

import '../Styles/Account.css';

const ChangePassword = () => {
    return (
        <div>
            <Header/>
            <div></div>
            <div className="account">
                <nav className="account-nav">
                    <ul className="side-box-menu">
                        <li className="menu-item">
                            <a href="/mon-compte" className="menu-link">Informations personnelles</a>
                        </li>
                        <li className="menu-item selected">
                            <a href="/changer-le-mot-de-passe" className="menu-link">Changer le mot de passe</a>
                        </li>
                        <li className="menu-item">
                            <a href="/supprimer-le-compte" className="menu-link">Supprimer le compte</a>
                        </li>
                    </ul>
                </nav>
                <main className="main-box">
                    <h1 className="main-header">Changer le mot de passe</h1>
                    <div className="before-form">
                        <p className="text-before-form">Nous vous recommandons de choisir un mot de passe fort en respectant ces critères :</p>
                        <ul className="criteria-list">
                            <li className="criteria-elem">Utilisez au moins 6 caractères</li>
                            <li className="criteria-elem">Utilisez un mix de majuscules et minuscules</li>
                            <li className="criteria-elem">Utilisez au moins un chiffre</li>
                            <li className="criteria-elem">Utilisez au moins un caractère spécial comme ".", "&" ou "*"</li>
                            <li className="criteria-elem">N'utilisez pas de mots de passes basiques comme "password", "azerty" ou "123456"</li>
                        </ul>
                    </div>
                    <form className="password-form" novalidate method="post">
                        <div className="form-layout-grid">
                            <div className="form-column">
                                <div className="form-group-container">
                                    <label for="password" className="form-label">Mot de passe actuel</label>
                                    <div className="container-box">
                                        <input for="password" name="password" type="text" aria-invalid="false" aria-required="false" id="password" className="container-box-input-element"></input>
                                    </div>
                                </div>
                                <div className="form-group-container">
                                    <label for="newpassword" className="form-label">Nouveau mot de passe</label>
                                    <div className="container-box">
                                        <input for="newpassword" name="newpassword" type="text" aria-invalid="false" aria-required="false" id="newpassword" className="container-box-input-element"></input>
                                    </div>
                                </div>
                                <div className="form-group-container">
                                    <label for="passwordConfirmation" className="form-label">Confirmer le nouveau mot de passe</label>
                                    <div className="container-box">
                                        <input for="passwordConfirmation" name="passwordConfirmation" type="text" aria-invalid="false" aria-required="false" id="passwordConfirmation" className="container-box-input-element"></input>
                                    </div>
                                </div>
                                <div className="form-group-container">
                                    <div className="container-box">
                                        <button className="update-button" type="submit" role="button">Enregistrer les modifications</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </main>
            </div>
            <Footer/>
        </div>
    );
};

export default ChangePassword;