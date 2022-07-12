import React from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';

const MessageTopBar = () => {
  return (
    <section className="shadow-xl p-4 mx-5 rounded-2xl">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div class="avatar">
            <div class="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="https://placeimg.com/192/192/people" />
            </div>
          </div>
          <div className="ml-6">
            <h2 className="text-sm font-semibold">Chat user Name</h2>
            <p className="text-xs text-green-500">Active</p>
          </div>
        </div>
        <BsThreeDotsVertical size={20} />
      </div>
    </section>
  );
};

export default MessageTopBar;
