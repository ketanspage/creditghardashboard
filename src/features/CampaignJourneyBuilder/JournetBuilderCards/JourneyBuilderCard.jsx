import React from "react";
import InputText from "../../../components/Input/InputText";
import jsonData from "../../../data.json";
import CustomCard from "../../../components/Cards/CustomCard";

const JourneyBuilderCard = () => {
  const {
    JourneyBuilderCard: { cards },
  } = jsonData;

  return (
    <div className="w-full pl-8">
      <ul className="steps steps-vertical w-[497px]">
        {cards.map((step, index) => (
          <li
            key={index}
            className={`step ${
              index < 4
                ? " step-primary before:mt-[-264px] after:mt-[-264px]"
                : ""
            } `}
          >
            <div className="flex flex-col mt-[-20]">
              {/* Card between each step*/}
              {index < cards.length - 1 && (
                <div className="mt-20">
                  <CustomCard
                    title={step.title}
                    
                    children={
                      
                      <InputText
                          key={step.id}
                          type="date"
                          className="btn bg-white"
                        />
                    }
                  />
                </div>
              )}
              {index < cards.length - 1 && (
                <div className=" mt-4">
                  <CustomCard title={step.content}
                    children={<div className="flex flex-row space-x-4">
                      {Array.from({ length: 2 }).map((_, i) => (
                        <InputText
                          key={`${step.id}-time-${i}`}
                          type="time"
                          className="btn bg-white"
                        />
                      ))}
                    </div> }/>
                  
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JourneyBuilderCard;
