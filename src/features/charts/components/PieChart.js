import {
  Chart as ChartJS,
  Filler,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Pie } from "react-chartjs-2";
import TitleCard from "../../../components/Cards/TitleCard";
import { useRef, useCallback } from "react";

ChartJS.register(ArcElement, Tooltip, Legend, Tooltip, Filler, Legend);

function PieChart() {
  const ref = useRef(null);
  const downloadImage = useCallback(() => {
    const link = document.createElement("a");
    link.download = "chart.png";
    link.href = ref.current.toBase64Image();
    link.click();
  }, []);
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          title:()=>null,
          label: (context) => {
            return `${context.raw}`;
          },
        },
      },
    },
  };

  const labels = [
    "North",
    "East",
    "West",
    "South"
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "# of Orders",
        data: [122, 219, 30, 51],
        backgroundColor: [
          "rgba(255, 99, 255, 0.8)",
          "rgba(54, 162, 235, 0.8)",
          "rgba(255, 206, 255, 0.8)",
          "rgba(75, 192, 255, 0.8)",
          
        ],
        borderColor: [
          "rgba(255, 99, 255, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 255, 1)",
          "rgba(75, 192, 255, 1)",

        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <TitleCard
      title={"Regional Analytics "}
      isDownload={true}
      tooltip="Download Chart"
      handleClick={downloadImage}
    >
      <Pie options={options} data={data} ref={ref} />
    </TitleCard>
  );
}

export default PieChart;
