import React from "react";

const LoanEndDateRender = ({ rowData }) => {
  return (
    <p>
      {rowData?.loanEndDate
        ? new Date(rowData?.loanEndDate).toLocaleDateString("en-US")
        : ""}
    </p>
  );
};

export default LoanEndDateRender;
