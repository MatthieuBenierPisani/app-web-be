import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            <Header />
            <div style={{paddingTop: "120px"}}></div>
            <h2>Home</h2>
            <Footer />
        </div>
    );
};

export default Home;