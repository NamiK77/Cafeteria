// import React from 'react'
import { FaFacebookF, FaGithub, FaGoogle, FaRegUser } from "react-icons/fa";
import { useForm } from "react-hook-form";
import {Link,useLocation,useNavigate} from "react-router-dom";
import Modal from './Modal';
import { AuthContext } from '../contexts/AuthProvider';
import React, { useContext } from "react";

const Signup = () => {
    const {
        register,
        handleSubmit,
        
        formState: { errors },
      } = useForm();

      const {createUser, login} = useContext(AuthContext);
      //redirecting to home page or specific page
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

      const onSubmit = (data) => {
        const email = data.email;
        const password = data.password;
            // console.log(email, password)
        createUser(email, password)
    .then((result) => {
      const user = result.user;
      alert("Sign in sucessfull")
      document.getElementById("my_modal_5").close()
      navigate(from,{replace: true})
    })
    .catch((error) =>{
      const errorCode = error.code;
      const errorMessage = error.message;
    })

};

// // login with google
// const handleRegister = () => {
//   signUpWithGmail().then(result =>{
//     console.log(result.user);
//     const userInfo = {
//         email: result.user?.email,
//         name: result.user?.displayName
//     }
//     axiosPublic.post('/users', userInfo)
//     .then(res =>{
//         console.log(res.data);
//         navigate('/');
//     })
// })



//       }

  return (
    <div className="max-w-md bg-white shadow w-full mx-auto flex items-center justify-center my-20">
      <div className="mb-5">
        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
          <h3 className="font-bold text-lg">Please Create An Account!</h3>
          {/* name */}
          {/* <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="name"
              placeholder="Your name"
              className="input input-bordered"
              {...register("name")}
            />
          </div> */}

          {/* email */}
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

          {/* password */}
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
            <label className="label">
              <a href="#" className="label-text-alt link link-hover mt-2">
                Forgot password?
              </a>
            </label>
          </div>

          {/* error message */}
          <p>{errors.message}</p>

          {/* submit btn */}
          <div className="form-control mt-6">
            <input
              type="submit"
              className="btn bg-green text-white"
              value="Sign up"
            />
          </div>

          <div className="text-center my-2">
            Have an account?{""}
            <button className='underline text-red ml-1'
            onClick={() => document.getElementById("my_modal_5").showModal()}
            
            >
                login
            </button>{""}
            {/* <Link to="/login">
              <button className="ml-2 underline">Login here</button>
            </Link> */}
          </div>

          
            {/* close btn */}
            <Link
            to="/"
              
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              
            >
              ✕
            </Link>


          
        </form>


        <div className="text-center space-x-3">
          <button
            // onClick={handleRegister}
            className="btn btn-circle hover:bg-green hover:text-white"
          >
            <FaGoogle />
          </button>
          <button className="btn btn-circle hover:bg-green hover:text-white">
            <FaFacebookF />
          </button>
          <button className="btn btn-circle hover:bg-green hover:text-white">
            <FaGithub />
          </button>
        </div>
      </div>
      <Modal/>
      
    </div>
  )
}

export default Signup
