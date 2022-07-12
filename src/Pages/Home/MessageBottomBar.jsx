import React from 'react';
import { BiSend } from 'react-icons/bi';
import { GrAttachment } from 'react-icons/gr';

const MessageBottomBar = () => {
  return (
    <section className="relative bottom-0">
      <div className="rounded-lg m-6">
        <textarea
          placeholder="Search People"
          className="input-bordered w-full text-secondary font-medium tracking-wide focus:outline-none border-0 bg-gray-200 pt-2 pl-4 rounded-lg resize-none"
          name="message"
          id=""
          cols="30"
          rows="3"
        ></textarea>
        <div className="flex items-center justify-end">
          <GrAttachment className="mr-3" size={23} />
          <BiSend size={23} className="mr-3" />
        </div>
      </div>
    </section>
  );
};

export default MessageBottomBar;
