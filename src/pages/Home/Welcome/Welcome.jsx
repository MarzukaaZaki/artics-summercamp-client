import React from 'react';
import welcomeImg from '../../../assets/welcome_artics_kids.jpg'

const Welcome = () => {
    return (
        <div className='grid md:grid-cols-2 px-5 mt-5'>
            <img src={welcomeImg} alt="" className='rounded-tl-lg rounded-bl-lg shadow' />
            <div className='text-center p-5 mx-3 rounded-tr-lg rounded-br-lg bg-gray-100 shadow'>
                <p className='text-2xl sm:text-xl mb-4'>Hello there! We are</p>
                <h1 className='text-6xl xs:text-3xl mb-4 font-bold'> <span className='text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-900 px-2'>Artics</span> ArtVenture</h1>
                <p className='py-4'>Creativity knows no bounds and adventure awaits at every corner. Join us for a season of imagination, exploration, and unforgettable memories under the warm sun. Embrace the magic of summer and let your artistic journey begin!</p>
                <button className='btn bg-gradient-to-r from-teal-200 to-[#fa759b] px-6 py-4 rounded-xl'>Get Started</button>


            </div>
            

        </div>
    );
};

export default Welcome;