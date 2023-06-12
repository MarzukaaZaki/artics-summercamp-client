import React from 'react';
import { useForm } from "react-hook-form";

const Register = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold mb-5">Create an Account </h1>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-200 border border-t-0">
                    <div className="card-body" onSubmit={handleSubmit(onSubmit)}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type='text' placeholder='name' {...register("name", { required: true })} className="input input-bordered" />
                            {/* errors will return when field validation fails  */}
                            {errors.name && <span className='text-red-500 text-sm'>Name field is required!</span>}
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type='email' placeholder='email' {...register("email", { required: true })} className="input input-bordered" />
                            {/* errors will return when field validation fails  */}
                            {errors.email && <span className='text-red-500 text-sm'>Email field is required!</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" {...register("password", { required: true })} className="input input-bordered" />
                            {/* errors will return when field validation fails  */}
                            {errors.password && <span className='text-red-500 text-sm'>Password field is required!</span>}
                            
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" placeholder="confirm password" {...register("confirmPassword", { required: true }, {validate: (value) => value === watch('password')})} className="input input-bordered" />
                            {/* errors will return when field validation fails  */}
                            {errors.confirmPassword && <span className='text-red-500 text-sm'>Passwords must match!</span>}
                            
                        </div>
                      
                        <div className="form-control mt-6">
                            <input type="submit" className='btn text-white bg-cyan-700' value="Register" />
                        </div>
                        </form>
                        <div>
                        <p className='text-center text-sm mt-3 mb-1'>Or choose a social sign in</p>
                        <button className='btn btn-outline w-full'> Continue with Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;