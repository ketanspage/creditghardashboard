import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import TitleCard from "../Cards/TitleCard";
import { useRef, useCallback } from "react";
import ArrowDownTrayIcon from "@heroicons/react/24/outline/ArrowDownTrayIcon";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function BarChart({ labels = [], label1, label2, data1, data2, cardTitle }) {
  const arrLength = 10; // Adjust the array length as needed
const defaultData = Array.from({ length: arrLength }, () => Math.round(Math.random() * 1000));
  const defaultData2 = defaultData.map((value) => {
    const randomSubtraction = Math.round(Math.random() * 500);
    return Math.max(0, value - randomSubtraction); 
});

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

  const chartData = {
    labels,
    datasets: [
      {
        label: label1,
        data: data1 || defaultData,
        backgroundColor: "rgba(0, 0, 255, 0.6)",
      },
      {
        label: label2,
        data: data2 || defaultData2,
        backgroundColor: "rgba(0, 0, 255, 0.2)",
      },
    ],
  };

  return (
    <TitleCard
      title={cardTitle}
      topMargin="mt-2"
      isDownload={true}
      tooltip="Download Chart"
      handleClick={downloadImage}
    >
      <Bar options={options} data={chartData} ref={ref} />
    </TitleCard>
  );
}

export default BarChart;
