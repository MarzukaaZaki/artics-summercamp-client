import React from 'react';

const InstructorCard = ({popularInstructor}) => {
    const { instructor_name, image_url, no_of_enrolled_students} = popularInstructor;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={image_url} alt={instructor_name} /></figure>
            <div className="card-body">
                <h2 className="card-title">{instructor_name}</h2>
                <p>Currently has: {no_of_enrolled_students} students under him/her.</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default InstructorCard;