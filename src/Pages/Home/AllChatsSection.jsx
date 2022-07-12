import React from 'react';
import { AiFillSetting } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import { FiUser, FiUsers } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import ChatUsersCard from './ChatUsersCard';

const AllChatsSection = () => {
  return (
    <section className="min-h-screen max-h-screen">
      <div className="">
        <div className="shadow-2xl rounded-lg">
          <div className="px-4 pt-4">
            {/* search section  */}
            <div className="relative">
              <BsSearch className="absolute left-4 top-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search People"
                className="input input-bordered w-full rounded-lg text-secondary font-medium tracking-wide focus:outline-none border-0 bg-gray-200 pl-10"
              />
            </div>

            {/* friend and groups navigation  */}
            <div className="flex items-center justify-between mt-3">
              <NavLink
                to="/chat"
                className="text-center w-12 h-12 flex justify-center items-center rounded-xl bg-error"
              >
                <FiUser size={40} color="white" className="p-2" />
              </NavLink>
              <NavLink
                to="/chat"
                className="text-center w-12 h-12 flex justify-center items-center rounded-xl bg-error"
              >
                <FiUsers size={40} color="white" className="p-2" />
              </NavLink>
              <NavLink
                to="/chat"
                className="text-center w-12 h-12 flex justify-center items-center rounded-xl bg-error"
              >
                <AiFillSetting size={40} color="white" className="p-2" />
              </NavLink>
            </div>
          </div>
          {/* chat users collection  */}
          <div className="mt-5">
            {[1, 2, 3, 4, 5, 6].map((chat_head, i) => (
              <ChatUsersCard key={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllChatsSection;
