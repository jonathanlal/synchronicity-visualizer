"use client";
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface LineChartProps {
  labels: string[];
  frequencies: number[];
  title: string;
  color?: string;
}

export default function LineChart({
  labels,
  frequencies,
  title,
  color = "rgba(75, 192, 192, 0.6)",
}: LineChartProps) {
  const data = {
    labels,
    datasets: [
      {
        label: "Count",
        data: frequencies,
        borderColor: color.replace("0.6", "1"),
        backgroundColor: color,
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: title,
        font: {
          size: 16,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="h-96 w-full">
      <Line data={data} options={options} />
    </div>
  );
}
