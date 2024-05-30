import { SyncData } from "@/types/sync-data";

export const getDataForSyncFrequencyMonths = (data: SyncData) => {
  const monthFrequencies = Object.values(data.users).reduce((acc, user) => {
    if (user.records) {
      Object.values(user.records).forEach((record) => {
        // Assuming the date format is "DD/Mon/YYYY"
        const month = record.date.split("/")[1];
        acc[month] = (acc[month] || 0) + 1;
      });
    }
    return acc;
  }, {} as { [key: string]: number });

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const labels = months.filter((month) => monthFrequencies[month]);
  const frequencies = labels.map((month) => monthFrequencies[month]);

  return { labels, frequencies };
};
