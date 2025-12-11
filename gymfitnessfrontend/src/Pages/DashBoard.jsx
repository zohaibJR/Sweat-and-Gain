import React from "react";
import SummaryCards from "../Components/SummaryCards/SummaryCards";
import WeightProgress from "../Components/WeightProgress/WeightProgress";

function DashBoard() {
  return (
    <div>
      <SummaryCards />
      <WeightProgress />
    </div>
  );
}

export default DashBoard;
