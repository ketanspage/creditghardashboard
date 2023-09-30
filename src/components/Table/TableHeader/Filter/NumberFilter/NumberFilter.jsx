import React from "react";
import Select from "../SelectFilter";
import Input from "../Input";

const NumberFilter = ({
  selectedFilterType,
  valueFrom,
  valueTo,
  onFilterTypeChange,
  onValueFromChange,
  onValueToChange,
  filterOptions = [],
}) => {
  const handleValueFromChange = (e) => {
    onValueFromChange(e.target.value);
  };

  const handleValueToChange = (e) => {
    onValueToChange(e.target.value);
  };

  return (
    <div className="flex flex-col justify-between items-center">
      <Select
        options={filterOptions}
        value={selectedFilterType}
        onChange={onFilterTypeChange}
      />
      {(selectedFilterType === "equals" ||
        selectedFilterType === "notEqual" ||
        selectedFilterType === "lessThan" ||
        selectedFilterType === "lessThanOrEqual" ||
        selectedFilterType === "greaterThan" ||
        selectedFilterType === "greaterThanOrEqual") && (
        <Input
          type="number"
          value={valueFrom}
          handleChange={handleValueFromChange}
        />
      )}
      {selectedFilterType === "inRange" && (
        <>
          <Input
            type="number"
            value={valueFrom}
            handleChange={handleValueFromChange}
          />

          <span className="text-gray-500">to</span>
          <Input
            type="number"
            value={valueTo}
            handleChange={handleValueToChange}
          />
        </>
      )}
    </div>
  );
};

export default NumberFilter;
