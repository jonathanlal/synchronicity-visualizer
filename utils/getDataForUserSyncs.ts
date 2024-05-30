import { SyncData } from "@/types/sync-data";

export const getDataForUserSyncs = (data: SyncData) => {
  const userFrequencies = Object.entries(data.users).reduce(
    (acc, [userId, user]) => {
      const syncCount = user.records ? Object.keys(user.records).length : 0;
      // Assuming each user has a 'username' object with nested entries
      const usernameEntry = Object.entries(user.username)[0]; // Get the first username entry
      const username = usernameEntry
        ? usernameEntry[1].username
        : "Unknown User"; // Safely access the username
      acc[username] = (acc[username] || 0) + syncCount; // Use username as key
      return acc;
    },
    {} as { [key: string]: number }
  );

  const userLabels = Object.keys(userFrequencies);
  const frequencies = Object.values(userFrequencies);

  return { labels: userLabels, frequencies };
};
