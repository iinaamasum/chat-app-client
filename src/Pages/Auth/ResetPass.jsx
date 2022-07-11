import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import logo from '../../images/logo/logo.png';

const ResetPass = () => {
  // variables and states
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // functions
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <section>
      <div className="flex justify-center items-center min-h-screen bg-[#f7f7f7]">
        <div className="w-full">
          <div className="w-full md:w-1/2 lg:w-1/3 mx-auto shadow-lg p-5 md:p-10 rounded-xl">
            <div className="flex justify-center items-center">
              <img className="w-28 h-28" src={logo} alt="" />
            </div>
            <h2 className="text-2xl text-center my-2 font-bold text-primary">
              Reset PassWord
            </h2>

            {/* reset pass form  */}
            <form className="" onSubmit={handleSubmit(onSubmit)}>
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

              <input
                className="btn btn-primary capitalize font-bold w-full text-xl"
                type="submit"
                value="Sent Reset Email"
              />
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

export default ResetPass;
