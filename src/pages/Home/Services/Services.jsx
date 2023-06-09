import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import alumniImg from '../../../assets/alumni.jpg'
import natureWalkImg from '../../../assets/naturewalk.png'
import lifeCoachingImg from '../../../assets/coaching.jpg'

const Services = () => {
    return (
        <div>
            <SectionTitle heading="Get the Best out of Artics"></SectionTitle>
            <div className='grid md:grid-cols-3 gap-8 text-center mx-5 my-10'>
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src={alumniImg} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="text-4xl font-bold uppercase">Connect with Alumni</h2>
                        
                        <div className="card-actions justify-center mt-8">
                            <button className="btn btn-error">Learn More</button>
                        </div>
                    </div>
                </div>
                
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src={natureWalkImg} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="text-4xl font-bold uppercase">Go for Nature Walks</h2>
                        
                        <div className="card-actions justify-center mt-8">
                            <button className="btn btn-error">Learn More</button>
                        </div>
                    </div>
                </div>
                
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src={lifeCoachingImg} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="text-4xl font-bold uppercase">Life Coaching Sessions</h2>
                        
                        <div className="card-actions justify-center mt-8">
                            <button className="btn btn-error">Learn More</button>
                        </div>
                    </div>
                </div>
                
                
            </div>
        </div>
    );
};

export default Services;