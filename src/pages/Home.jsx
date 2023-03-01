import React from 'react';
import NavBar from '../components/NavBar';
import Carousel from '../components/Carousel';
import Products from '../components/Products';

function Home(props) {
    return (
        <div>
            <NavBar />
            <Carousel />
            <Products />
        </div>
    );
}

export default Home;