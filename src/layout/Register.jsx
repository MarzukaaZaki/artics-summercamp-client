import React, { useRef } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const Register = () => {
    const validationSchema = Yup.object().shape({
        password: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters'),
        confirmPassword: Yup.string()
            .required('Confirm Password is required')
            .oneOf([Yup.ref('password')], 'Passwords must match')
            
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    // get functions to build form with useForm() hook
    const { register, handleSubmit, reset, formState } = useForm(formOptions);
    const { errors } = formState;

    function onSubmit(data) {
        console.log(data);
    }

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold mb-5">Create an Account </h1>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-200 border border-t-0">
                    <div className="card-body">
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
                            <input type='password' placeholder='password' {...register("password")} className="input input-bordered" />
                            {/* errors will return when field validation fails  */}
                            {errors.password && <span className='text-red-500 text-sm'>{errors.password?.message}</span>}
                        </div>
                       
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" placeholder="confirm password" {...register("confirmPassword")} className="input input-bordered" />
                            {/* errors will return when field validation fails  */}
                            {errors.confirmPassword && <span className='text-red-500 text-sm'>{errors.confirmPassword?.message}</span>}
                            
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="file" placeholder="any image format" {...register("photo", {required: true})} accept='photo/*' className="input input-bordered" />
                            {/* errors will return when field validation fails  */}
                            
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