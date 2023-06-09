import React from 'react';

import HomeCarousel from '../HomeCarousel/HomeCarousel';
import PopularClasses from '../PopularClasses/PopularClasses';
import PopularInstructors from '../PopularInstructors/PopularInstructors';

const Home = () => {
    return (
        <div>
           <HomeCarousel></HomeCarousel>
           <PopularClasses></PopularClasses>
           <PopularInstructors></PopularInstructors>
        </div>
    );
};

export default Home;