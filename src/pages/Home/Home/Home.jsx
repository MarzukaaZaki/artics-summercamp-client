import React from 'react';

import HomeCarousel from '../HomeCarousel/HomeCarousel';
import PopularClasses from '../PopularClasses/PopularClasses';
import PopularInstructors from '../PopularInstructors/PopularInstructors';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
           <HomeCarousel></HomeCarousel>
           <PopularClasses></PopularClasses>
           <PopularInstructors></PopularInstructors>
           <Services></Services>
        
        </div>
    );
};

export default Home;