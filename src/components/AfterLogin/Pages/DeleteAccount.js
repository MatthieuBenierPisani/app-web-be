import React from 'react';
import Header from './Header';
import Footer from './Footer';

import '../Styles/Account.css';

const DeleteAccount = () => {
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
                        <li className="menu-item">
                            <a href="/changer-le-mot-de-passe" className="menu-link">Changer le mot de passe</a>
                        </li>
                        <li className="menu-item selected">
                            <a href="/supprimer-le-compte" className="menu-link">Supprimer le compte</a>
                        </li>
                    </ul>
                </nav>
                <main className="main-box">
                    <h1 className="main-header">Supprimer le compte</h1>
                    <div className="before-form">
                        <p className="text-before-form">Veuillez confirmer dans le champ d’écriture que vous souhaitez supprimer votre compte ainsi que toutes les données liées à ce dernier <br/ >en écrivant “Je confirme la suppresion de mon compte BetterEarth”. </p>
                    </div>
                    <form className="password-form" novalidate method="post">
                        <div className="form-layout-grid">
                            <div className="form-column">
                                <div className="form-group-container">
                                    <label for="password" className="form-label">Confirmer la suppression</label>
                                    <div className="container-box">
                                        <input for="password" name="password" type="text" aria-invalid="false" aria-required="false" id="password" className="container-box-input-element"></input>
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

export default DeleteAccount;