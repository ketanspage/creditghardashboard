import React, { useState } from "react";
import UserChannels from "./components/smstable";
import PageStats from "./components/emailtable";
import InputText from "../../components/Input/InputText";
import Button from "../../components/buttons/Button";
import Select from "../../components/Input/Select";
import Datepicker from "react-tailwindcss-datepicker";
import FilterButton from "../../components/buttons/FilterButton";
import jsondata from '../../data.json';

function BankData() {
  const [isFilterDropdownVisible, setIsFilterDropdownVisible] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedTab, setSelectedTab] = useState("SMS");
  const [textInput1, setTextInput1] = useState("");
  const [textInput2, setTextInput2] = useState("");

  const renderSelectedComponent = () => {
    switch (selectedTab) {
      case "SMS":
        return <UserChannels />;
      case "Email":
        return <PageStats />;
      default:
        return null;
    }
  };

  const { bankData: { tabItems } } = jsondata;

  return (
    <>
      <br />
      <div className="flex items-center justify-between">
        <div className="flex flex-row space-x-2 ml-auto items-end">
          <InputText
            type="text"
            value={textInput1}
            onChange={(e) => setTextInput1(e.target.value)}
            placeholder="Input 1"
            className="border  rounded"
          />
          <InputText
            type="text"
            value={textInput2}
            onChange={(e) => setTextInput2(e.target.value)}
            placeholder="Input 2"
            className="border p-2 rounded"
          />
          <Button title={"Create Segment"} buttonClassName={"p-4 "} />
        </div>
      </div>
      <br />
      <div className="flex flex-row mt-auto space-x-4">
        <div className="flex flex-row items-end">
          {tabItems.map((tabItem) => (
            <a
              key={tabItem.key}
              onClick={() => setSelectedTab(tabItem.key)}
              className={`relative tab tab-boxed ${
                selectedTab === tabItem.key
                  ? "tab-active bg-white text-lg text-blue-500 px-6 mr-3 py-4 h-[50px] !rounded-t-lg"
                  : "bg-blue-500 text-white text-lg px-6 py-3 mr-3 h-[50px] rounded-t-lg"
              }`}
            >
              {tabItem.title}
              {selectedTab === tabItem.key && (
                <div className="absolute inset-y-0 left-0 bg-blue-500 w-1 rounded-tl-lg"></div>
              )}
            </a>
          ))}
        </div>
        <div className=" flex flex-row items-end justify-between ">
          <div className="hidden lg:block mr-2">
            <Datepicker
              value={{
                startDate: null,
                endDate: null,
              }}
              containerClassName="relative w-72"
              inputClassName="input input-bordered w-full"
              onChange={() => {}}
              showShortcuts={true}
            />
          </div>

          {/* Show FilterButton only on small screens */}
          <div className="lg:hidden relative">
            <FilterButton
              buttonName="filter"
              className={`${
                selectedStatus ? "filter-active" : ""
              }`}
              handleClick={() =>
                setIsFilterDropdownVisible(!isFilterDropdownVisible)
              }
            />
            {isFilterDropdownVisible && (
              <div className="absolute right-0 top-10 bg-white mt-2 p-4 w-80 max-w-lg rounded-lg shadow-lg z-10">
                
                <div className="mb-4">
                  <p className="text-lg font-semibold mb-2">Date range</p>
                  <Datepicker
              value={{
                startDate: null,
                endDate: null,
              }}
              containerClassName="relative w-58"
              inputClassName="input input-bordered w-full"
              onChange={() => {}}
              showShortcuts={true}
            />
                </div>
                <div className="mb-4">
                  <p className="text-lg font-semibold mb-2">Select status</p>
                  <Select
                    optionTitle={"Select Status"}
                    containerStyle={"w-full"}
                    value={selectedStatus}
                    onChange={(value) =>
                      setSelectedStatus(value)
                    }
                  />
                </div>
                {/* Include additional filter options content here */}
              </div>
            )}
          </div>
          <div className="hidden lg:block">
            <Select optionTitle={"Select Status"} containerStyle={"ml-auto"} />
          </div>
        </div>
      </div>
      <div className="flex space-x-4 relative z-0">
        {renderSelectedComponent()}
      </div>
    </>
  );
}

export default BankData;
