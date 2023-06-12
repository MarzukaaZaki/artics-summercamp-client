import React, { useContext, useRef } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { toast } from 'react-hot-toast';
import { ImSpinner2} from 'react-icons/im'

const Register = () => {

    const { createUser, updateUserProfile, loading, setLoading } = useContext(AuthContext);
    const validationSchema = Yup.object().shape({
        password: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters')
            .matches(/^(?=.*[A-Z])/, 'Password must contain at least one uppercase letter'),
        confirmPassword: Yup.string()
            .required('Confirm Password is required')
            .oneOf([Yup.ref('password')], 'Passwords must match')

    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    // get functions to build form with useForm() hook
    const { register, handleSubmit, reset, formState } = useForm(formOptions);
    const { errors } = formState;

    function onSubmit(data) {

        setLoading(false);

        const name = data.name;
        const email = data.email;
        const password = data.password;

        // Image upload
        const photo = data.photo[0];
        console.log(data);
        console.log(photo);

        // Add to form data
        const formData = new FormData();
        formData.append('image', photo);
        console.log(formData);

        const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_apiKey}`;
        console.log(url);


        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(photoData => {
                const photoURL = photoData.data.display_url;
                createUser(email, password)
                    .then(result => {
                        updateUserProfile(name, photoURL)
                            .then(() => {
                                toast.success('Signup successful')
                            })
                            .catch(err => {
                                setLoading(false)
                                console.log(err.message)
                                toast.error(err.message)
                            })

                        reset();
                    })
                    .catch(error => {
                        setLoading(false);
                        toast.error(error.message);
                    })

            })
            .catch(error => console.log(error.message));



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

                                <input type="file" placeholder="any image format" {...register("photo", { required: true })} accept='photo/*' className="input input-bordered" />

                                {/* errors will return when field validation fails  */}

                            </div>

                            <div className="form-control mt-6">
                              <button type="submit" className='btn text-white bg-cyan-700'>
                              {  loading ? (<ImSpinner2/>): ("Register")}
                              </button>
                            </div>
                        </form>
                        <div>
                            <Link to='/login' className='text-sm mt-3 mb-1 font-bold'>Or Log In to your account.</Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;