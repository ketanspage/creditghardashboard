import React from "react";
import FunnelIcon from '@heroicons/react/24/outline/FunnelIcon'
const FilterButton = ({ buttonName = "", className = "", handleClick }) => {
  return (
    <button onClick={handleClick} className={`btn btn-primary ${className}`}>
      <FunnelIcon className="w-5 mr-2" />
      {buttonName}
    </button>
  );
};

export default FilterButton;
