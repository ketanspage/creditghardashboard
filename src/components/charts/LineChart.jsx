import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
} from "chart.js";
import { Line } from "react-chartjs-2";
import TitleCard from "../Cards/TitleCard";
import { useRef, useCallback } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function LineChart({ labels = [], label, data, cardTitle }) {
  const defaultData = labels.map(() => Math.round(Math.random() * 1000 + 500));
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

  const chartData = {
    labels,
    datasets: [
      {
        fill: true,
        label,
        data: data || defaultData,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
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
      <Line options={options} data={chartData} ref={ref} />
    </TitleCard>
  );
}

export default LineChart;
