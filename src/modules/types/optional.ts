export type TDifficulty = 'unset' | 'known' | 'hard';

export type TPageParameters = {
  group: string;
  page: string;
};

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

export type TGameStat = {
  date: string;
  attempts: number;
  correct: number;
  streak: number;
};

export type TOptionalStat = {
  date: string;
  audiocall: TGameStat;
  sprint: TGameStat;
  appeared: number;
  correct: number;
  textbook: TPageParameters;
};

export type TUserStat = {
  learnedWords: number;
  optional: TOptionalStat;
};
