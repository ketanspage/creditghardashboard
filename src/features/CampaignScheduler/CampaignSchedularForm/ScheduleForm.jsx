import React, { useState } from "react";
import InputText from "../../../components/Input/InputText";
import jsonData from "../../../data.json";
import Select from "../../../components/Input/Select";
import { ComponentType } from "../../../constants";
function ScheduleForm({ compenentType }) {
  const {
    campaignSchedularForm: {
      formData: { inputData, selectData },
    },
  } = jsonData;

  const [formValues, setFormValues] = useState({});

  const updateFormValue = (updateType, value) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [updateType]: value,
    }));
  };

  return (
    <div>
      <form className="flex flex-col p-4 ">
        <div className="mb-4">
          <Select
            labelTitle={selectData.label}
            labelStyle={""}
            optionTitle={selectData.optionTitle}
            options={selectData.options}
            containerStyle={`mr-4`}
            defaultValue=""
            updateFormValue={updateFormValue}
            updateType={selectData.name}
          />
          <div
            className={`flex flex-row  `}
          >
            {inputData.map((item, index) => (
              <InputText
                key={item.id}
                type={item.type}
                defaultValue={formValues[item.name]}
                updateType={item.name}
                containerStyle={`mr-4 mt-4`}
                labelTitle={item.label}
                updateFormValue={updateFormValue}
                placeholder={item.placeholder}
              />
            ))}
          </div>
        </div>
      </form>
    </div>
  );
}

export default ScheduleForm;
