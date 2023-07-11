export type TPlayerInfo = {
  name: string;
  photo: string;
  level: number;
};

export type TMatch = {
  teamA: Array<TPlayerInfo>;
  teamB: Array<TPlayerInfo>;
  datetime: Date;
  ranked: boolean;
  location: string;
  duration: number;
};
