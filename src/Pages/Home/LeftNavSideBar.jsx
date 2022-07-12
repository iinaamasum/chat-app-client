import React from 'react';
import {
  BsCalendarCheckFill,
  BsFillChatDotsFill,
  BsStarFill,
} from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const LeftNavSideBar = () => {
  return (
    // left most sidebar to navigate
    <section className="w-36 bg-gray-200 min-h-screen">
      <div className="flex flex-col justify-center items-center w-full">
        <NavLink
          to="/chat"
          className="text-center w-14 h-14 flex justify-center items-center rounded-xl bg-primary my-6"
        >
          <BsFillChatDotsFill size={60} color="white" className="p-2" />
        </NavLink>
        <NavLink
          to="/chat"
          className="text-center w-14 h-14 flex justify-center items-center rounded-xl bg-primary mb-6"
        >
          <FaUser size={55} color="white" className="p-2" />
        </NavLink>
        <NavLink
          to="/chat"
          className="text-center w-14 h-14 flex justify-center items-center rounded-xl bg-primary mb-6"
        >
          <BsStarFill size={60} color="white" className="p-2" />
        </NavLink>
        <NavLink
          to="/chat"
          className="text-center w-14 h-14 flex justify-center items-center rounded-xl bg-primary mb-6"
        >
          <BsCalendarCheckFill size={60} color="white" className="p-2" />
        </NavLink>
      </div>
    </section>
  );
};

export default LeftNavSideBar;
