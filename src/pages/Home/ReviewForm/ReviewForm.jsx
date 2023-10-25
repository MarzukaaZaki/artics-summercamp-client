import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import reviewImg from '../../../../src/assets/review.jpg'

const ReviewForm = () => {
    return (
        <div className="hero min-h-screen w-full my-6">
        <div className="hero-content flex flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <img src={reviewImg}/>
          </div> 
          <div className="card w-full max-w-sm shadow-2xl">
          <SectionTitle heading='Leave us a Reviews'/>
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input type="text" placeholder="name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Write Your Review</span>
                </label>
                <textarea className='border border-gray-300 resize-none rounded-md p-4' name='review' id='review' rows={4} placeholder='write away...'></textarea>
               
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-teal-500 text-white">Leave a Review!</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default ReviewForm;