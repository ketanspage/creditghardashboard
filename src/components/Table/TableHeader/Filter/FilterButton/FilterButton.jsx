import React from "react";
import { FilterIcon } from "../../../../../assets/icons/FilterIcon";

const FilterButton = ({ openFilter, toggleFilter }) => {
  
    const handleClick = React.useCallback(() => {
    toggleFilter(!openFilter);
  }, [openFilter]);

  return (
    <button className=" btn-xs" onClick={handleClick}>
      <FilterIcon size={14} />
    </button>
  );
};

export default FilterButton;
