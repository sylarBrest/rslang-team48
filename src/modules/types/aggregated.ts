import { TDifficulty, TWordContent } from './words';
import { IOptionalWord } from './optional';

export type UserWord = {
  difficulty: TDifficulty;
  optional: IOptionalWord;
};

type CombinedWord = TWordContent & {
  userWord?: UserWord;
};

export type AggregatedWord = {
  paginatedResults: CombinedWord[];
  totalCount: [{ count: number }],
};
