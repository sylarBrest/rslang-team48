export type TDifficulty = 'unset' | 'known' | 'hard';

export type TUserWord = {
  id: string;
  difficulty: TDifficulty;
  optional: TOptionalWord;
  wordId: string;
};

export type TOptionalWord = {
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
