import React, { useState } from "react";
import TitleCard from "../../../components/Cards/TitleCard";
import { AiOutlineMail, AiOutlineMessage } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
import InputText from "../../../components/Input/InputText";
import CustomCard from "../../../components/Cards/CustomCard";
import jsondata from "../../../data.json";

function UserEngage() {
  const { CampaignSchedulerCard } = jsondata;

  const iconClass = `rounded-full p-2 bg-blue-500 text-white h-[50px] w-[50px]`;

  // Use a separate state for managing time values
  const [time, setTime] = useState([{ start: "" }, { start: "" }]);
  const icons = [
    { icon: <AiOutlineMail className={iconClass}/>, label:"Email" },
    { icon: <AiOutlineMessage className={iconClass}/> ,label:"Message" },
    { icon: <FiPhoneCall className={iconClass}/>, label:"call"  },
    { icon: <BsWhatsapp className={iconClass}/>, label:"whatsapp" },
  ];
  const handleStartTimeChange = (index, value) => {
    const updatedTime = [...time];
    updatedTime[index].start = value;
    setTime(updatedTime);
  };

  return (
    <TitleCard title={"User Digital Engagement By Date & Time"}>
      <div className="flex flex-col justify-between">
        <div className="mb-4">
          <div className="flex flex-row justify-evenly">
            {icons.map((icon, index) => (
              <div key={index} className="flex flex-col items-center"> 
                {icon.icon}
                <p className="text-sm font-semibold">{icon.label}</p>
              </div>  
            ))}
          </div>
        </div>

        <div className=" mt-4">
                  {CampaignSchedulerCard.map((step, index) => (
                    <CustomCard title={step.title}
                    children={<div className="flex flex-row space-x-4 w-full">
                      {Array.from({ length: 2 }).map((_, i) => (
                        <InputText
                          key={`${step.id}-time-${i}`}
                          type="time"
                          className="btn bg-white w-full"
                        />
                      ))}
                    </div> }/>))
}
                </div>
        <div className="flex flex-row w-full justify-between mt-12">
          <button className="btn bg-blue-500 text-white rounded">save</button>
          <button className="btn bg-blue-500 text-white rounded">
            preview
          </button>
        </div>
      </div>
    </TitleCard>
  );
}

export default UserEngage;
