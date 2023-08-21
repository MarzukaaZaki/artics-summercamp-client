import React from 'react';
import Marquee from "react-fast-marquee";
import artwork1 from '../../../assets/artwork1.jpg'
import artwork2 from '../../../assets/artwork2.jpg'
import artwork3 from '../../../assets/artwork3.jpg'
import artwork4 from '../../../assets/artwork4.jpg'
import artwork5 from '../../../assets/artwork5.jpg'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const BestWorks = () => {
    return (
        <div>
            <SectionTitle heading="Our Best Works"></SectionTitle>
            <Marquee>
                <img src={artwork1} alt="" className='w-40 h-60 mx-10' />
                
                <img src={artwork2} alt="" className='w-90 h-60 mx-10' />
                
                <img src={artwork3} alt="" className='w-90 h-60 mx-10' />
                <img src={artwork4} alt="" className='w-40 h-60 mx-10' />
                <img src={artwork5} alt="" className='w-90 h-60 mx-10' />
                
               
            </Marquee>
        </div>
    );
};

export default BestWorks;