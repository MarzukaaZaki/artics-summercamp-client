import React from 'react';
import { useForm } from "react-hook-form";

const FeedbackModal = (props) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const {classItem, handleFeedback} = props
    
    return (
        <div>
            
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="update-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h1 className='text-2xl font-bold text-center mb-4'>Send Feedback</h1>
                { /* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
                
                
                <form onSubmit={handleSubmit(handleFeedback)}>
                    <label className='font-semibold'> Write Feedback</label>
                    <br />
                    <input type="text" {...register("feedback")} className='border rounded px-2 py-2 mb-4' />
                    <br />
                    <input type="submit" className='btn btn-info' value="Send Feedback" />
                </form>
                <div className="modal-action">
                        <label htmlFor="update-modal" className="btn">Done!</label>
                    </div>
                    
                </div>
            </div>
        </div>

    );
};

export default FeedbackModal;