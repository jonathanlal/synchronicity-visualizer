"use client";

import { useState } from "react";
import BarChart from "./bar-chart";
import LineChart from "./line-chart";

export type GraphType =
  | "sync-frequency"
  | "monthly-trends"
  | "user-activity"
  | "accuracy-distribution"
  | "hour-distribution";

export interface GraphData {
  labels: string[];
  frequencies: number[];
}

export interface GraphOption {
  id: GraphType;
  name: string;
  description: string;
  type: "bar" | "line";
  color: string;
}

const graphOptions: GraphOption[] = [
  {
    id: "sync-frequency",
    name: "Sync Time Frequency",
    description:
      "Shows which synchronicity patterns (11:11, 20:20, etc.) are noticed most frequently across all users.",
    type: "bar",
    color: "rgba(153, 102, 255, 0.6)",
  },
  {
    id: "monthly-trends",
    name: "Monthly Trends",
    description:
      "Displays how synchronicity recordings vary across different months, revealing seasonal patterns.",
    type: "line",
    color: "rgba(75, 192, 192, 0.6)",
  },
  {
    id: "user-activity",
    name: "User Activity",
    description:
      "Compares user engagement by showing which users have recorded the most synchronicity events.",
    type: "bar",
    color: "rgba(255, 159, 64, 0.6)",
  },
  {
    id: "accuracy-distribution",
    name: "Accuracy Distribution",
    description:
      "Analyzes how quickly users notice and record synchronicities after the sync moment occurs.",
    type: "bar",
    color: "rgba(255, 99, 132, 0.6)",
  },
  {
    id: "hour-distribution",
    name: "Hour of Day Distribution",
    description:
      "Shows which hours of the day have the most synchronicity observations, revealing daily patterns.",
    type: "bar",
    color: "rgba(54, 162, 235, 0.6)",
  },
];

interface GraphSelectorProps {
  graphData: Record<GraphType, GraphData>;
}

export default function GraphSelector({ graphData }: GraphSelectorProps) {
  const [selectedGraph, setSelectedGraph] = useState<GraphType>("sync-frequency");

  const currentOption = graphOptions.find((opt) => opt.id === selectedGraph)!;
  const currentData = graphData[selectedGraph];

  return (
    <div className="w-full max-w-7xl mx-auto p-6 space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold text-gray-100">
          Synchronicity Visualizer
        </h1>
        <p className="text-gray-400">
          Explore patterns in synchronicity observations across time and users
        </p>
      </div>

      {/* Graph Selection Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {graphOptions.map((option) => (
          <button
            key={option.id}
            onClick={() => setSelectedGraph(option.id)}
            className={`p-4 rounded-lg border-2 text-left transition-all hover:shadow-lg ${
              selectedGraph === option.id
                ? "border-blue-400 bg-gray-800 shadow-lg shadow-blue-500/20"
                : "border-gray-700 bg-gray-800/50 hover:border-gray-600 hover:bg-gray-800"
            }`}
          >
            <h3 className="font-semibold text-lg mb-1 text-gray-100">{option.name}</h3>
            <p className="text-sm text-gray-400">{option.description}</p>
          </button>
        ))}
      </div>

      {/* Current Graph Info */}
      <div className="bg-gray-800 rounded-lg shadow-xl p-6 space-y-4 border border-gray-700">
        <div className="border-l-4 border-blue-400 pl-4">
          <h2 className="text-2xl font-bold text-gray-100">
            {currentOption.name}
          </h2>
          <p className="text-gray-400 mt-1">{currentOption.description}</p>
        </div>

        {/* Chart */}
        <div className="pt-4">
          {currentOption.type === "bar" ? (
            <BarChart
              labels={currentData.labels}
              frequencies={currentData.frequencies}
              title={currentOption.name}
              color={currentOption.color}
            />
          ) : (
            <LineChart
              labels={currentData.labels}
              frequencies={currentData.frequencies}
              title={currentOption.name}
              color={currentOption.color}
            />
          )}
        </div>
      </div>
    </div>
  );
}
