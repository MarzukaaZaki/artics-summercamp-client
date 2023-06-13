import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../../providers/AuthProvider';
import { toast } from 'react-hot-toast';


const AddClass = () => {
    const { user } = useContext(AuthContext);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();


    const onSubmit = data => {
        // const instructorEmail = data.instructorEmail;
        // const instructorName = data.instructorName;
        // const name = data.nameOfClass;
        // const photo = data.photo;
        // const price = data.price;
        // const seats = data.seats; 
        // const status = data.status;
        // const description = data.description;

        fetch('http://localhost:5000/classes',{
            method:'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res =>res.json())
        .then(result =>{
            console.log(result);
            if(result.insertedId){
                toast.success('Data inserted successfully.');
            }
        })
        
    }
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
                            <input type="email" className="input input-bordered" {...register("instructorEmail")} defaultValue={user?.email} />
                            {errors.instructorEmail && <span className='text-red-500 text-xs'>This field is required!</span>}
                        </div>



                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Instructor Name</span>
                            </label>
                            <input type="text" className="input input-bordered" {...register("instructorName")} defaultValue={user?.displayName}  />
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






                  





                    <div className="form-control mt-6">
                        <button className="btn btn-secondary">Add This Class</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default AddClass;