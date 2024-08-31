import React from 'react'
import { Link } from 'react-router-dom'
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useForm } from "react-hook-form"


const Modal = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data)
  return (
    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
            <div className="modal-action flex flex-col justify-center mt-0">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body" method='dialog'>
                <h3 className='font-bold text-lg'>Login Here</h3>
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
                    <input type='submit' className="btn bg-green" value='Login'/>
                </div>

                <p className='text-center my-2'>Do not have an account?<Link to='/signup' className='underline text-red ml-1'> Sign Up now! </Link>  </p>
                <button
                htmlFor="my_modal_5"
                onClick={()=> document.getElementById("my_modal_5").close()}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕
                </button>
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
        </div>
    </dialog>
  )
}

export default Modal