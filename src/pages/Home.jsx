import React from 'react';
import NavBar from '../components/NavBar';
import Carousel from '../components/Carousel';
import Products from '../components/Products';
import Footer from '../components/Footer';

function Home(props) {
    return (
        <div>
            <NavBar />
            <Carousel />
            <Products />
            <Footer />
        </div>
    );
}

export default Home;