import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../contexts/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const UpdateProfile = () => {
    const {updateUserProfile} = useContext(AuthContext)
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()

      const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

      const onSubmit = (data) => {
        const name = data.name;
        const photoURL = data.photoURL;

        updateUserProfile(name, photoURL).then(() => {
            // Profile updated!
            navigate(from,{replace: true})
            alert("Profile updated successfully")
          }).catch((error) => {
            // An error occurred
            // ...
          });

      }


  return (
   <div className='flex items-center justify-center h-screen'>
     <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
    <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
        <h3 className='font-bold'>Update Your Profile</h3>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input type="text" {...register("name")} placeholder="Your name" className="input input-bordered" required />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Upload Pic</span>
        </label>
        <input type="text"{...register("PhotoURL")} placeholder="photoUrl" className="input input-bordered" required />


        {/* Uploading image task  */}
        {/* <input
  type="file"
  className="file-input file-input-bordered file-input-warning w-full max-w-xs" /> */}

      </div>
      <div className="form-control mt-6">
          <input type='submit' value={"Update"} className="btn bg-green text-white"/>
        </div>
    </form>
  </div>
   </div>
  )
}

export default UpdateProfile
