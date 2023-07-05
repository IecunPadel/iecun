export type TPlayerInfo = {
  name: string;
  photo: string;
  level: number;
};

export type TMatch = {
  teamA: Array<PlayerInfo>;
  teamB: Array<PlayerInfo>;
  datetime: Date;
  ranked: boolean;
  location: string;
  duration: number;
};
