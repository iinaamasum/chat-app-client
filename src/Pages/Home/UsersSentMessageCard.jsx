import React from 'react';
import { BsThreeDots } from 'react-icons/bs';
import userFriend from '../../images/logo/logo.png';

const UsersSentMessageCard = () => {
  return (
    <section className="p-4 w-full">
      <div className="flex justify-end items-end w-full">
        <BsThreeDots className="mr-3" />
        <p className="bg-red-400 text-white rounded-xl max-w-[70%] p-2 text-sm mr-2">
          message - Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Excepturi distinctio placeat rem quia laboriosam officiis nemo quos
          quaerat delectus deleniti.
        </p>
        <img className="w-5 h-5 rounded-full" src={userFriend} alt="" />
      </div>
      <div className="flex w-full justify-end">
        <p className="w-20 font-sans text-[13px] font-medium text-gray-400 mr-2">
          9:20 PM
        </p>
      </div>
    </section>
  );
};

export default UsersSentMessageCard;
