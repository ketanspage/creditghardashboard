import React, { useState } from 'react';
import SmsTable from './components/smstable';
import EmailTable from './components/emailtable';
import Button from '../../components/buttons/Button';
function Campaign() {
  const [selectedTab, setSelectedTab] = useState('SMS');

  const renderSelectedComponent = () => {
    switch (selectedTab) {
      case 'SMS':
        return <SmsTable />;
      case 'Email':
        return <EmailTable />;
      // Add more cases as needed
      default:
        return null;
    }
  };

  const tabItems = [
    { title: 'SMS', value: '394', key: 'SMS' },
    { title: 'Email', value: '114', key: 'Email' },
    { title: 'IVR', value: '11', key: 'Ivr' },
    { title: 'Channels', value: '', key: '' },
    { title: 'Templates', key: 'Templates' },
    { title: 'Content', key: 'ContentLibrary' },
    { title: 'Reports', key: 'Reports' },
    { title: 'Settings', key: 'Settings' },
  ];
  const buttons=[
    {title:'Tap mapping',key:'Tapmapping'},
    {title:'Create Template',key:'CreateTemplate'},
  ]

  return (
    <>
      <br />
      {
        buttons.map((button)=>(
          <Button title={button.title} buttonClassName={'float-right mr-2'}/>
        ))
      }
      <br />
      <br/>
      <div className='flex mt-2 space-x-4 overflow-x-auto'>
        <div className='flex flex-row'>
          {tabItems.map((tabItem) => (
            <a
              key={tabItem.key}
              onClick={() => setSelectedTab(tabItem.key)}
              className={`relative tab tab-boxed ${
                selectedTab === tabItem.key
                  ? 'tab-active bg-white text-lg text-blue-500 px-6 mr-3 py-4 h-[50px] !rounded-t-lg'
                  : 'bg-blue-500 text-white text-lg px-6 py-3 mr-3 h-[50px] rounded-t-lg'
              }`}
            >
              {tabItem.title}
              {selectedTab === tabItem.key && (
                <div className='absolute inset-y-0 left-0 bg-blue-500 w-1 rounded-tl-lg'></div>
              )}
            </a>
          ))}
        </div>
      </div>
      <div className='flex mt-[-7px] space-x-4 overflow-x-auto'>
        {renderSelectedComponent()}
      </div>
    </>
  );
}

export default Campaign;