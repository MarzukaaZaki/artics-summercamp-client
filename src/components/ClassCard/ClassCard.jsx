import React from 'react';

const ClassCard = ({ popularClass }) => {
    const {class_name, instructor_name, image_url, available_seats} = popularClass;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={image_url} alt={class_name} /></figure>
            <div className="card-body">
                <h2 className="card-title">{class_name}</h2>
                <p>Available Seats: {available_seats}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;