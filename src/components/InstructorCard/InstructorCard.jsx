import React from 'react';

const InstructorCard = ({popularInstructor}) => {
    const { instructor_name, image_url, no_of_enrolled_students} = popularInstructor;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl flex flex-col items-center">
            <figure><img src='https://img.freepik.com/premium-photo/happy-brunette-female-employee-teacher-formalwear_274679-40716.jpg?w=826' alt={instructor_name} style={{maxHeight: '200px'}} /></figure>
            <div className="card-body">
                <h2 className="card-title">{instructor_name}</h2>
                <p>Currently has: {no_of_enrolled_students} students under him/her.</p>
                <div className="card-actions justify-center mt-3">
                    <button className="btn btn-info">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default InstructorCard;