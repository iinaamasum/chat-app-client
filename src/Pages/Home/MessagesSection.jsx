import React from 'react';
import MessageBottomBar from './MessageBottomBar';
import Messages from './Messages';
import MessageTopBar from './MessageTopBar';

const MessagesSection = () => {
  return (
    <section className="">
      <MessageTopBar />
      <Messages />
      <MessageBottomBar />
    </section>
  );
};

export default MessagesSection;
