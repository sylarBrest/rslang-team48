export type TWordContent = {
  id: string;
  group: number;
  page: number;
  word: string;
  image: string;
  audio: string;
  audioMeaning: string;
  audioExample: string;
  textMeaning: string;
  textExample: string;
  transcription: string;
  wordTranslate: string;
  textMeaningTranslate: string;
  textExampleTranslate: string;
};

export type TTemporalWordsData = {
  dictionary: Record<string, TTemporalDictionary>;
  wordPairs: TSprintWordPairs[];
  translationOptions: TTranslationOptions[];
  gameAnswers: TSprintGameAnswers[];
};

export type TTemporalDictionary = {
  wordTranslate: string;
  id: string;
  audio: string;
  image: string;
};

export type TSprintWordPairs = {
  word: string;
  wordTranslate: string;
};

export type TTranslationOptions = {
  word: string;
  wordTranslateOne: string;
  wordTranslateTwo: string;
  wordTranslateThree: string;
  wordTranslateFour: string;
  wordTranslateFive: string;
};

export type TSprintGameAnswers = {
  id: string;
  word: string;
  wordTranslate: string;
  isCorrectAnswer: string;
};

export type TPageParameters = {
  group: string;
  page: string;
};

export type TDifficulty = 'unset' | 'known' | 'hard';

export type TOptionalWord = {
  updateAt: string;
  appeared: number;
  correctly: number;
  attempts: number;
};

export type TGameStat = {
  right: number;
  wrong: number;
  streak: number;
};

export type TOptionalStat = {
  date: string;
  audiocall: TGameStat;
  sprint: TGameStat;
  appeared: number;
  correctly: number;
};

export type TUserWord = {
  id: string;
  difficulty: TDifficulty;
  optional: TOptionalWord;
  wordId: string;
};

export type TUserStat = {
  learnedWords: number;
  optional: TOptionalStat;
};
