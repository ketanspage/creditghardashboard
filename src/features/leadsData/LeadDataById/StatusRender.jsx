import React from "react";

const StatusRender = ({ rowData }) => {
  return <p>{rowData?.status ? rowData?.status?.status : ""}</p>;
};

export default StatusRender;
