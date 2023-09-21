import React from 'react';
import welcomeImg from '../../../assets/welcome_artics_kids.jpg'

const Welcome = () => {
    return (
        <div className='grid md:grid-cols-2'>
            <img src={welcomeImg} alt="" className='' />
            <div className='text-center p-5 mx-3 rounded-lg' style={{ backgroundColor: '#e1f7fa' }}>
                <p className='text-2xl sm:text-xl mb-4'>Hello there! We are</p>
                <h1 className='text-6xl xs:text-3xl mb-4'> Artics ArtVenture</h1>
                <p className='py-4'>Creativity knows no bounds and adventure awaits at every corner. Join us for a season of imagination, exploration, and unforgettable memories under the warm sun. Embrace the magic of summer and let your artistic journey begin!</p>
                <button className='btn-secondary px-6 py-4 rounded-xl'>Get Started</button>


            </div>
            

        </div>
    );
};

export default Welcome;