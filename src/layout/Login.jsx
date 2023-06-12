import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import toast from 'react-hot-toast';
import { FcGoogle} from 'react-icons/fc'
import { saveUser } from '../api/auth';

const Login = () => {
    const {googleLogIn, logIn, loading} = useContext(AuthContext);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    
    
    // Get location from where the user has been redirected to login page
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const navigate = useNavigate();
    
    const onSubmit = data => {
        const email = data.email;
        const password = data.password;

        logIn(email, password)
        .then(result => {
            const loggedInUser = result.user;
            toast.success('Successfully logged in!')
            reset();
            navigate(from);
        })
        .catch(error => { toast.error(error.message); })


    }



  
    
    const handleGoogleLogIn = () =>{
        
        googleLogIn()
        .then(result =>{const user = result.user;
            toast.success('Successfully logged in with Google');
            // Save to db
            saveUser(result.user);
            navigate('/');
            
        })
        .catch(error =>{
            toast.error(error.message);
            console.log(error);

        })
    

    }
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold mb-5">Log In to your Account</h1>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-200 border border-t-0">
                    <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        
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
                       
                        
                      
                        <div className="form-control mt-6">
                            <input type="submit" className='btn text-white bg-cyan-700' value="Register" />
                        </div>
                        </form>
                        <div>
                        <p className='text-center text-sm mt-3 mb-1'>Or choose a social sign in</p>
                        <button className='btn btn-outline w-full' onClick={handleGoogleLogIn}> Continue with Google <FcGoogle></FcGoogle></button>
                        <div>
                        <Link to='/register' className='text-sm text-center font-semibold mt-3 mb-1'>Create an account.</Link>
                        
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;