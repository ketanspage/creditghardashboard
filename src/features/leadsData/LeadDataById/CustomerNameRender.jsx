import React from "react";

const CustomerNameRender = ({ rowData }) => {
  return <p>{rowData?.customer?.name}</p>;
};

export default CustomerNameRender;
