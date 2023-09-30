import React from "react";
import JourneyBuilderForm from "./JourneyBuilderForm";
import JourneyBuilderCard from "./JournetBuilderCards";
function Campaign() {
  return (
    <>
      <h1 className="text-2xl font-bold">Campaign Scheduler</h1>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="mt-20 ">
          <JourneyBuilderForm/>
        </div>
        <JourneyBuilderCard/>
      </div>
    </>
  );
}
export default Campaign;
