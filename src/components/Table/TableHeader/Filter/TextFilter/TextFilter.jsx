import React from "react";
import Select from "../SelectFilter";
import Input from "../Input";

const TextFilter = ({
  selectedFilterType,
  textValue,
  onFilterTypeChange,
  onTextChange,
  filterOptions = [],
}) => {
  const handleTextChange = (e) => {
    onTextChange(e.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-between">
      <Select
        options={filterOptions}
        value={selectedFilterType}
        onChange={onFilterTypeChange}
      />
      <Input type="text" value={textValue} handleChange={handleTextChange} />
    </div>
  );
};

export default TextFilter;
