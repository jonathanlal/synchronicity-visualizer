import { SyncData } from "@/types/sync-data";

export const getDataForHourDistribution = (data: SyncData) => {
  const hourFrequencies: { [key: string]: number } = {};

  Object.values(data.users).forEach((user) => {
    if (user.records) {
      Object.values(user.records).forEach((record) => {
        const hour = record.sync.split(":")[0];
        const hourNum = parseInt(hour);
        hourFrequencies[hourNum] = (hourFrequencies[hourNum] || 0) + 1;
      });
    }
  });

  // Create labels for all 24 hours
  const labels = Array.from({ length: 24 }, (_, i) =>
    i.toString().padStart(2, '0') + ":00"
  );

  const frequencies = Array.from({ length: 24 }, (_, i) =>
    hourFrequencies[i] || 0
  );

  return { labels, frequencies };
};
