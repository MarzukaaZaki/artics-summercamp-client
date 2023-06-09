import React from 'react';

import HomeCarousel from '../HomeCarousel/HomeCarousel';
import PopularClasses from '../PopularClasses/PopularClasses';

const Home = () => {
    return (
        <div>
           <HomeCarousel></HomeCarousel>
           <PopularClasses></PopularClasses>
        </div>
    );
};

export default Home;