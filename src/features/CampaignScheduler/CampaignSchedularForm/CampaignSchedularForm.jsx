import React, { useState } from "react";
import TitleCard from "../../../components/Cards/TitleCard";
import ScheduleForm from "./ScheduleForm";
import jsondata from "../../../data.json";
import { Component } from "react";
import { ComponentType } from "../../../constants";

function Form() {
  const [activeTab, setActiveTab] = useState(1);
  const {
    campaignSchedularForm: { tabs },
  } = jsondata;
  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };
  /*
  const tabs = [
    {
      id: 1,
      title: 'Schedule now'
    },
    {
      id: 2,
      title: 'Schedule later'
    }
  ];*/

  return (
    <TitleCard title={"User Digital Engagement By Date & Time"}>
      <div className="tabs !rounded-b-none ">
        {tabs.map((tab) => (
          <a
            key={tab.id}
            className={`tab tab-lifted ${
              activeTab === tab.id
                ? "tab-active !bg-slate-200 before:!left-0 after:!right-0 before:!bg-none after:!bg-none"
                : ""
            }`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.title}
          </a>
        ))}
        <span class="grow border-b border-base-300"></span>
      </div>
      <div className="p-4 border border-t-0 rounded-b-lg bg-slate-200 w-full ">
        {activeTab === 1 && (
          <div className="border  p-2">
            <ScheduleForm compenentType={ComponentType.SCHEDULE_NOW} />{" "}
          </div>
        )}
        {activeTab === 2 && (
          <div className="border  p-2">
            <ScheduleForm compenentType={ComponentType.SCHEDULE_LATER} />{" "}
          </div>
        )}
      </div>
    </TitleCard>
  );
}

export default Form;
