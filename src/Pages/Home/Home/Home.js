import React from 'react';
import ChooseUs from '../ChooseUs/ChooseUs';
import Featured from '../Featured/Featured';
import Hero from '../Hero/Hero';

const Home = () => {
    return (
        <div>
            <Hero />
            <Featured />
            <ChooseUs />
        </div>
    );
};

export default Home;