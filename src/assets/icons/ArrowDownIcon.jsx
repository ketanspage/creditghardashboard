import React from "react";

export const ArrowDownIcon = ({size=36 , fill="#000" , className=""}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
      viewBox="0 0 24 24"
      width={size}
      height={size}
      // strokeWidth={}
      stroke={fill}
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
      />
    </svg>
  );
};


