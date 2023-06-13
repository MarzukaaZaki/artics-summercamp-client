import React from 'react';

const AllClassCard = ({singleClass}) => {
    const {nameOfClass, instructorName, photo, seats, price} = singleClass;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl text-center">
            <figure><img src={photo} alt={nameOfClass} style={{maxHeight: '200px'}}/></figure>
            <div className="card-body">
                <h2 className="card-title justify-center">{nameOfClass}</h2>
                <p>Available Seats: {seats}</p>
                <p className='text-gray-500 font-semibold my-3'>Instructor: {instructorName ? instructorName:'N/A'}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-secondary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default AllClassCard;