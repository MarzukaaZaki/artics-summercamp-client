import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import sliderImg1 from '../../../assets/slider1.jpg'
import sliderImg2 from '../../../assets/slider2.jpg'
import sliderImg3 from '../../../assets/slider3.jpg'
import './HomeCarousel.css'

const HomeCarousel = () => {
   

    return (
        <Carousel
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
      >
        <div className="slide">
          <img src={sliderImg1} alt="Slide 1" className="slide-image" />
          <div className="overlay">
          <div className="text-container">
            <h2> Welcome to Artic</h2>
            <p> A Summer Camp like No Other</p>
           
          </div>
        </div>
        </div>
        <div className="slide">
          <img src={sliderImg2} alt="Slide 2" className="slide-image" />
          <div className="overlay">
          <div className="text-container">
            <h2>Unleash Your Creative Spirit </h2>
            <p>Your Gateway to Artistic Bliss</p>
            
          </div>
        </div>
        </div>
        <div className="slide">
          <img src={sliderImg3} alt="Slide 3" className="slide-image" />
          <div className="overlay">
          <div className="text-container">
            <h2>Let Your Imagination Soar</h2>
            <p>Join this Summer!</p>
            
          </div>
        </div>
        </div>
        
      </Carousel>
    );
};



export default HomeCarousel;