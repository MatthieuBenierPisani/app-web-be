import React from 'react';
import Header from './Header';
import Footer from './Footer';

import '../Styles/Home.css';
import image_home from '../Assets/image_home.png';
import map from '../Assets/map.png';

const Home = () => {
    return (
        <div>
            <Header />
            <div id="page-container">
                <div id="content-wrap" style={{paddingBottom: "120px"}}>
                    <div className="home">
                        <div style={{width: "100%", paddingLeft: "5%", paddingRight: "5%", background: "white", border: "1px solid #094A83", paddingBottom: "40px"}}>
                            <img className="image_home" src={image_home}></img>
                            <h1 className="home_header">Crééz votre point relais de dépôt de déchets pour particuliers.</h1>
                        </div>
                    </div>
                    <div style={{width: "88%", marginLeft: "6%", background: "white", border: "1px solid #094A83", paddingBottom: "40px"}}>
                            <h1 className="home_header_two">Découvrez notre plateforme Click&Collect</h1>
                    </div>
                    <div style={{width: "96%", marginLeft: "34px", marginTop: "-26px", background: "white", border: "1px solid #094A83", paddingBottom: "40px"}}>
                        <div className="row g-4 py-5 row-cols-1 row-cols-lg-4">
                            <div className="feature col">
                                <h2 className="home_header_three">1</h2>
                                <p className="home_para">Je choisis le type de déchet que je souhaite récolter.</p>
                            </div>
                            <div className="feature col">
                                <h2 className="home_header_three">2</h2>
                                <p className="home_para">Je précise un lieu de dépôt pour ces déchets.</p>
                            </div>
                            <div className="feature col">
                                <h2 className="home_header_three">3</h2>
                                <p className="home_para">Je remplis les champs liés aux informations de mon compte.</p>
                            </div>
                            <div className="feature col">
                                <h2 className="home_header_three">4</h2>
                                <p className="home_para">Je remplis les champs liés aux informations de mon compte.</p>
                            </div>
                        </div>
                    </div>
                    <h2 className="home_header_three">.01 Quel(s) genre(s) de déchet(s) souhaitez-vous récolter ?</h2>
                    <div class="container">
                        <div class="row align-items-start" style={{textAlign: "center", marginLeft: "4%", paddingTop: "14px"}}>
                            <div class="col">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label class="form-check-label" for="flexCheckDefault">Plastique</label>
                                <br/>
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label class="form-check-label" for="flexCheckDefault">Métal, aluminium</label>
                                <br/>
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label class="form-check-label" for="flexCheckDefault">Verre</label>
                                <br/>
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label class="form-check-label" for="flexCheckDefault">PVC</label>
                            </div>
                            <div class="col">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label class="form-check-label" for="flexCheckDefault">Papier</label>
                                <br/>
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label class="form-check-label" for="flexCheckDefault">Liège</label>
                                <br/>
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label class="form-check-label" for="flexCheckDefault">Petits chimiques</label>
                                <br/>
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label class="form-check-label" for="flexCheckDefault">Déchets verts</label>
                            </div>
                            <div class="col">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label class="form-check-label" for="flexCheckDefault">Fer</label>
                                <br/>
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label class="form-check-label" for="flexCheckDefault">Conserves</label>
                                <br/>
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label class="form-check-label" for="flexCheckDefault">Peaux d'aliments</label>
                                <br/>
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label class="form-check-label" for="flexCheckDefault">Carton</label>
                            </div>
                            <div class="col">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label class="form-check-label" for="flexCheckDefault">Emballages</label>
                                <br/>
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label class="form-check-label" for="flexCheckDefault">Batteries, piles</label>
                                <br/>
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label class="form-check-label" for="flexCheckDefault">Béton, gravats</label>
                                <br/>
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label class="form-check-label" for="flexCheckDefault">Terre</label>
                            </div>
                            <div class="col">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label class="form-check-label" for="flexCheckDefault">Briques</label>
                                <br/>
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label class="form-check-label" for="flexCheckDefault">Tuiles</label>
                                <br/>
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label class="form-check-label" for="flexCheckDefault">Goudron</label>
                                <br/>
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label class="form-check-label" for="flexCheckDefault">Peintures, solvants</label>
                            </div>
                        </div>
                        <h2 className="home_header_four">.02 Quel est l’adresse de votre point relais ?</h2>
                        <div class="container" style={{textAlign: "center", paddingTop: "20px"}}>
                            <div class="row">
                                <div class="col-4">
                                <form>
                                    <div class="mb-3">
                                        <input type="email" class="form-control" placeholder="Adresse"/>
                                        <br/>
                                        <input type="email" class="form-control" placeholder="Pays"/>
                                        <br/>
                                        <input type="email" class="form-control" placeholder="Code postal"/>
                                        <br/>
                                        <input type="email" class="form-control" placeholder="Tel."/>
                                        <br/>
                                        <textarea type="email" class="form-control" placeholder="Complément d'adresse" rows="3"/>
                                    </div>
                                </form>
                                </div>
                                <div class="col-6"><img className="map" src={map}></img></div>
                            </div>
                        </div>
                        <h2 className="home_header_four">.03 Informations complémentaires</h2>
                        <div class="container" style={{textAlign: "center", paddingTop: "20px"}}>
                            <div class="row">
                                <div class="col-4">
                                <form>
                                    <div class="mb-3">
                                        <input type="email" class="form-control" placeholder="Nom de l'entreprise"/>
                                        <br/>
                                        <input type="email" class="form-control" placeholder="Adresse mail pro"/>
                                        <br/>
                                        <textarea type="email" class="form-control" placeholder="Votre secteur d'activité" rows="3"/>
                                    </div>
                                </form>
                                </div>
                                <div class="col-6">
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <button type="submit" class="btn btn-primary mb-3" style={{marginTop: "-4px", width: "50%", height: "50px"}}>Valider la création de mon point relais</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default Home;