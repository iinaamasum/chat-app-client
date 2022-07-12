import React from 'react';
import { IoMdNotificationsOutline } from 'react-icons/io';
import user from '../../images/logo/logo.png';

const TopBar = () => {
  return (
    <section className="h-20 flex justify-between items-center px-10 bg-gray-100">
      <h2 className="text-4xl font-medium text-center text-primary py-5">
        Messages
      </h2>
      <div className="flex items-center">
        <IoMdNotificationsOutline size={30} className="mr-4" />
        <img className="w-12 h-12 rounded-xl" src={user} alt="" />
      </div>
    </section>
  );
};

export default TopBar;
