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
  gameNew: string;
  appeared: number;
  correct: number;
  series: number;
};

export type IGameStatistics = {
  game: string;
  percent: number;
  series: number;
  date: string;
};
