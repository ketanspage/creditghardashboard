import {
  Chart as ChartJS,
  Filler,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Scatter } from "react-chartjs-2";
import TitleCard from "../Cards/TitleCard";
import { useRef, useCallback } from "react";

ChartJS.register(ArcElement, Tooltip, Legend, Tooltip, Filler, Legend);

function ScatterChart({ cardTitle, label1, label2 }) {
  const ref = useRef(null);
  const downloadImage = useCallback(() => {
    const link = document.createElement("a");
    link.download = "chart.png";
    link.href = ref.current.toBase64Image();
    link.click();
  }, []);

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const data = {
    datasets: [
      {
        label: label1,
        data: Array.from({ length: 100 }, () => ({
          x: Math.random() * 11,
          y: Math.random() * 31,
        })),
        backgroundColor: "rgba(255, 99, 132, 1)",
      },
      {
        label: label2,
        data: Array.from({ length: 100 }, () => ({
          x: Math.random() * 12,
          y: Math.random() * 12,
        })),
        backgroundColor: "rgba(0, 0, 255, 1)",
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
      <Scatter options={options} data={data} ref={ref} />
    </TitleCard>
  );
}

export default ScatterChart;
