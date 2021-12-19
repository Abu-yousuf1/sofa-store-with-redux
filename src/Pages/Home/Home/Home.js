import React from 'react';
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
            <Footer />
        </div>
    );
};

export default Home;