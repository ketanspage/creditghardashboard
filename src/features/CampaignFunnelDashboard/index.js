import React, { useState } from 'react';
import Table from './table';
import { useDispatch } from 'react-redux';
import { showNotification } from '../common/headerSlice';
import DashboardTopBar from '../../components/buttons/DashboardTopBar';
import Select from "../../components/Input/Select";
import jsonData from "../../data.json";

const { campaignFunnelDashboard: { selectButton } } = jsonData;


function Campaign() {
  const dispatch = useDispatch();
  const updateDashboardPeriod = (newRange) => {
    dispatch(
      showNotification({
        message: `Period updated to ${newRange.startDate} to ${newRange.endDate}`,
        status: 1,
        
      })
    );
  };

  return (
    <>
      <br />
      <div className='flex items-center justify-between'>
        <p className='text-blue-500 p-2 rounded-md'>{''}</p>
        <div className='flex flex-wrap space-x-4 items-center'>
          <div className='my-4'>
            <DashboardTopBar updateDashboardPeriod={updateDashboardPeriod} />
          </div>
          {selectButton.map((button, index) => (
            <div className='my-4' key={index}>
              <Select optionTitle={button.title} containerStyle={'w-full md:w-auto mt-[-20px]'} />
            </div>
          ))}
        </div>
      </div>
      <br />
      <div className='flex mt-4 space-x-4'><Table/></div>
    </>
  );
}

export default Campaign;
