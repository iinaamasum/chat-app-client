import React from 'react';
import { BsThreeDots } from 'react-icons/bs';
import userFriend from '../../images/logo/logo.png';

const UsersFriendSentMessages = () => {
  return (
    <section className="p-4 w-full">
      <div className="flex items-end w-full">
        <img className="w-5 h-5 rounded-full" src={userFriend} alt="" />
        <p className="bg-gray-200 rounded-xl max-w-[70%] p-2 text-sm ml-2">
          message - Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Excepturi distinctio placeat rem quia laboriosam officiis nemo quos
          quaerat delectus deleniti.
        </p>
        <BsThreeDots className="ml-3" />
      </div>
      <p className="w-20 font-sans text-[13px] font-medium text-gray-400 ml-8">
        9:20 PM
      </p>
    </section>
  );
};

export default UsersFriendSentMessages;
