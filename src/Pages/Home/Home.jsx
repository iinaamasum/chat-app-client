import React from 'react';
import AllChatsSection from './AllChatsSection';
import ChatUserInfo from './ChatUserInfo';
import LeftNavSideBar from './LeftNavSideBar';
import MessagesSection from './MessagesSection';
import TopBar from './TopBar';

const Home = () => {
  return (
    <div className="flex bg-[#f7f7f7]">
      {/* left most side bar */}
      <LeftNavSideBar />
      <div className="w-full">
        <TopBar />
        <div className="flex items-center justify-center w-full">
          <div className="w-[23%]">
            <AllChatsSection />
          </div>
          <div className="w-[54%]">
            <MessagesSection />
          </div>
          <div className="w-[23%]">
            <ChatUserInfo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
