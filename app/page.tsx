import FrequencyChart from "@/components/frequency-chart";
import { SyncData } from "@/types/sync-data";
import { getDataForSyncFrequency } from "@/utils/getDataForSyncFrequency";
import { getDataForSyncFrequencyMonths } from "@/utils/getDataForSyncFrequencyMonths";
import { getDataForUserSyncs } from "@/utils/getDataForUserSyncs";
import fs from "fs";
import path from "path";

export default function Home() {
  const filePath = path.join(process.cwd(), "transformed/normalized-data.json");
  const rawData = fs.readFileSync(filePath, "utf8");
  const data: SyncData = JSON.parse(rawData);

  const syncFrequencyData = getDataForSyncFrequency(data);
  // const syncMonthFrequencyData = getDataForSyncFrequencyMonths(data);
  // const userSyncData = getDataForUserSyncs(data);
  return (
    <div className="container mx-auto mt-20">
      <FrequencyChart
        labels={syncFrequencyData.labels}
        frequencies={syncFrequencyData.frequencies}
      />
    </div>
  );
}
