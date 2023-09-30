import BarChart from "../../components/charts/BarChart";
import DoughnutChart from "../../components/charts/DoughnutChart";
import PieChart from "./components/PieChart";
import StackBarChart from "../../components/charts/StackBarChart";
import Datepicker from "react-tailwindcss-datepicker";
import LineChart from "../../components/charts/LineChart";
import SixHourlyTrend from "../../components/charts/HorizontalBarChart";
import { useState } from "react";

function Charts() {
  const [dateValue, setDateValue] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });

  const handleDatePickerValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setDateValue(newValue);
  };

  return (
    <>
      <Datepicker
        containerClassName="w-72"
        value={dateValue}
        theme={"light"}
        inputClassName="input input-bordered w-72"
        popoverDirection={"down"}
        toggleClassName="invisible"
        onChange={handleDatePickerValueChange}
        showShortcuts={true}
        primaryColor={"white"}
      />
      {/** ---------------------- Different charts ------------------------- */}
      <div className="grid lg:grid-cols-2 mt-0 grid-cols-1 gap-6">
        <StackBarChart
          cardTitle={"Total Accounts Issued Bucket Wise"}
          labels={[
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
          ]}
          label1="Bucket 1"
          label2="Bucket 2"
          label3={"Bucket 3"}
        />
        <BarChart
          cardTitle={"Total Account Resolved Bucket Wise"}
          labels={[
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
          ]}
          label1="Bucket 1"
          label2="Bucket 2"
        />
      </div>

      <div className="grid lg:grid-cols-2 mt-4 grid-cols-1 gap-6">
        <DoughnutChart
          cardTitle={"Engagement "}
          label1="# of Orders"
          labels={[
            "Total Clicks",
            "Total Login",
            "PG Landed",
            "Total Resolved",
          ]}
        />
        <PieChart />
      </div>

      <div className="grid lg:grid-cols-2 mt-4 grid-cols-1 gap-6">
        <BarChart
          cardTitle={"State Level Analytics "}
          label1="Orders > 1k"
          label2="Orders > 2K"
          labels={["state a", "state b", "state c"]}
        />
        <LineChart
          cardTitle={"weekly Trend"}
          labels={["week 1", "week 2", "week 3", "week 4"]}
          label="Weekly Trend"
        />
      </div>
      <div className="grid lg:grid-cols-2 mt-4 grid-cols-1 gap-6">
        <LineChart
          cardTitle={"Daily Trend"}
          labels={["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]}
          label="Daily Trend"
        />
        <SixHourlyTrend
          cardTitle={"Six Hourly Trend"}
          labels={[
            "00:00 – 06:00",
            "06:00-12:00",
            "12:00-18:00",
            "18:00-23:59",
          ]}
          label1={"Hourly Trend"}
        />
      </div>
    </>
  );
}

export default Charts;
