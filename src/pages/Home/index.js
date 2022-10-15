import React from 'react';
import '../../App.css';
import HeroSection from './HeroSection';
import Cards from '~/components/Cards';

function Home() {
    return (
        <div className="home">
            <HeroSection />
            <Cards />
        </div>
    );
}

export default Home;
