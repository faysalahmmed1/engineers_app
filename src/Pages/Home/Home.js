import React from 'react';
import Services from './Services/Services';
import Experts from './Experts/Experts';
import Banar from './Banar/Banar';

const Home = () => {
    return (
        <div>
            <Banar></Banar>
            <Services></Services>
            <Experts></Experts>
        </div>
    );
};

export default Home;