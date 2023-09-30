import React from "react";

const PortfolioTypeRender = ({ rowData }) => {
  return <p>{rowData?.portfolioType?.name}</p>;
};

export default PortfolioTypeRender;
