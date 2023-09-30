import React from "react";

const UploadedDateRender = ({ rowData }) => {
    
  return (
    <p>
      {rowData?.uploadedDate
        ? new Date(rowData?.uploadedDate).toLocaleDateString("en-US")
        : ""}
    </p>
  );
};

export default UploadedDateRender;
