import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import toast from 'react-hot-toast';


const Login = () => {
    const {googleLogIn, logOut, user} = useContext(AuthContext);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);


    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const navigate = useNavigate();
    
    const handleGoogleLogIn = () =>{
        setSuccess('');
        googleLogIn()
        .then(result =>{const user = result.user;
            setSuccess('Successfully logged in with Google');
            toast.success('success');
            setError('');
            navigate('/');
        })
        .catch(error =>{
            setError(error.message);
            toast.error(error);

        })
    

    }
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold mb-5">Log In</h1>

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
                        <button className='btn btn-outline w-full' onClick={handleGoogleLogIn}> Continue with Google</button>
                        <div>
                        <Link to='/register' className='text-sm font-bold mt-3 mb-1'>Or create an account.</Link>
                        
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;