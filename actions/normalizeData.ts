"use server";

import { SyncData, User, Record } from "@/types/sync-data";
import fs from "fs";
import path from "path";

export const normalizeData = async () => {
  const filePath = path.join(process.cwd(), "sync-data.json");
  const rawData = fs.readFileSync(filePath, "utf8");
  const data: SyncData = JSON.parse(rawData);

  const fixedRecords = Object.entries(data.users).reduce(
    (acc: { [key: string]: User }, [userId, user]) => {
      if (user.records) {
        // Check if records are present
        const records = Object.entries(user.records).reduce(
          (recAcc: { [key: string]: Record }, [recordId, record]) => {
            const parts = record.sync.split(":");
            const fixedHour = parts[0].length === 1 ? `0${parts[0]}` : parts[0];
            const fixedMinute =
              parts[1].length === 1 ? `0${parts[1]}` : parts[1];
            record.sync = `${fixedHour}:${fixedMinute}`; // Correct the sync format
            recAcc[recordId] = record; // Store the corrected record
            return recAcc;
          },
          {}
        );
        acc[userId] = { ...user, records }; // Update the user with fixed records
      } else {
        acc[userId] = { ...user }; // Directly assign the user if no records are present
      }
      return acc;
    },
    {}
  );

  fs.writeFileSync(
    path.join(process.cwd(), "transformed/normalized-data.json"),
    JSON.stringify({ users: fixedRecords }, null, 2),
    "utf8"
  );

  console.log("Fixed data has been saved.");
};
