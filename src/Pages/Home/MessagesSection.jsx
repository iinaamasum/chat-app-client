import React from 'react';
import MessageBottomBar from './MessageBottomBar';
import MessageTopBar from './MessageTopBar';

const MessagesSection = () => {
  return (
    <section className="">
      <MessageTopBar />
      <MessageBottomBar />
    </section>
  );
};

export default MessagesSection;
