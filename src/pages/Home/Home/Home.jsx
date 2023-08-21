import React from 'react';

import HomeCarousel from '../HomeCarousel/HomeCarousel';
import PopularClasses from '../PopularClasses/PopularClasses';
import PopularInstructors from '../PopularInstructors/PopularInstructors';
import Services from '../Services/Services';
import Schedule from '../Schedule/Schedule';
import Testimonials from '../Testimonials/Testimonials/Testimonials';
import Welcome from '../Welcome/Welcome';
import BestWorks from '../BestWorks/BestWorks';

const Home = () => {
    return (
        <div>
           <HomeCarousel></HomeCarousel>
           <Welcome></Welcome>
           <BestWorks></BestWorks>
           <PopularClasses></PopularClasses>
           <PopularInstructors></PopularInstructors>
           <Schedule></Schedule>
           <Services></Services>
           <Testimonials></Testimonials>
        
        </div>
    );
};

export default Home;