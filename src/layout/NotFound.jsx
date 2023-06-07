import React from 'react';
import errorImg from '../assets/error.jpg'
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <h2 className="text-3xl text-gray-600 mb-8">Page Not Found</h2>
            <img className="w-48 h-48" src={errorImg} alt="404 Error" />

            <Link to='/' className='text-2xl'>Return to Home</Link>
        </div>
    );
};

export default NotFound;