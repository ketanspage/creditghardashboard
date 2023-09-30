import React from "react";
import TableHeaderCell from "./TableHeaderCell";

const TableHeader = ({
  headers,
  onPinToggle,
  sortConfig,
  updateFilterObject,
  onSort,
}) => {
  
  return (
    <thead className="bg-inherit">
      <tr className="bg-inherit">
        {headers.map((header, i) => (
          <TableHeaderCell
            headers={headers}
            header={header}
            isPinned={header?.isPinned}
            sortable={header?.sortable}
            filterable={header?.filterable}
            key={header.field}
            isLastColumn={headers?.length - 1 === i}
            isSecondLastColumn={headers?.length - 2 === i}
            filterType={header?.filterType}
            onPinToggle={onPinToggle}
            isPinnedColumn={header?.isPinnedColumn}
            sortConfig={sortConfig}
            onSort={onSort}
            updateFilterObject={updateFilterObject}
          />
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
