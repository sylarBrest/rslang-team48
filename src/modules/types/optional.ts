export type IGameType = 'sprint' | 'audiocall';

type IDifficulty = 'unset' | 'known' | 'hard';

export type IUserWord = {
  id: string;
  difficulty: IDifficulty;
  optional: IOptionalWord;
  wordId: string;
};

export type IOptionalWord = {
  isNew: boolean;
  dateNew: string;
  dateKnown: string;
  gameNew: IGameType;
  appeared: number;
  correct: number;
  series: number;
};

export type IGameStatistics = {
  game: IGameType;
  percent: number;
  series: number;
  date: string;
};
