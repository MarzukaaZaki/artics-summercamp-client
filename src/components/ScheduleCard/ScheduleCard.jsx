import React from 'react';

const ScheduleCard = ({ nameOfClass, imgOfClass, scheduleList }) => {
    return (
        <>
       
        <div className="card w-83 bg-base-100 shadow-xl image-full" >
            
            <figure><img src={imgOfClass} alt={nameOfClass} className='w-full h-36' /></figure>
            <div className="card-body">
                <h2 className='text-2xl text-center font-semibold mb-4 bg-white text-gray-800 p-3 rounded-sm'>{nameOfClass}</h2>
                {
                    scheduleList.map((scheduleListItem) =>
                    <>
                        <h2 key={scheduleListItem.day} className="card-title flex justify-between">
                            <p className='uppercase text-sm'>{scheduleListItem.day}</p>
                            <div className="badge badge-ghost py-4">{scheduleListItem.time}</div>
                        </h2>
                        <hr className='border-gray-200 my-2'/>
                    </>
                    )
                }
            </div>
        </div> 
        
        </>
    );
};

export default ScheduleCard;