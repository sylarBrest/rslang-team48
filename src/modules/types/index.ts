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
  sprintWordPairs: [] | TSprintWordPairs[];
  sprintGameAnswers: [] | TSprintGameAnswers[];
};

export type TSprintWordPairs = {
  id: string,
  word: string;
  wordTranslate: string;
  isCorrect: string;
};

export type TSprintGameAnswers = {
  id: string,
  wordText: string;
  wordTranslateText: string;
  isCorrectAnswer: string;
};
