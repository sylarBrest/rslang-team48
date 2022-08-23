export type RemoveLater = 'remove' | 'delete';

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

export type TTemporalSprintWordsData = {
  dictionary: Record<string, TTemporalDictionary>;
  wordPairs: TSprintWordPairs[];
  gameAnswers: TSprintGameAnswers[];
};

export type TTemporalDictionary = {
  wordTranslate: string;
  id: string;
};

export type TSprintWordPairs = {
  word: string;
  wordTranslate: string;
};

export type TSprintGameAnswers = {
  id: string;
  word: string;
  wordTranslate: string;
  isCorrectAnswer: string;
};
