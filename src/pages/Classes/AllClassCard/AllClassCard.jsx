import React from 'react';

const AllClassCard = ({singleClass}) => {
    const {class_name, instructor_name, image_url, available_seats, currently_enrolled_students, price} = singleClass;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={image_url} alt={class_name} style={{maxHeight: '200px'}}/></figure>
            <div className="card-body">
                <h2 className="card-title text-center">{class_name}</h2>
                <p>Available Seats: {available_seats}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-secondary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default AllClassCard;