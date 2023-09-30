import { useState } from "react";

function Select({
  labelTitle='',
  labelStyle='',
  optionTitle,
  options = [],
  containerStyle,
  defaultValue = "",
  updateFormValue,
  updateType,
}) {
  const [value, setValue] = useState(defaultValue);

  const updateInputValue = (event) => {
    setValue(event.target.value);
    updateFormValue({ updateType, value: event.target.value });
  };

  return (
    <div className={`form-control w-full ${containerStyle}`}>
      <label className="label">
        <span className={"label-text text-base-content " + labelStyle}>
          {labelTitle}
        </span>
      </label>
      <select
        className="select select-bordered"
        onChange={updateInputValue}
        value={value}
      >
        <option disabled selected>
          {optionTitle}
        </option>
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
}

export default Select;
