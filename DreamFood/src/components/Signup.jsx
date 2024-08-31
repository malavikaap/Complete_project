import React from 'react'
import { Link } from 'react-router-dom'
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useForm } from "react-hook-form"
import Modal from './Modal';

const Signup = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data)
  return (
    <div className="max-w-md bg-primaryBG shadow w-full mx-auto flex items-center justify-center my-20">
            <div className="modal-action flex flex-col justify-center mt-0">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body" method='dialog'>
                <h3 className='font-bold text-lg'>Create an Account</h3>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>

                    <input 
                                type="email" 
                                placeholder="email" 
                                className="input input-bordered"
                                {...register("email")} 
                            />

                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input 
                                type="password" 
                                placeholder="password" 
                                className="input input-bordered"
                                {...register("password")} 
                            />
                    <label className="label mt-1">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <input type='submit' className="btn bg-green" value='Signup'/>
                </div>

                <p className='text-center my-2'>Have an account?
                    <button className='underline text-red ml-1'
                        onClick={()=>document.getElementById('my_modal_5').showModal()}
                    > Login </button>
                </p>

                <Link to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕
                </Link>

                </form>
                <div className='text-center space-x-3 mb-5'>
                    <button className="btn btn-circle hover:bg-green hover:text-primaryBG">
                        <FaGoogle />
                    </button>
                    <button className="btn btn-circle hover:bg-green hover:text-primaryBG">
                        <FaFacebookF /> 
                    </button>
                    <button className="btn btn-circle hover:bg-green hover:text-primaryBG">
                        <FaGithub /> 
                    </button>
                </div>

            </div>
            <Modal/>
        </div>
  )
}

export default Signup