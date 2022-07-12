import React from 'react';
import UsersFriendSentMessages from './UsersFriendSentMessages';
import UsersSentMessageCard from './UsersSentMessageCard';

const Messages = () => {
  return (
    <div className="overflow-x-auto h-[57vh]">
      <UsersFriendSentMessages />
      <UsersSentMessageCard />
    </div>
  );
};

export default Messages;
