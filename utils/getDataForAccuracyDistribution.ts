import { SyncData } from "@/types/sync-data";

export const getDataForAccuracyDistribution = (data: SyncData) => {
  const accuracyBuckets = {
    "0-5s": 0,
    "6-10s": 0,
    "11-20s": 0,
    "21-30s": 0,
    "31-45s": 0,
    "46-60s": 0,
  };

  Object.values(data.users).forEach((user) => {
    if (user.records) {
      Object.values(user.records).forEach((record) => {
        const diff = parseInt(record.diff);
        if (diff <= 5) accuracyBuckets["0-5s"]++;
        else if (diff <= 10) accuracyBuckets["6-10s"]++;
        else if (diff <= 20) accuracyBuckets["11-20s"]++;
        else if (diff <= 30) accuracyBuckets["21-30s"]++;
        else if (diff <= 45) accuracyBuckets["31-45s"]++;
        else accuracyBuckets["46-60s"]++;
      });
    }
  });

  const labels = Object.keys(accuracyBuckets);
  const frequencies = Object.values(accuracyBuckets);

  return { labels, frequencies };
};
