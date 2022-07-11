import React, { useEffect } from 'react';
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init.js';
import logo from '../../images/logo/logo.png';
import LoadingComponent from '../../Shared/LoadingComponent.jsx';

const Register = () => {
  // variables and states
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [createUserWithEmailAndPassword, userForm, loadingForm, errorForm] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, errorProfileUpdate] = useUpdateProfile(auth);
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  // functions
  const onSubmit = async (data) => {
    console.log(data);
    try {
      await createUserWithEmailAndPassword(data.email, data.password);
      await updateProfile({ displayName: data.name });
    } catch (err) {
      console.log(err.message);
    }
  };

  console.log(user);

  // useEffect for finding user and navigate
  useEffect(() => {
    const userFound = user || userForm;
    if (userFound) {
      toast.success(`Welcome to chit-chat`);
      navigate('/');
    }
  }, [user, userForm, navigate]);

  // loading
  if (updating || loadingForm) {
    return <LoadingComponent />;
  }

  // error
  if (errorForm || errorProfileUpdate) {
    let error = errorForm || errorProfileUpdate;
    toast.error(error?.message);
  }
  return (
    <section>
      <div className="flex justify-center items-center min-h-screen bg-[#f7f7f7]">
        <div className="w-full">
          <div className="w-full md:w-1/2 lg:w-1/3 mx-auto shadow-lg p-5 md:p-10 rounded-xl">
            <div className="flex justify-center items-center">
              <img className="w-28 h-28" src={logo} alt="" />
            </div>
            <h2 className="text-2xl text-center my-2 font-bold text-primary">
              Register
            </h2>

            {/* login form  */}
            <form className="" onSubmit={handleSubmit(onSubmit)}>
              {/* name */}
              <div className="form-control w-full mb-5">
                <label className="">
                  <span className="text-primary font-semibold text-xl">
                    Name
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="input input-bordered w-full rounded-lg text-secondary font-medium tracking-wide focus:outline-none bg-gray-100"
                  {...register('name', {
                    required: {
                      value: true,
                      message: 'Name is required !!!',
                    },
                  })}
                />
                <label className="level font-bold">
                  {errors.name?.type === 'required' && (
                    <span className="label-text-alt text-red-500">
                      {errors.name.message}
                    </span>
                  )}
                </label>
              </div>

              {/* email  */}
              <div className="form-control w-full mb-5">
                <label className="">
                  <span className="text-primary font-semibold text-xl">
                    Email
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="example@email.com"
                  className="input input-bordered w-full rounded-lg text-secondary font-medium tracking-wide focus:outline-none bg-gray-100"
                  {...register('email', {
                    required: {
                      value: true,
                      message: 'Email Required !!!',
                    },
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                      message: 'Invalid Email Provided !!!',
                    },
                  })}
                />
                <label className="level font-bold">
                  {errors.email?.type === 'required' && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === 'pattern' && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>

              {/* password  */}
              <div className="form-control w-full">
                <label className="">
                  <span className="text-primary font-semibold text-xl">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  placeholder="abcd123$"
                  className="input input-bordered w-full rounded-lg text-secondary font-medium tracking-wide focus:outline-none bg-gray-100"
                  {...register('password', {
                    required: {
                      value: true,
                      message: 'Password Required !!!',
                    },
                    pattern: {
                      value: /(?=.*[!#$%&?^*@~() "])(?=.{8,})/,
                      message:
                        'Password Must be 8 char including a special char !!!',
                    },
                  })}
                />
                <label className="level font-bold">
                  {errors.password?.type === 'required' && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === 'pattern' && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                </label>
              </div>

              {/* submit form  */}
              <input
                className="btn btn-primary capitalize font-bold w-full mt-3 text-xl"
                type="submit"
                value="Register"
              />

              {/* login page link  */}
              <div className="inline-flex justify-center w-full">
                <Link
                  to="/login"
                  className="btn-link my-3 text-primary font-semibold text-xl"
                >
                  LogIn Now
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
