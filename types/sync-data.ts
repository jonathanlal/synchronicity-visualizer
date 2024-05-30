export type Record = {
  clicked: string;
  date: string;
  diff: string;
  sync: string;
  uid: string;
};

export type Username = {
  username: string;
};

export type User = {
  records?: {
    [key: string]: Record;
  };
  username: {
    [key: string]: Username;
  };
};

export type SyncData = {
  users: {
    [key: string]: User;
  };
};
