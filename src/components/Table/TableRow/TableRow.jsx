import React from "react";
import TableRowCell from "./TableRowCell";

const TableRow = ({ rowData, headers = [] }) => {
  return (
    <tr className=" hover:bg-gray-50 transition-colors">
      {headers.map((header, index) => (
        <TableRowCell
          rowData={rowData}
          header={header}
          isPinnedColumn={header?.isPinnedColumn}
          key={header.field}
          headers={headers}
        />
      ))}
    </tr>
  );
};

export default TableRow;
