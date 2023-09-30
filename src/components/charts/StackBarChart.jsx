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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function StackBarChart({
  labels = [],
  label1,
  label2,
  label3,
  data1,
  data2,
  data3,
  cardTitle,
}) {
  const ref = useRef(null);
  const downloadImage = useCallback(() => {
    const link = document.createElement("a");
    link.download = "chart.png";
    link.href = ref.current.toBase64Image();
    link.click();
  }, []);
  const options = {
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
    plugins:{
      tooltip: {
        callbacks: {
          title:()=>null,
          label: (context) => {
            return `${context.raw}`;
          },
        },
      },
    }
  };

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: label1,
        data: data1 || labels.map(() => Math.round(Math.random() * 1000 + 500)),
        backgroundColor: "rgba(255, 99, 132, 1)",
      },
      {
        label: label2,
        data: data2 || labels.map(() => Math.round(Math.random() * 1000 + 500)),
        backgroundColor: "rgba(53, 162, 235, 1)",
      },
      {
        label: label3,
        data: data3 || labels.map(() => Math.round(Math.random() * 1000 + 500)),
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

export default StackBarChart;
