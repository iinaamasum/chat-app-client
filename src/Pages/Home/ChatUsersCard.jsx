import React from 'react';
import user from '../../images/logo/logo.png';

const ChatUsersCard = () => {
  return (
    <section className="bg-gray-200 px-4 py-2">
      <div className="flex justify-between items-center">
        <img className="w-14 h-14 rounded-full" src={user} alt="" />
        <div className="ml-4">
          <h2 className="text-[15px] font-semibold">User Name</h2>
          <p className="text-[13px]">
            last message will be there with slice the message string
          </p>
        </div>
      </div>
    </section>
  );
};

export default ChatUsersCard;
