import React from "react";
import InputText from "../../../components/Input/InputText";
import jsonData from "../../../data.json";

const JourneyBuilderForm = () => {
  const {
    journeyBuilderForm: { title, formInputTextData },
  } = jsonData;

  
  return (
    <div>
      <form className="flex flex-col bg-white shadow-md p-4 ">
        <div className="mb-4">
          <p>{title}</p>
          <br />
          {formInputTextData.map((item, index) => (
            <InputText
              key={item.id}
              type={item.type}
              defaultValue={item.defaultValue}
              updateType={item.name}
              containerStyle="mt-4"
              labelTitle={item.label}
              updateFormValue={() => {}}
              placeholder={item.placeholder}
            />
          ))}
        </div>
      </form>
    </div>
  );
};

export default JourneyBuilderForm;
