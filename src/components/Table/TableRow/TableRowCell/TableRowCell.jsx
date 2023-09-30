import React from "react";

const TableRowCell = ({
  rowData,
  header,
  isPinnedColumn = false,
  headers = [],
  width = 150,
}) => {
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
  return (
    <td
      className={` p-0 ${
        isPinnedColumn
          ? "sticky bg-white dark:bg-slate-800 hover:bg-gray-50 transition-colors  "
          : "hover:bg-gray-50 transition-colors bg-inherit "
      }`}
      style={{
        left: getLeftPosition(),
        width: `${width}px`,
        right: isPinnedColumn ? "-1px" : "",
      }}
    >
      <div
        className={`w-full h-full px-4 py-2 flex flex-1 items-center justify-center ${
          isPinnedColumn
            ? " sticky z-50  hover:bg-gray-50  "
            : "hover:bg-gray-50 transition-colors"
        }`}
        style={{
          boxShadow: isPinnedColumn ? "8px 0px 20px 0px #97979738" : "",
        }}
      >
        {header?.cellRenderer ? (
          // Render the custom cell using the provided cellRenderer
          <header.cellRenderer rowData={rowData} />
        ) : (
          // Render the default cell if no custom cellRenderer is provided
          <span>{rowData[header.field]}</span>
        )}
      </div>
    </td>
  );
};

export default TableRowCell;
