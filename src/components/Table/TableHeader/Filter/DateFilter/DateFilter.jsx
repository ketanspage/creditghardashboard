import React from "react";
import Select from "../SelectFilter";
import Input from "../Input";

const DateFilter = ({
  selectedFilterType,
  fromDateValue,
  toDateValue,
  isDateTime,
  onFilterTypeChange,
  onFromDateChange,
  onToDateChange,
  filterOptions = [],
}) => {
  const handleFromDateChange = (e) => {
    onFromDateChange(e.target.value);
  };

  const handleToDateChange = (e) => {
    onToDateChange(e.target.value);
  };

  const renderInput = (type, value, onChange) => {
    return <Input type={type} value={value} handleChange={onChange} />;
  };

  return (
    <div className="flex flex-col justify-between items-center">
      <Select
        options={filterOptions}
        value={selectedFilterType}
        onChange={onFilterTypeChange}
      />
      {(selectedFilterType === "equals" ||
        selectedFilterType === "greaterThan" ||
        selectedFilterType === "lessThan" ||
        selectedFilterType === "notEqual") && (
        <Input
          type={isDateTime ? "datetime-local" : "date"}
          value={fromDateValue}
          handleChange={handleFromDateChange}
        />
      )}
      {selectedFilterType === "inRange" && (
        <>
          {renderInput(
            isDateTime ? "datetime-local" : "date",
            fromDateValue,
            handleFromDateChange
          )}
          <span className="text-gray-500">to</span>
          {renderInput(
            isDateTime ? "datetime-local" : "date",
            toDateValue,
            handleToDateChange
          )}
        </>
      )}
    </div>
  );
};

export default DateFilter;
