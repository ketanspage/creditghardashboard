import TitleCard from '../../../components/Cards/TitleCard';
import { useDispatch } from 'react-redux';
import { showNotification } from '../../common/headerSlice';
import DashboardTopBar from '../../../components/buttons/DashboardTopBar';
import Select from '../../../components/Input/Select';
import InputText from '../../../components/Input/InputText';
import Button from '../../../components/buttons/Button';
import React, { useState } from 'react';

function UserEngage() {
  const dispatch = useDispatch();

  const updateDashboardPeriod = (newRange) => {
    dispatch(showNotification({ message: `Period updated to ${newRange.startDate} to ${newRange.endDate}`, status: 1 }));
  };

  const [selectedOption, setSelectedOption] = useState('accountNumber');
  const [inputValue, setInputValue] = useState('');

  return (
    <TitleCard title={"User Profile"}>
      <div className="flex flex-wrap items-center justify-between">
        {/* Dropdown */}
        <div className="w-full sm:w-auto px-2 mt-2 sm:mt-0">
          <Select
            labelTitle={'Choose By Type*'}
            optionTitle={'Account Number'}
            options={[
              { value: 'accountNumber', label: 'Account Number' },
              { value: 'mobileNumber', label: 'Mobile Number' }
            ]}
            updateType="chooseByType"
            updateFormValue={(data) => {
              setSelectedOption(data.value);
            }}
          />
        </div>

        {/* Text Input */}
        <div className="w-full sm:w-auto px-2 mt-2 sm:mt-0">
          <InputText
            labelTitle={`Enter ${selectedOption === 'accountNumber' ? 'Account' : 'Mobile'} Number*`}
            containerStyle="" // Adjust this style as needed
            defaultValue={inputValue}
            placeholder={selectedOption === 'accountNumber' ? 'Account Number' : 'Mobile Number'}
            updateType="enterNumber"
            updateFormValue={({ value }) => {
              setInputValue(value);
            }}
          />
        </div>

        {/* Date range */}
        <div className="w-full sm:w-auto px-2 mt-3 sm:mt-0">
          <div style={{ marginTop: "30px" }}>
            <DashboardTopBar updateDashboardPeriod={updateDashboardPeriod} labelTitle={'Data range'} />
          </div>
        </div>

        {/* Find campaign */}
        <div className="w-full sm:w-auto px-2 mt-2 sm:mt-0">
          <Button title='Find Campaign' buttonClassName='float-right mt-[40px]'/>
        </div>
      </div>
    </TitleCard>
  );
}

export default UserEngage;
