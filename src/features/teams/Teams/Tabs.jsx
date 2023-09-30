import React, { useState } from 'react';
import UserChannels from '../components/multicard';
import PageStats from '../components/multicard2';
import TitleCard from '../../../components/Cards/TitleCard';
import jsondata from '../../../data.json';
function Tabs() {
  const [selectedTab, setSelectedTab] = useState('All');

  const renderSelectedComponent = () => {
    switch (selectedTab) {
      case 'All':
        return <UserChannels />;
      case 'Active':
        return <PageStats />;
      // Add more cases as needed
      default:
        return null;
    }
  };

  const{teams:{tabs}}=jsondata;
  return (
    <>
      <br />
      <div className='flex items-center justify-between'>
        <p className='text-blue-500 p-2 rounded-md'>{''}</p>
        <div className='flex mt-2'>
          <div className="tabs tabs-boxed border rounded-md overflow-hidden">
            {tabs.map((tabItem, index) => (
              <a
                key={tabItem.key}
                onClick={() => setSelectedTab(tabItem.key)}
                className={`tab ${selectedTab === tabItem.key ? 'tab-active' : ''}`}
              >
                {tabItem.title}
              </a>
            ))}
          </div>
        </div>
      </div>
      <br />
      
      <div className='flex mt-2 space-x-4'>{renderSelectedComponent()}</div>
      
    </>
  );
}

export default Tabs;
