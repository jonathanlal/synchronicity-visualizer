import { SyncData } from "@/types/sync-data";

export const getDataForSyncFrequency = (data: SyncData) => {
  const syncFrequencies = Object.values(data.users).reduce((acc, user) => {
    if (user.records) {
      Object.values(user.records).forEach((record) => {
        acc[record.sync] = (acc[record.sync] || 0) + 1;
      });
    }
    return acc;
  }, {} as { [key: string]: number });

  const labels = Object.keys(syncFrequencies).sort((a, b) => {
    return a.localeCompare(b, undefined, {
      numeric: true,
      sensitivity: "base",
    });
  });
  const frequencies = labels.map((label) => syncFrequencies[label]);

  return { labels, frequencies };
};
