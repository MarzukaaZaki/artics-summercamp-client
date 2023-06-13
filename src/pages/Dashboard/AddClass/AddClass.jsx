import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../../providers/AuthProvider';


const AddClass = () => {
    const { user } = useContext(AuthContext);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <>
            <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Add a Class</h1>

            </div>
            <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                <form className="card-body grid grid-cols-2 gap-8" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Instructor Email</span>
                            </label>
                            <input type="email" className="input input-bordered" {...register("instructorEmail", { required: true})} defaultValue={user?.email} disabled />
                            {errors.instructorEmail && <span className='text-red-500 text-xs'>This field is required!</span>}
                        </div>



                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Instructor Name</span>
                            </label>
                            <input type="text" className="input input-bordered" {...register("instructorName",{ required: true})} defaultValue={user?.displayName} disabled  />
                            {errors.instructorName && <span className='text-red-500 text-xs'>This field is required!</span>}
                        </div>



                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name of Class</span>
                            </label>
                            <input type="text" placeholder="name of class" className="input input-bordered" {...register("nameOfClass", { required: true})} />
                            {errors.nameOfClass && <span className='text-red-500 text-xs'>This field is required!</span>}
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="number" placeholder="price" className="input input-bordered" {...register("price", { required: true})} />
                            {errors.price && <span className='text-red-500 text-xs'>This field is required!</span>}
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Available Seats</span>
                            </label>
                            <input type="number" placeholder="seats" className="input input-bordered" {...register("seats", { required: true})} />
                            {errors.seats && <span className='text-red-500 text-xs'>This field is required!</span>}
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Status</span>
                            </label>
                            <input type="text" placeholder="status" className="input input-bordered" {...register("status", { required: true})} />
                            {errors.status && <span className='text-red-500 text-xs'>This field is required!</span>}
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Set a Photo</span>
                            </label>
                            <input type="url" placeholder="photo" className="input input-bordered" {...register("photo", { required: true})} />
                            {errors.photo && <span className='text-red-500 text-xs'>This field is required!</span>}
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea  placeholder="description" className="input input-bordered" {...register("description")} />
                            
                        </div>






                  





                    <div className="form-control mt-6 text-center">
                        <button className="btn btn-secondary">Add This Class</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default AddClass;