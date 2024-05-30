"use client";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  LinearScale,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

export default function FrequencyChart({
  labels,
  frequencies,
}: {
  labels: string[];
  frequencies: number[];
}) {
  const data = {
    labels,
    datasets: [
      {
        label: "Frequency of Sync Times",
        data: frequencies,
        backgroundColor: "rgba(153, 102, 255, 0.6)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 1,
      },
    ],
  };
  return (
    <Bar
      data={data}
      options={{
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        responsive: true,
      }}
    />
  );
}
