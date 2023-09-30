import React from "react";

const SkeletonRow = ({ columns }) => {
  return (
    <tr>
      {columns.map((column) => (
        <td
          key={column.field}
          className="border-t border-gray-200 animate-pulse"
        >
          {/* You can customize the skeleton loading appearance here */}
          <div className="h-4 bg-gray-300 rounded"></div>
        </td>
      ))}
    </tr>
  );
};

export default SkeletonRow;
