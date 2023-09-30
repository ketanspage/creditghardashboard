import React from "react";

import { ArrowDownIcon } from "../../../../assets/icons/ArrowDownIcon";

const SortButton = ({ sortConfig, onSort, header }) => {
  const handleClick = () => {
    onSort(header?.field);
  };
  return (
    <button className="btn-xs" onClick={handleClick}>
      <ArrowDownIcon
        size={12}
        className={
          sortConfig?.direction === "asc" && sortConfig?.field === header?.field
            ? "rotate-180 transition-transform ease-in-out"
            : "rotate-0 transition-transform ease-in-out"
        }
      />
    </button>
  );
};

export default SortButton;
