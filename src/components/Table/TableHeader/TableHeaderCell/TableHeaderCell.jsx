import React from "react";
import PinnedButton from "../PinnedButton";
import SortButton from "../SortButton";
import Filter from "../Filter";
import FilterButton from "../Filter/FilterButton";

const TableHeaderCell = ({
  header,
  isPinned = false,
  sortable = false,
  filterable = false,
  isLastColumn = false,
  isSecondLastColumn = false,
  tableHeaderClassName = "",
  filterType = "text",
  isPinnedColumn = false,
  onPinToggle,
  headers = [],
  width = 150,
  onSort,
  sortConfig,
  updateFilterObject,
}) => {
  
  const [openFilter, setOpenFilter] = React.useState(false);

  const getLeftPosition = () => {
    const columnIndex = headers.findIndex(
      (column) => column.field === header.field
    );
    if (columnIndex === -1) return 0;

    const prevColumnsTotalWidth = headers
      .slice(0, columnIndex)
      .reduce((curr, column) => {
        if (column.width === undefined) {
          column["width"] = width;
        }
        return columnIndex * column.width;
      }, 0);
    return prevColumnsTotalWidth;
  };

  const toggleFilter = (value) => {
    setOpenFilter(value);
  };

  return (
    <th
      key={header.field}
      className={`!px-6 !py-4 ${
        isPinnedColumn ? "sticky bg-white dark:bg-slate-800  z-10" : ""
      } `}
      style={{
        left: getLeftPosition(),
        width: `${width}px`,
        right: isPinnedColumn ? "-1px" : "",
      }}
    >
      {header.headerName}
      {isPinned && (
        <PinnedButton
          isPinnedColumn={isPinnedColumn}
          onPinToggle={onPinToggle}
          header={header}
        />
      )}
      {sortable && (
        <SortButton onSort={onSort} sortConfig={sortConfig} header={header} />
      )}
      {filterable && (
        <div
          className={`dropdown dropdown-bottom  ${
            isLastColumn ? "dropdown-end" : ""
          } ${
            isSecondLastColumn ? "dropdown-end" : ""
          } ${tableHeaderClassName}`}
        >
          <FilterButton openFilter={openFilter} toggleFilter={toggleFilter} />
          <Filter
            openFilter={openFilter}
            filterType={filterType}
            updateFilterObject={updateFilterObject}
            field={header?.field}
            filterParams={header?.filterParams}
            toggleFilter={toggleFilter}
          />{" "}
        </div>
      )}
    </th>
  );
};

export default TableHeaderCell;
