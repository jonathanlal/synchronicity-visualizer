import GraphSelector, { GraphType } from "@/components/graph-selector";
import { SyncData } from "@/types/sync-data";
import { getDataForAccuracyDistribution } from "@/utils/getDataForAccuracyDistribution";
import { getDataForHourDistribution } from "@/utils/getDataForHourDistribution";
import { getDataForSyncFrequency } from "@/utils/getDataForSyncFrequency";
import { getDataForSyncFrequencyMonths } from "@/utils/getDataForSyncFrequencyMonths";
import { getDataForUserSyncs } from "@/utils/getDataForUserSyncs";
import fs from "fs";
import path from "path";

export default function Home() {
  const filePath = path.join(process.cwd(), "transformed/normalized-data.json");
  const rawData = fs.readFileSync(filePath, "utf8");
  const data: SyncData = JSON.parse(rawData);

  // Prepare all graph data
  const graphData: Record<GraphType, { labels: string[]; frequencies: number[] }> = {
    "sync-frequency": getDataForSyncFrequency(data),
    "monthly-trends": getDataForSyncFrequencyMonths(data),
    "user-activity": getDataForUserSyncs(data),
    "accuracy-distribution": getDataForAccuracyDistribution(data),
    "hour-distribution": getDataForHourDistribution(data),
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-black py-8">
      <GraphSelector graphData={graphData} />
    </div>
  );
}
