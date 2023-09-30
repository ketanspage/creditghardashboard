import {
  Chart as ChartJS,
  Filler,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import TitleCard from "../Cards/TitleCard";
import { useRef, useCallback } from "react";

ChartJS.register(ArcElement, Tooltip, Legend, Tooltip, Filler, Legend);

function DoughnutChart({ labels, label1, cardTitle }) {
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

  const data = {
    labels,
    datasets: [
      {
        label: label1,
        data: [122, 219, 30, 51],
        backgroundColor: [
          "rgba(255, 99, 132, 0.8)",
          "rgba(54, 162, 235, 0.8)",
          "rgba(255, 206, 86, 0.8)",
          "rgba(75, 192, 192, 0.8)",
          
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <TitleCard
      title={cardTitle}
      isDownload={true}
      tooltip="Download Chart"
      handleClick={downloadImage}
    >
      <Doughnut options={options} data={data} ref={ref} />
    </TitleCard>
  );
}

export default DoughnutChart;
