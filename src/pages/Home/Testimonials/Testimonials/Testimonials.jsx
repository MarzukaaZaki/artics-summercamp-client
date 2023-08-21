import React from 'react';
import TestimonialsCarousel from '../TestimonialsCarousel/TestimonialsCarousel';
import TestimonialsGallery from '../TestimonialsGallery/TestimonialsGallery';

const Testimonials = () => {
    return (
        <div className='grid md:grid-cols-2'>
            <TestimonialsCarousel/>
            <TestimonialsGallery/>
            
        </div>
    );
};

export default Testimonials;