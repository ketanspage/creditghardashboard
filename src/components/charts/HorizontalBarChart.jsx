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

function BarChart({ labels: propLabels = [], label1, data1, cardTitle }) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display:false
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
  const ref = useRef(null);
  const downloadImage = useCallback(() => {
    const link = document.createElement("a");
    link.download = "chart.png";
    link.href = ref.current.toBase64Image();
    link.click();
  }, []);
  const defaultData = propLabels.map(() => Math.round(Math.random() * 1000 + 500));

  const chartData = {
    labels: propLabels,
    datasets: [
      {
        label: label1,
        data: data1 || defaultData,
        backgroundColor: "rgba(0, 0, 255, 0.6)",
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
      <Bar options={options} data={chartData} ref={ref} />
    </TitleCard>
  );
}

export default BarChart;
