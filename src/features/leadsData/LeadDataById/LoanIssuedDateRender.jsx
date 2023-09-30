import React from "react";

const LoanIssuedDateRender = ({ rowData }) => {
    
  return (
    <p>
      {rowData?.loanIssuedDate
        ? new Date(rowData?.loanIssuedDate).toLocaleDateString("en-US")
        : ""}
    </p>
  );
};

export default LoanIssuedDateRender;
