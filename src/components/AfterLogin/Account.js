import React from 'react';
import Header from './Header';
import Footer from './Footer';

import './Account.css';

const Account = () => {
    return (
        <div>
            <Header/>
            <div></div>
            <div className="account">
                <nav className="account-nav">
                    <ul className="side-box-menu">
                        <li className="menu-item selected">
                            <a href="/mon-compte" className="menu-link">Informations personnelles</a>
                        </li>
                        <li className="menu-item">
                            <a href="/changer-le-mot-de-passe" className="menu-link">Changer le mot de passe</a>
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
                                        <label for="identifiant" className="form-label">Identifiant</label>
                                        <div className="container-box">
                                            <input for="identifiant" name="identifiant" type="text" aria-invalid="false" aria-required="false" id="identifiant" className="container-box-input-element"></input>
                                        </div>
                                    </div>
                                    <div className="form-group-container">
                                        <label for="prenom" className="form-label">Prénom</label>
                                        <div className="container-box">
                                            <input for="prenom" name="prenom" type="text" aria-invalid="false" aria-required="false" id="prenom" className="container-box-input-element"></input>
                                        </div>
                                    </div>
                                    <div className="form-group-container">
                                        <label for="nom" className="form-label">Nom</label>
                                        <div className="container-box">
                                            <input for="nom" name="nom" type="text" aria-invalid="false" aria-required="false" id="nom" className="container-box-input-element"></input>
                                        </div>
                                    </div>
                                    <div className="form-group-container">
                                        <label for="email" className="form-label">Email</label>
                                        <div className="container-box">
                                            <input for="email" name="email" type="email" aria-invalid="false" aria-required="false" id="email" className="container-box-input-element"></input>
                                        </div>
                                    </div>
                                    <div className="form-group-container">
                                        <label for="phone" className="form-label">Numéro de téléphone</label>
                                        <div className="container-box">
                                            <input for="phone" name="phone" type="text" aria-invalid="false" aria-required="false" id="phone" className="container-box-input-element"></input>
                                        </div>
                                    </div>
                                    <div className="form-group-container">
                                        <label for="profile_image" className="form-label">
                                            <div className="profile_image_label">Image de profile</div>
                                            <img src="https://www.gravatar.com/avatar/c79f29ec17c75d9062f1c8f8489ec7e8?s=140&d=retro" alt="votre avatar"/>
                                        </label>
                                        <div className="container-box">
                                            <input for="profile_image" name="profile_image" type="file" aria-invalid="false" aria-required="false" id="profile_image" className="container-box-input-element"></input>
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
                    </section>
                </main>
            </div>
            <Footer/>
        </div>
    );
};

export default Account;