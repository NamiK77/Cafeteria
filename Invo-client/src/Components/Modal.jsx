import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate} from "react-router-dom";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { AuthContext } from '../contexts/AuthProvider';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const Modal = () => {
  // react hook form
  const { register, handleSubmit, formState: { errors } } = useForm();

  const { signUpWithGmail, login } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
//redirecting to home page or specific page
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";


 


  const onSubmit = async (data) => {
    const { email, password } = data;
    try {
      const result = await login(email, password);
      alert("Login Successful");
      document.getElementById("my_modal_5").close()

      navigate(from,{replace: true})
    } catch (error) {
      setErrorMessage("Provide a correct email and password!");
    }
  };

  // login with Google
  const handleLogin = async () => {
    try {
      const result = await signUpWithGmail();
      alert("Login successful!");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <div className="modal-action flex-col justify-center mt-0">
          <form className="card-body" method="dialog" onSubmit={handleSubmit(onSubmit)}>
            <h3 className="font-bold text-lg">Please Login!</h3>

            {/* email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                {...register("email", { required: true })}
              />
              {errors.email && <span className="text-red-500">Email is required</span>}
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
                {...register("password", { required: true })}
              />
              {errors.password && <span className="text-red-500">Password is required</span>}
              <label className="label mt-1">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>

            {/* error */}
            {errorMessage && (
              <p className="text-red-500 text-xs italic">
                {errorMessage}
              </p>
            )}

            {/* login btn */}
            <div className="form-control mt-4">
              <input
                type="submit"
                className="btn bg-green-500 text-white"
                value="Login"
              />
            </div>

            {/* close btn */}
            <div
              htmlFor="my_modal_5"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_5").close()}
            >
              ✕
            </div>

            <p className="text-center my-2">
              Don't have an account?
              <Link to="/signup" className="underline text-red-500 ml-1">
                Signup Now
              </Link>
            </p>
          </form>

          {/* social media */}
          <div className="text-center space-x-3 mb-5">
            <button
              onClick={handleLogin}
              className="btn btn-circle hover:bg-green-500 hover:text-white"
            >
              <FaGoogle />
            </button>
            <button className="btn btn-circle hover:bg-green-500 hover:text-white">
              <FaFacebookF />
            </button>
            <button className="btn btn-circle hover:bg-green-500 hover:text-white">
              <FaGithub />
            </button>
          </div>
        </div>
      </div>
    </dialog>
  )
}

export default Modal;
