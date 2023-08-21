import React from 'react';
import img1 from '../../../../assets/grid_img_girl.jpg'
import img2 from '../../../../assets/grid_img_kid.jpg'
import img3 from '../../../../assets/grid_img_kids.jpg'
import img4 from '../../../../assets/grid_img_art.jpg'
import img5 from '../../../../assets/grid_img_boy.jpg'
const TestimonialsGallery = () => {
    return (
        <div className='grid md:grid-cols-2 -gap-3'>
            <img src={img4} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img1} alt="" />
            {/* <img src={img5} alt=""/> */}
            
        </div>
    );
};

export default TestimonialsGallery;