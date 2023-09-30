import React from "react";

const Loader = () => {
  return (
    <div className="relative p-4 inset-0 flex justify-start items-start h-full">
      <div className="absolute inset-0 bg-gray-500 opacity-30 z-10"></div>

      <div className="loading loading-spinner text-primary z-20"></div>
    </div>
  );
};

export default Loader;
