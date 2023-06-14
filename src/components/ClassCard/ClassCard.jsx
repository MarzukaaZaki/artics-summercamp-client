import React from 'react';

const ClassCard = ({ popularClass }) => {
    const {nameOfClass, instructorName, photo, seats} = popularClass;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={photo} alt={nameOfClass} style={{maxHeight: '200px'}}/></figure>
            <div className="card-body">
                <h2 className="card-title text-center">{nameOfClass}</h2>
                <p>Available Seats: {seats}</p>
                <p>Instructor: {instructorName}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-secondary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;