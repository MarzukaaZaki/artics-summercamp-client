import React from 'react';

import HomeCarousel from '../HomeCarousel/HomeCarousel';
import PopularClasses from '../PopularClasses/PopularClasses';
import PopularInstructors from '../PopularInstructors/PopularInstructors';
import Services from '../Services/Services';
import Schedule from '../Schedule/Schedule';
import Testimonials from '../Testimonials/Testimonials/Testimonials';
import Welcome from '../Welcome/Welcome';
import BestWorks from '../BestWorks/BestWorks';
import BlogPosts from '../BlogPosts/BlogPosts';
import ReviewForm from '../ReviewForm/ReviewForm';

const Home = () => {
    return (
        <div>
           <HomeCarousel></HomeCarousel>
           <Welcome></Welcome>
           <BestWorks></BestWorks>
           <PopularClasses></PopularClasses>
           <PopularInstructors></PopularInstructors>
           <Schedule></Schedule>
           <BlogPosts></BlogPosts>
           <Services></Services>
           <ReviewForm></ReviewForm>
           <Testimonials></Testimonials>
        
        </div>
    );
};

export default Home;