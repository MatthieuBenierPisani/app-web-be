import React from 'react';
import Header from './Header';
import Footer from './Footer';

import '../Styles/Home.css';
import '../Styles/FAQ.css';

const FAQ = () => {
    return (
        <div>
            <Header/>
            <div></div>
            <div id="page-container" style={{paddingBottom: "40px"}}>
                <div id="content-wrap">
                    <h1 className="header_one" style={{textAlign: "center"}}>Questions fréquemment posées</h1>
                    <p className="text-center" style={{fontWeight: "900", color: "black", fontSize: "18px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra pharetra commodo. Donec sed egestas purus. <br/>Vivamus tempor enim urna. In nisi turpis, efficitur quis nunc eu, pharetra placerat sapien. </p>
                    <div className="container">
                        <div class="row" style={{paddingLeft: "2%", paddingRight: "2%", paddingTop: "2%"}}>
                            <div class="col-sm-5">
                                <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Vestibulum et ultrices posuere cubilia curae ?</h5>
                                    <p class="card-text">Sed cursus eu erat in dictum. Proin fermentum lacus a elementum interdum. Suspendisse quis tortor ultricies, ullamcorper velit sodales, finibus lorem.</p>
                                </div>
                                </div>
                            </div>
                            <div class="col-sm-7">
                                <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Vestibulum et ultrices posuere cubilia curae ?</h5>
                                    <p class="card-text">Sed cursus eu erat in dictum. Proin fermentum lacus a elementum interdum. Suspendisse quis tortor ultricies, ullamcorper velit sodales, finibus lorem. Vivamus dictum sagittis lacus, a condimentum purus ullamcorper ut. Aenean libero purus, efficitur et posuere ac, commodo sit amet metus.</p>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="row" style={{paddingLeft: "2%", paddingRight: "2%", paddingTop: "2%"}}>
                            <div class="col-sm-7">
                                <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Vestibulum et ultrices posuere cubilia curae ?</h5>
                                    <p class="card-text">Sed cursus eu erat in dictum. Proin fermentum lacus a elementum interdum. Suspendisse quis tortor ultricies, ullamcorper velit sodales, finibus lorem. Sed cursus eu erat in dictum. Proin fermentum lacus a elementum interdum. Suspendisse quis tortor ultricies, ullamcorper velit sodales, finibus lorem.</p>
                                </div>
                                </div>
                            </div>
                            <div class="col-sm-5">
                                <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Vestibulum et ultrices posuere cubilia curae ?</h5>
                                    <p class="card-text">Sed cursus eu erat in dictum. Proin fermentum lacus a elementum interdum. Suspendisse quis tortor ultricies, ullamcorper velit sodales, finibus lorem. Vivamus dictum sagittis lacus, a condimentum purus ullamcorper ut. Aenean libero purus, efficitur et posuere ac, commodo sit amet metus.</p>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="row" style={{paddingLeft: "2%", paddingRight: "2%", paddingTop: "2%"}}>
                            <div class="col-sm-4">
                                <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Vestibulum et ultrices posuere cubilia curae ?</h5>
                                    <p class="card-text">Sed cursus eu erat in dictum. Proin fermentum lacus a elementum interdum. Suspendisse quis tortor ultricies, ullamcorper velit sodales, finibus lorem. Sed cursus eu erat in dictum.</p>
                                </div>
                                </div>
                            </div>
                            <div class="col-sm-8">
                                <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Vestibulum et ultrices posuere cubilia curae ?</h5>
                                    <p class="card-text">Sed cursus eu erat in dictum. Proin fermentum lacus a elementum interdum. Suspendisse quis tortor ultricies, ullamcorper velit sodales, finibus lorem. Vivamus dictum sagittis lacus, a condimentum purus ullamcorper ut. Aenean libero purus, efficitur et posuere ac, commodo sit amet metus. Pellentesque odio turpis, volutpat ut lobortis ac, fringilla ac nunc. Suspendisse potenti. Aenean fermentum turpis a dui luctus, a commodo eros sagittis. Quisque ligula sem, dapibus vel consectetur non, ultrices nec tellus. Cras aliquam, nulla id pellentesque commodo, dui nibh bibendum risus, gravida molestie arcu est id libero. Phasellus sodales fringilla justo, nec aliquet arcu sollicitudin nec.</p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    );
};

export default FAQ;