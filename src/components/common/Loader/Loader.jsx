import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      {/* Use Daisy UI's spinner component */}
      <div className="loading loading-spinner text-primary"></div>
    </div>
  );
};

export default Loader;
