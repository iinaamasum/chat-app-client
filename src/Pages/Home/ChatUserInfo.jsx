import React from 'react';
import { MdEmail, MdPhone } from 'react-icons/md';
import { Link } from 'react-router-dom';
import user from '../../images/logo/logo.png';

const ChatUserInfo = () => {
  return (
    <section className="p-4 shadow-xl rounded-xl">
      {/* user details  */}
      <div className="text-center flex justify-center items-center">
        <img className="w-16 h-16 rounded-full" src={user} alt="" />
      </div>
      <div className="text-center">
        <div className="">
          <h2 className="text-lg font-bold text-primary mt-2">User Name</h2>
          <h3 className="text-[13px] font-semibold text-gray-500 mt-1">
            User Designation
          </h3>
          <p className="text-[13px] font-medium text-gray-400 mt-1">
            Dhaka, Bangladesh
          </p>
        </div>
      </div>
      {/* user contact info  */}
      <div className="mt-5">
        <h2 className="text-primary font-bold text-[18px] tracking-wide">
          Contact Information
        </h2>
        <div className="divider m-0"></div>
        <div className="flex items-center font-medium">
          <p className="p-1 bg-gray-300 rounded-full mr-2">
            <MdEmail />
          </p>
          <p>iinaamasum@gmail.com</p>
        </div>
        <div className="flex items-center my-2 font-sans font-medium">
          <p className="p-1 bg-gray-300 rounded-full mr-2">
            <MdPhone />
          </p>
          <p>01864393548</p>
        </div>
      </div>

      {/* attachment section  */}
      <div className="mt-5">
        <div className="flex items-center justify-between">
          <h2 className="text-primary font-bold text-[18px] tracking-wide">
            Attachment
          </h2>
          <Link
            className="btn-link text-[12px] font-semibold text-blue-500"
            to="/all-attachment"
          >
            View All
          </Link>
        </div>
        <div className="divider m-0"></div>
        <div className="grid grid-cols-3 gap-5">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((image) => (
            <img className="rounded-sm" src={user} alt="" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChatUserInfo;
