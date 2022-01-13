import React from 'react';
import About from '../../shared/About/About';
import Footer from '../../shared/Footer/Footer';
import Navigation from '../../shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import SubBanner from './../sub-Banner/SubBanner';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <SubBanner />
            <Products />
            <About />

            <Footer />
        </div>
    );
};

export default Home;