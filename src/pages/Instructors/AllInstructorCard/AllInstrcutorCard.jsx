import React from 'react';

const AllInstrcutorCard = ({instructor}) => {
    const { displayName, photoURL, email} = instructor;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl text-center">

            <figure><img src={photoURL} alt={displayName} style={{maxHeight: '200px'}} /></figure>
            <div className="card-body">
                <h2 className="card-title">{displayName}</h2>
                <p className='text-gray-400'>{email}</p>
                <p>Currently has:  students under him/her.</p>
                <div className="card-actions justify-center mt-3">
                    <button className="btn btn-info">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default AllInstrcutorCard;