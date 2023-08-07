import React from 'react';
import fanImg from '../../assets/fan.png'
import { Slide } from 'react-awesome-reveal';


const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className= "flex flex-col items-center my-10">
           <Slide >
            <div className='flex'>
            
            <img src={fanImg} className='h-10 w-10' alt="" />
            
            <h2 className="underline decoration-wavy decoration-cyan-500 text-3xl font-bold">{heading}</h2>
            <img src={fanImg} className='h-10 w-10' alt="" />
            </div>
            
           
            <h3 className="text-gray-500 my-5">{subHeading}</h3>
           </Slide>
        </div>
    );
};

export default SectionTitle;