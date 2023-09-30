import React from "react";
import Checkbox from "../Checkbox";

const SelectedCheckboxFilter = ({ options, onSelectionChange }) => {
  const [selectedOptions, setSelectedOptions] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [selectAllState, setSelectAllState] = React.useState("none");

  // Function to filter options based on the search term
  const filteredOptions = React.useMemo(() => {
    return options.filter((option) => {
      if (typeof option === "object") {
        // Handle options in the format of { label, value }
        return option.label.toLowerCase().includes(searchTerm.toLowerCase());
      } else {
        // Handle options in the format of 'value'
        return option.toLowerCase().includes(searchTerm.toLowerCase());
      }
    });
  }, [options, searchTerm]);

  const allSelected = React.useMemo(() => {
    return selectedOptions.length === filteredOptions.length;
  }, [selectedOptions, filteredOptions]);

  const someSelected = React.useMemo(() => {
    return selectedOptions.length > 0 && !allSelected;
  }, [selectedOptions, allSelected]);

  React.useEffect(() => {
    if (allSelected) {
      setSelectAllState("all");
    } else if (someSelected) {
      setSelectAllState("some");
    } else {
      setSelectAllState("none");
    }
    onSelectionChange(selectedOptions);
  }, [allSelected, someSelected, selectedOptions]);

  // Function to handle individual item selection
  const handleOptionChange = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  // Function to handle selecting all items
  const handleSelectAll = () => {
    if (selectAllState === "all") {
      // If all items are currently selected, deselect all
      setSelectedOptions([]);
    } else {
      // Otherwise, select all items
      setSelectedOptions(filteredOptions);
    }
  };

  return (
    <div className="">
      {" "}
      <div className="mt-2 mb-2">
        <input
          type="text"
          className="w-full border border-gray-300 p-2 rounded"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="p-1 space-y-1">
        <Checkbox
          checked={selectAllState === "all"}
          indeterminate={selectAllState === "some" ? true : undefined}
          onChange={handleSelectAll}
          label=" Select All"
        />

        {filteredOptions.map((option, index) => (
          <Checkbox
            key={typeof option === "object" ? option.label : option}
            checked={selectedOptions.includes(option)}
            onChange={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleOptionChange(option);
            }}
            label={typeof option === "object" ? option.label : option}
          />
        ))}
      </div>
    </div>
  );
};

export default SelectedCheckboxFilter;
